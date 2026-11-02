import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import loadable from '@loadable/component';

import { ArrowUpFilled } from "./components/Icons";

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import { routes } from "./utils/routesPath";

import * as styles from "./App.module.scss";

import "./styles/main.scss";

const Home = loadable((/* webpackChunkName: "home" */) => import('./containers/Home'));
const About = loadable((/* webpackChunkName: "about" */) => import('./containers/About'));
const Services = loadable((/* webpackChunkName: "services" */) => import('./containers/Services'));
const Portfolio = loadable((/* webpackChunkName: "portfolio" */) => import('./containers/Portfolio'));
const ServiceDetails = loadable((/* webpackChunkName: "service-details" */) => import('./containers/ServiceDetails'));
const ContactUs = loadable((/* webpackChunkName: "contact-us" */) => import('./containers/ContactUs'));
const PrivacyPolicy = loadable((/* webpackChunkName: "privacy-policy" */) => import('./containers/PrivacyPolicy'));
const ThankYou = loadable((/* webpackChunkName: "thank-you" */) => import('./containers/ThankYou'));
const NotFound = loadable((/* webpackChunkName: "not-found" */) => import('./containers/NotFound'));

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App({ initialData = {} }) {
	const backToTopRef = useRef(null);

	const { pathname } = useLocation();

	const [bootstrappedData, setBootstrappedData] = useState(initialData);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	};

	useEffect(() => {
		// Flush the initialData after hydration
		setBootstrappedData({});
	}, []);

	useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const btt = backToTopRef.current;
    if (!btt) return;

    // Initially hide the button (autoAlpha: 0 sets opacity:0 + visibility:hidden)
    gsap.set(btt, { autoAlpha: 0 });

    // Create ScrollTrigger that tracks the whole page (from top to bottom)
    ScrollTrigger.create({
      trigger: document.body,       // use the entire document as trigger
      start: "top top",             // when top of page meets top of viewport
      end: "bottom bottom",         // until bottom of page meets bottom of viewport
      onUpdate: (self) => {
        // If scrolled past 30% of the page, show the button; otherwise hide it
        if (self.progress > 0.2) {
          // Fade in the button
          gsap.to(btt, { autoAlpha: 1, duration: 0.3 });
        } else {
          // Fade out the button
          gsap.to(btt, { autoAlpha: 0, duration: 0.3 });
        }
      }
    });
  }, [pathname]);

	useEffect( () => {
		// Dynamically import only on client-side after hydration
    import('lenis').then((mod) => {
			/** For smooth scroll */
			const lenis = new mod.default();

			function raf(time) {
				lenis.raf(time);
				requestAnimationFrame(raf);
			}

			requestAnimationFrame(raf);
    });
  }, []);

	useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (  
		<>
			<Header />
			<Routes>
				<Route path={routes.home.href} element={<Home initialData={bootstrappedData} />} exact />
				<Route path={routes.about.href} element={<About initialData={bootstrappedData} />} exact />
				<Route path={routes.services.href} element={<Services initialData={bootstrappedData} />} exact />
				<Route path={routes.portfolio.href} element={<Portfolio initialData={bootstrappedData} />} exact />
				<Route path={`${routes.services.href}/:id`} element={<ServiceDetails initialData={bootstrappedData} />} exact />
				<Route path={routes["contact-us"].href} element={<ContactUs initialData={initialData} />} exact />
				<Route path={routes["privacy-policy"].href} element={<PrivacyPolicy />} exact />
				<Route path='/thank-you' element={<ThankYou />} exact />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
			<div
				className={styles.backToTop}
				onClick={scrollToTop}
				ref={backToTopRef}
				onKeyDown={scrollToTop}
				role="none"
			>
				<ArrowUpFilled />
			</div>
			<svg className={styles.svg}>
				<filter
					id="glass-distortion"
					x="0%"
					y="0%"
					width="100%"
					height="100%"
					filterUnits="objectBoundingBox"
				>
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.01 0.01"
						numOctaves="1"
						seed="5"
						result="turbulence"
					/>

					<feComponentTransfer in="turbulence" result="mapped">
						<feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
						<feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
						<feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
					</feComponentTransfer>

					<feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

					<feSpecularLighting
						in="softMap"
						surfaceScale="5"
						specularConstant="1"
						specularExponent="100"
						lightingColor="white"
						result="specLight"
					>
						<fePointLight x="-200" y="-200" z="300" />
					</feSpecularLighting>

					<feComposite
						in="specLight"
						operator="arithmetic"
						k1="0"
						k2="1"
						k3="1"
						k4="0"
						result="litImage"
					/>

					<feDisplacementMap
						in="SourceGraphic"
						in2="softMap"
						scale="150"
						xChannelSelector="R"
						yChannelSelector="G"
					/>
				</filter>
			</svg>
		</>
  );
}

export default App;
