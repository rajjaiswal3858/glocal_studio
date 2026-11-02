import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import { Container, Grid2 as Grid } from "@mui/material";
import { useScroll } from 'framer-motion';

import {
	EmailIcon,
	PhoneIcon,
} from "@/components/Icons";

import { routes } from "@/utils/routesPath";

import logo from "@/assets/images/footer-logo.png";
import instagramIcon from "@/assets/images/instagram-icon.png";
import linkedinIcon from "@/assets/images/linkedin-icon.png";

import { useDevice } from '@/context/DeviceContext';

import GlassContainer from './GlassContainer';
import Heading from "./Heading";
import ContactForm from "./ContactForm";
import ScrollableMotionText from "./ScrollableMotionText";
import ColorfulText from "./ColorfulText";
import Animate from "./Animate";
import LinkButton from "./LinkButton";

import * as styles from "./Footer.module.scss";

function Footer() {
	const { isMobile } = useDevice();
	const scrollabelContainerRef = useRef();

	const { scrollYProgress } = useScroll({
    target: scrollabelContainerRef,
    offset: ['start end', 'end start']
  });

	return (
		<section className={styles.footer}>
			<div className={styles.footerInfoPanel}>
				{isMobile ?
					<>
						<Container maxWidth="xl" className={styles.formContainer}>
							<Grid size={12} container>
								<Grid size={{xs: 12, md: 6}} offset={{xs: 0, md: 6}}>
									<Grid size={12}>
										<div className={styles.mobileGetInTouch}>GET IN TOUCH WITH US</div>
									</Grid>
									<Grid size={12}>
										<Heading variant="secondary" className={styles.greatDesignHeading}>
											Great Designs Start with 
											Great Conversations.
										</Heading>
									</Grid>
									<Grid size={12} className={styles.footerParagraph}>
										Whether you’re looking for jaw-dropping renders or exceptional design solutions, we’re just a message away.
									</Grid>
								</Grid>
							</Grid>
						</Container>
						<div className={styles.scrollableContainer} ref={scrollabelContainerRef}>
							<ScrollableMotionText
								direction="right"
								left="50%"
								progress={scrollYProgress}
							>
								<div className={styles.scrollabelText}>Spaces that feel Alive / Designs that inspire</div>
							</ScrollableMotionText>
						</div>

						<div className={styles.footerImagePanel}>
							<img src={require("../../assets/images/footer-decor-image.webp")} alt="" />
						</div>

						<Container maxWidth="xl" className={styles.formContainer}>
							<Grid size={12} container>
								<Grid size={{xs: 12, md: 6}} offset={{xs: 0, md: 6}} className={styles.formContent}>
									<Grid size={12} container className={styles.contactFormWrapper}>
										<ContactForm />
									</Grid>
								</Grid>
							</Grid>
						</Container>
					</>
					:
					<Container maxWidth="xl" className={styles.formContainer} id="formContainer">
						<Grid size={12} container>
							<Grid size={{xs: 12, md: 6}} offset={{xs: 0, md: 6}}>
								<Grid size={12}><ColorfulText>GET IN TOUCH WITH US</ColorfulText></Grid>
								<Grid size={12}>
									<Heading variant="secondary" className={styles.greatDesignHeading}>
										Great Designs Start with 
										Great Conversations.
									</Heading>
								</Grid>
								<Grid size={12}>
									Whether you’re looking for jaw-dropping renders or exceptional design solutions, we’re just a message away.
								</Grid>
							</Grid>
							
							<Grid size={{xs: 12, md: 6}} offset={{xs: 0, md: 6}} className={styles.formContent}>
								<Grid size={12} container className={styles.contactFormWrapper}>
									<ContactForm />
								</Grid>
							</Grid>
						</Grid>
					</Container>
				}
				

				{!isMobile ? 
					<>
						<div className={styles.scrollableContainer} ref={scrollabelContainerRef}>
							<ScrollableMotionText
								direction="right"
								left="0"
								progress={scrollYProgress}
							>
								<div className={styles.scrollabelText}>Spaces that feel Alive / Designs that inspire</div>
							</ScrollableMotionText>
						</div>

						<div className={styles.footerImagePanel}>
							<Container maxWidth="xl">
								<Grid size={12} container>
									<Grid size={8} className={styles.footerImage}>
										<img src={require("../../assets/images/footer-decor-image.webp")} alt="" className={styles.decorImage} />
									</Grid>
								</Grid>
							</Container>
						</div>
					</>
					:
					null
				}
			</div>

			<Container maxWidth="xl" className={styles.uspSection}>
				<Grid size={12} spacing={4} container>
					<Animate.FadeUp
						element={Grid}
						elementProps={{
							size:{xs: 12, sm: 6, md: 3},
							container: true,
							alignItems: "flex-start",
							alignContent: "flex-start"
						}}
						className={styles.footerCard}
						direction="up"
						delay="0"
					>
						<Grid size={12} spacing={3} container>
							<Grid size={10} className={styles.footerCardHeading}>
								Start with a Free Consultation
							</Grid>
							<Grid size={2}>
								<img
									src={require("../../assets/images/free-consultation-icon.png")}
									alt=""
									className={styles.footerCardIcon}
								/>
							</Grid>
						</Grid>
						<Grid size={12}>
							Got a vision? Let&apos;s sketch it together-no obligations.
						</Grid>
					</Animate.FadeUp>
					<Animate.FadeUp
						element={Grid}
						elementProps={{
							// size: 3,
							size:{xs: 12, sm: 6, md: 3},
							container: true,
							alignItems: "flex-start",
							alignContent: "flex-start"
						}}
						className={styles.footerCard}
						direction="up"
						delay="50ms"						
					>
						<Grid size={12} spacing={3} container>
							<Grid size={10} className={styles.footerCardHeading}>
								Transparent Process, Clear Pricing
							</Grid>
							<Grid size={2}>
								<img
									src={require("../../assets/images/transparent-process-icon.png")}
									alt=""
									className={styles.footerCardIcon}
								/>
							</Grid>
						</Grid>
						<Grid size={12}>
							No guesswork. No surprises. Just clarity.
						</Grid>
					</Animate.FadeUp>
					<Animate.FadeUp
						element={Grid}
						elementProps={{
							size: {xs: 12, sm: 6, md: 3},
							container: true,
							alignItems: "flex-start",
							alignContent: "flex-start"
						}}
						className={styles.footerCard}
						direction="up"
						delay="100ms"
					>
						<Grid size={12} spacing={3} container>
							<Grid size={10} className={styles.footerCardHeading}>
								Share Your Idea. We&apos;ll Visualize It.
							</Grid>
							<Grid size={2}>
								<img
									src={require("../../assets/images/share-your-idea-icon.png")}
									alt=""
									className={styles.footerCardIcon}
								/>
							</Grid>
						</Grid>
						<Grid size={12}>
							A napkin sketch or a full plan-send it our way.
						</Grid>
					</Animate.FadeUp>
					<Animate.FadeUp
						element={Grid}
						elementProps={{
							size: {xs: 12, sm: 6, md: 3},
							container: true,
							alignItems: "flex-start",
							alignContent: "flex-start"
						}}
						className={styles.footerCard}
						direction="up"
						delay="150ms"
					>
						<Grid size={12} spacing={3} container>
							<Grid size={10} className={styles.footerCardHeading}>
								Fast Replies. <br/> Real People.
							</Grid>
							<Grid size={2}>
								<img
									src={require("../../assets/images/fast-replies-icon.png")}
									alt=""
									className={styles.footerCardIcon}
								/>
							</Grid>
						</Grid>
						<Grid size={12}>
							Your time matters-and so does your project.
						</Grid>
					</Animate.FadeUp>
				</Grid>
			</Container>

			{isMobile ? 
				<div className={styles.footerLogo}>
					<img
						src={require("../../assets/images/logo-black.png")}
						alt="Logo"
					/>
				</div>
			:null}
			
			<div className={styles.footerInfoContainer}>
				<Grid
					size={12}
					container
					className={styles.footerContainer}
				>
					{!isMobile ?
						<GlassContainer />	
					:
						null
					}
					<Grid size={12} container className={styles.positionRelative} alignItems="center">
						<Grid size={{xs: 12, md: 2}}>
							{isMobile ? 
								<LinkButton style={{ "--button-bg": "#060010", "--button-text-color": "#fff" }}>GET A FREE QUOTE</LinkButton>
							 :
								<img src={logo} alt="" className={styles.logo} />
							}
						</Grid>
						<Grid size={{xs: 12, md: 2}} 
							sx={{
								mt: { xs: 3, md: 0 }
							}}
						>
							<div className={styles.navBar}>
								<Link
									to={routes.home.href}
									data-replace={routes.home.label}
									className={styles.footerLink}
								>
									<span>{routes.home.label}</span>
								</Link>
								<Link
									to={routes.about.href}
									data-replace={routes.about.label}
									className={styles.footerLink}
								>
									<span>{routes.about.label}</span>
								</Link>
								<Link
									to={routes.services.href}
									data-replace={routes.services.label}
									className={styles.footerLink}
								>
									<span>{routes.services.label}</span>
								</Link>
								<Link
									to={routes.portfolio.href}
									data-replace={routes.portfolio.label}
									className={styles.footerLink}
								>
									<span>{routes.portfolio.label}</span>
								</Link>
								<Link
									to={routes["contact-us"].href}
									data-replace={routes["contact-us"].label}
									className={styles.footerLink}
								>
									<span>{routes["contact-us"].label}</span>
								</Link>
								{/* <Link
									to={routes["privacy-policy"].href}
									data-replace={routes["privacy-policy"].label}
									className={styles.footerLink}
								>
									<span>{routes["privacy-policy"].label}</span>
								</Link> */}
							</div>
							
						</Grid>
						<Grid container alignContent="space-between" size={{xs: 12, md: 5}}>
							<Grid
								size={12}
								className={styles.copyrightContainer}
							>
								<span className={styles.phone}>
									<PhoneIcon fill="#fff" width="20px" height="20px" />
									<a href="tel:+1213-510-4140">+1 213-510-4140</a>
								</span>
								<span className={styles.email}>
									<EmailIcon fill="#fff" width="24px" height="24px" />
									<a href="mailto:info@glocalstudio.in">info@glocalstudio.in</a>
								</span>
							</Grid>
							{!isMobile ? 
								<Grid size={12}>
									<div className={styles.copyrightText}>Copyright &copy; 2025 - All rights reserved By Glocal Studio.</div>
								</Grid>
								:
								null
							}
						</Grid>
						<Grid size={{xs: 12, md: 3}} className={styles.socialMediaContainer}>
							<a
								href="https://www.instagram.com/glocalstudio_/"
								target="_blank"
								rel="noreferrer"
								label="Instagram"
								className={styles.socialLinks}
							>
								<img src={instagramIcon} className={styles.socialIcon} alt="" />
							</a>
							<a
								href="https://www.linkedin.com/company/glocal-studio/posts/?feedView=all"
								target="_blank"
								rel="noreferrer"
								label="Linkedin"
								className={styles.socialLinks}
							>
								<img src={linkedinIcon} className={styles.socialIcon} alt="" />
							</a>
						</Grid>
						{isMobile ? 
							<Grid size={12}>
								<div className={styles.copyrightText}>Copyright &copy; 2025 - All rights Reserved By Glocal Studio.</div>
							</Grid>
							:
							null
						}
					</Grid>
				</Grid>
			</div>
		</section>
	);
}

export default Footer;
