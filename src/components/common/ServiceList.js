import React, { useRef } from "react";
import { Container, Grid2 as Grid } from "@mui/material";
import { useScroll } from "framer-motion";

import { useDevice } from '@/context/DeviceContext';

import fullSupportImage from "@/assets/images/fullsuite-image.webp";

import { routes } from "@/utils/routesPath";

import Heading from "./Heading";
import LinkButton from "./LinkButton";
import ServiceCard from "./ServiceCard";

import * as styles from "./ServiceList.module.scss";

export default function ServiceList() {
	const { isMobile } = useDevice();

	const serviceListContainer = useRef(null);

	const { scrollYProgress } = useScroll({
		target: serviceListContainer,
		offset: ['start end', 'end start']
	});

	const servicesList = [
		{
			heading: <>Architectural <br />Visualization</>,
			subHeading: "From blueprint to breathtaking visuals.",
			description: "Bring architectural ideas to life with stunning, photoreal renders-exteriors, interiors, isometrics, floor plans, and walkthroughs that inspire confidence and sell.",
			usp: "IDEAL FOR Architects, real estate, developers, interior design studios",
			image: require("../../assets/images/architectural-visualization.webp"),
			link: routes["architectural-visualization"].href,
		}, {
			heading: <>3D <br/>Modeling</>,
			subHeading: "Every Detail, Perfectly Shaped in 3D",
			description: "We create precise, review-ready 3D models for spaces, products, and digital environments, scalable and optimized for rendering, animation, or prototyping.",
			usp: "IDEAL FOR Designers, product brands, architects, engineers",
			image: require("../../assets/images/3d-modeling.webp"),
			link: routes["3d-modeling"].href,
		}, {
			heading: <>Technical<br/> Drawings</>,
			subHeading: "Designs That Build Without Guesswork",
			description: "Precise working drawings, joinery details, and documentation that bridge design intent and execution-streamlining site work and vendor coordination.",
			usp: "IDEAL FOR Contractors, furniture makers, architects, developers",
			image: require("../../assets/images/technical-drawings.webp"),
			link: routes["technical-drawings"].href,
		}, {
			heading: <>Product <br />Visualization</>,
			subHeading: "Your Product, Photoreal and Market-Ready",
			description: "From furniture renders to prototypes, we showcase your products with lifelike detail-perfect for marketing, e-commerce, and investor presentations.",
			usp: "IDEAL FOR Product designers, startups, furniture brands, FMCG",
			image: require("../../assets/images/product-visualization.webp"),
			link: routes["product-visualization"].href,
		}, {
			heading: <>3D Animation & Experiences</>,
			subHeading: "Where Vision Moves with Purpose",
			description: "Bring ideas to life with expert-reviewed animations that create immersive experiences, from architectural walkthroughs to product demos and brand films.",
			usp: "IDEAL FOR Developers, architects, marketing agencies, real estate",
			image: require("../../assets/images/3d-animation.webp"),
			imageType: "image",
			link: routes["3d-animation-and-experiences"].href,
		}, {
			heading: <>360° & Virtual <br />Tours</>,
			subHeading: "Immersive tours that close deals faster.",
			description: "Transform static visuals into immersive 3D animations and experiences with architectural flythroughs, interior presentations, and interactive storytelling.",
			usp: "IDEAL FOR Realtors hotels, property portals, global buyers",
			image: require("../../assets/images/360-virtual-tour.webp"),
			link: routes["360-degree-and-virtual-tours"].href,
		}
	];

	return (
		<section className={styles.fullSuiteSolutionSection}>
			<Container maxWidth="xl">
				<Grid size={12}>
					{isMobile ?
						<Heading className={styles.fullSuiteMainHeading}>
							Full-Suite <span>3D Rendering</span> Solutions
						</Heading>
					:
						<Heading className={styles.fullSuiteMainHeading}>
							Full-Suite<br />3D Rendering Solutions
						</Heading>
					}
				</Grid>
				<Grid size={12} className={isMobile ? styles.fullSupportImageContainerMobile : ''}>
					<img src={fullSupportImage} alt="" className={styles.fullSupportImage} />
				</Grid>
				<Grid size={12} spacing={4} container className={styles.fullSupportItemsList} ref={serviceListContainer}>
					{
						servicesList.map((service, index) => (
							<ServiceCard
								key={index}
								heading={service.heading}
								subHeading={service.subHeading}
								description={service.description}
								usp={service.usp}
								image={service.image}
								imageClassName={service.imageClassName}
								progress={scrollYProgress}
								translateY={service.translateY}
								link={service.link}
								imageType={service.imageType}
							/>
						))
					}
				</Grid>
				<Grid size={12}>
					<Heading variant="secondary" className={styles.fullSuiteBottomHeading}>
						<div className={styles.normalText}>Get premium-quality output for every need-</div>
						without paying the premium.
					</Heading>
				</Grid>
				<Grid
					size={12}
					justifySelf="center"
					className={styles.fullSuiteBtnGroup}
					sx={{ textAlign: { xs: "center", md: "left" } }}
				>
					{isMobile ?
						<LinkButton
							to={routes.portfolio.href}
							style={{ "--button-bg": "#f2f0ea" }}
						>
							BROWSE PORTFOLIO
						</LinkButton>
					:
						<>
							<LinkButton
								to={routes.portfolio.href}
								style={{ "--button-bg": "#f2f0ea" }}
							>
								BROWSE PORTFOLIO
							</LinkButton>
							<LinkButton
								to={routes["contact-us"].href}
								style={{ "--button-bg": "#f2f0ea" }}
							>
								Let's get started
							</LinkButton>
						</>
					}
				</Grid>
			</Container>
		</section>
	);
}
