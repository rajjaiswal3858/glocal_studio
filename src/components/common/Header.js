import React, { useEffect, useRef, useState, useContext } from "react";
import { Link , useLocation, useNavigate } from 'react-router-dom';
import {
	Grid2 as Grid,
	AppBar,
	Menu as MenuDesktop
} from '@mui/material';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useDevice } from '@/context/DeviceContext';
import { ContactFormContext } from '@/context/ContactFormContext';

import { routes } from "@/utils/routesPath";

import logo from "@/assets/images/logo.webp";

import MegaMenu from "./MegaMenu";
import Menu from "./Menu";
import LinkButton from "./LinkButton";

import * as styles from "./Header.module.scss";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Header() {
	const { isMobile } = useDevice();
	const { pathname } = useLocation();
	const { toggleContactForm } = useContext(ContactFormContext);

	const navigate = useNavigate();

	const navBar = useRef(null);
	const anchorEl = useRef(null);
	const scrollTriggerRef = useRef(null);

	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const nav = navBar.current;

		// Create animation to hide the nav
		const hideAnim = gsap.fromTo(
			nav,
			{ yPercent: 0 },
			{ yPercent: -120, duration: 0.40, paused: true }
		);

		// Create ScrollTrigger to toggle animation based on scroll direction
		scrollTriggerRef.current = ScrollTrigger.create({
			start: 0,
			end: "max",
			onUpdate: (self) => {
				if (self.direction === -1) {
					// scrolling up
					hideAnim.reverse();
				} else {
					// scrolling down
					hideAnim.play();
				}
			}
		});

		return () => {
			scrollTriggerRef.current?.kill();
		};
	}, []);

	// Reset scroll and show navbar on route change
	useEffect(() => {
		// Make sure nav is visible on route change
		gsap.to(navBar.current, {
			yPercent: 0,
			duration: 0.40
		});

		// Refresh ScrollTrigger in case layout changes
		ScrollTrigger.refresh();
	}, [pathname]);

	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	const handleMenuOpen = (e) => {
		setMenuOpen(true);
		e.preventDefault();
	};

	const handleMenuClose = () => {
		setMenuOpen(false);
	}

	const handleLogoClick = () => {
		navigate("/");
	};

	return (
		<AppBar position="fixed" ref={navBar}>
			<Grid container size={12} alignItems="center" className={styles.topSection}>
				<Grid
					size={{
						xs: 6,
						sm: 6,
						md: 2,
						lg: 2
					}}
					className={styles.logoContainer}
				>
					<div>
						<Link
							to={routes.home.href}
							data-replace={routes.home.label}
						>
							<img
								src={logo}
								className={styles.logo}
								alt="Glocal Studio"
								onClick={handleLogoClick}
								role="none"
							/>
						</Link>
					</div>
				</Grid>
				{
					isMobile ? (
						<Grid
							size={{
								xs: 6,
								sm: 6,
								md: 0,
								lg: 0
							}}
							justifyContent="flex-end"
							container
						>
							<Menu />
						</Grid>
					) : (
						<>
							<Grid
								size={{
									xs: 0,
									sm: 0,
									md: 8,
									lg: 8
								}}
							>
								<div className={styles.navBar}>
									<Link
										to={routes.home.href}
										data-replace={routes.home.label}
										className={styles.headerLink}
									>
										<span>{routes.home.label}</span>
									</Link>
									<Link
										to={routes.about.href}
										data-replace={routes.about.label}
										className={styles.headerLink}
									>
										<span>{routes.about.label}</span>
									</Link>
									<Link
										to={routes.services.href}
										data-replace={routes.services.label}
										className={styles.headerLink}
										onMouseEnter={handleMenuOpen}
										ref={anchorEl}
									>
										<span>{routes.services.label}</span>
									</Link>
									<Link
										to={routes.portfolio.href}
										data-replace={routes.portfolio.label}
										className={styles.headerLink}
									>
										<span>{routes.portfolio.label}</span>
									</Link>
									<Link
										to={routes["contact-us"].href}
										data-replace={routes["contact-us"].label}
										className={styles.headerLink}
									>
										<span>{routes["contact-us"].label}</span>
									</Link>
								</div>
							</Grid>
							<Grid
								size={{
									xs: 0,
									sm: 0,
									md: 2,
									lg: 2
								}}
								justifyItems="flex-end"
								className={styles.getInTouchButtonWrapper}
							>
								<LinkButton
									className={styles.getInTouchButton}
									wrapperStyle={{ marginRight: 0 }}
									onClick={() => toggleContactForm(true)}
									style={{ "--button-bg": "#060010", "--button-text-color":  "#f3f2ee" }}
								>
									let's get started
								</LinkButton>
							</Grid>
							<MenuDesktop
								id="simple-menu"
								anchorEl={anchorEl.current}
								open={menuOpen}
								onClose={handleMenuClose}
								PaperProps={{
									onClick: handleMenuClose
								}}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "center",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "center",
								}}
								PopoverClasses={{
									paper: styles.menuPopover,
									root: styles.menuRoot
								}}
							>
								<MegaMenu onClose={handleMenuClose} />
							</MenuDesktop>
						</>
					)
				}
			</Grid>
		</AppBar>
	);
}

export default Header;
