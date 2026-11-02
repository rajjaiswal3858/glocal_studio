import React, { useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid } from "@mui/material";
import { useScroll, useTransform, motion } from "framer-motion";
import Lottie from "lottie-react";
import cx from "classnames";

import { useDevice } from '@/context/DeviceContext';
import { StarGradiantIcon } from "@/components/Icons";

import {
	Heading,
	LinkButton,
	Animate,
} from "@/components/common";

import CurvedLoop from "@/components/About/CurvedLoop";
import CircularText from "@/components/About/CircularText";

import masterHeadVideo from "@/assets/videos/about-us-masterhead.mp4";
import masterHeadVideoSmall from "@/assets/videos/about-us-masterhead.webm";

import { routes } from "@/utils/routesPath";

import * as styles from "./About.module.scss";

function About() {
	const { isMobile } = useDevice();
	const astronautImage = useRef(null);

	const { scrollYProgress } = useScroll({
		target: astronautImage,
		offset: ['start end', 'end start']
	});

	const parallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

	return (
		<>
			<Helmet>
				<title>The World's Leading Studio You Can Trust | Glocal Studio</title>
				<meta name="description" content="Streamline your business with professional virtual assistant services. Get remote administrative support, scheduling, customer care, and more. Enhance productivity today!" />
			</Helmet>
			<section className={styles.masterHead}>
				<div className={styles.videoWrapper}>
					<video
						muted
						autoPlay
						controls={false}
						loop
						playsInline
						className={styles.masterHeadVideo}
						poster={require("../assets/images/about-us/masterhead.jpg")}
					>
						<source src={masterHeadVideoSmall} type="video/webm" />
						<source src={masterHeadVideo} type="video/mp4" />
					</video>
				</div>
				<Container maxWidth="xl" className={styles.mainContainer}>
					<Grid
						size={12}
						container
						className={cx(styles.masterHeadInfoSection, styles.textCenter)}
						spacing={{xs: 1, md: 4}}
					>
						<Animate.ScaleIn
							element={Grid}
							elementProps={{
								size: 12, 
								justifyContent: "center",
							}}
						>
							<StarGradiantIcon width="40px" height="47px" />
						</Animate.ScaleIn>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: 12,
							}}
							className={styles.acturalVisualizationHeading}
							direction="down"
						>
							ABOUT GLOCAL STUDIO
						</Animate.FadeUp>
						<Grid size={12} mb={{xs:2, md:0}}>
							<Heading className={cx(styles.masterHeadingHeading, styles.extraLightText)}>From Earthly Plans to</Heading>
							<Heading className={styles.masterHeadingHeading}>Cosmic Visuals</Heading>
						</Grid>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: {xs: 12, md: 8},
								offset: {xs:0, md:2},
								mb:{xs:2, md:0}
							}}
							className={cx(styles.masterHeadText, styles.textWhite)}
						>
							We are curious explorers of design, delivering world-class 3D renderings, product visuals, and immersive experiences-without limits.
						</Animate.FadeUp>
						<Grid size={12}>
							<LinkButton
								to={routes.services.href}
								style={{ "--button-bg": "#060010", "--button-text-color":  "#f3f2ee" }}
							>
								explore our services
							</LinkButton>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.beyondSection}>
				<Container maxWidth="xl">
					<Grid size={12} container>
						<Grid size={{xs: 12, lg: 10}} offset={{xs: 0, lg: 1}} container spacing={6}>
							{isMobile && 
								<Grid size={12} ref={astronautImage} textAlign={"center"}>
									<motion.img
										src={require("../assets/images/about-us/astronaut.png")}
										alt=""
										className={styles.astronautImage}
										style={{
											y: parallax,
										}}
									/>
								</Grid>
							}
							<Grid size={{xs: 12, md: 6}}>
								<Heading className={styles.textWhite}>Design.</Heading>
								<Heading className={cx(styles.textWhite, styles.extraLightText)}>Beyond</Heading>
								<Heading className={cx(styles.textWhite, styles.extraLightText)}>Imagination.</Heading>
							</Grid>
							<Grid size={{xs: 12, md: 6}} container spacing={3} className={styles.beyondInfoContent}>
								{!isMobile && 
									<Grid size={12} ref={astronautImage}>
										<motion.img
											src={require("../assets/images/about-us/astronaut.png")}
											alt=""
											className={styles.astronautImage}
											style={{
												y: parallax,
											}}
										/>
									</Grid>
								}
								
								<Grid size={12}>
									<Heading variant="secondary" className={cx(styles.textWhite, styles.lightText, styles.beyondSecoundaryHeading)}>
										We don't just render- we venture into the unknown and deliver the extraordinary.
									</Heading>
								</Grid>
								<Animate.FadeUp
									element={Grid}
									elementProps={{
										size: 12
									}}
									className={cx(styles.textWhite, styles.beyondInfoParagraph)}
								>
									At Glocal Studio, we bring imagination to life through photorealistic 3D visualization, crafting spaces, products, and experiences that blend the conceptual with the tangible.
								</Animate.FadeUp>
								<Animate.FadeUp
									element={Grid}
									elementProps={{
										size: 12
									}}
									className={cx(styles.textWhite, styles.beyondInfoParagraph)}
								>
									Our expertise spans architecture, interiors, product design, and immersive environments, focusing on materiality, light, and atmosphere. We believe true visualization evokes emotion while ensuring technical precision. {!isMobile ? "With a global perspective, we create visuals that convey intent, function, and value, transforming vision into reality with clarity and impact." : ''}
								</Animate.FadeUp>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.visionMissionSection}>
				<Container maxWidth="xl">
					<Grid size={12} container spacing={{xs: 0, md: 6}} className={styles.visionMissionContentSection}>
						<Grid size={{xs: 12, md: 6}} container mb={{xs: 4, md:0}}>
							<Grid size={12} className={styles.missionVisionContainer}>
								<Grid size={12} container spacing={2} alignItems="center">
									<Grid size={{xs : 12, sm: 6}}>
										<Heading className={styles.lightText}>Our</Heading>
										<Heading className={styles.lightText}>Mission</Heading>
									</Grid>
									<Animate.FadeUp
										element={Grid}
										className={styles.missionVisionContent}
										elementProps={{
											size: {xs:12, sm:6}
										}}
									>
										Our mission is to make visualization a universal language - helping companies and creators translate complex ideas into visual clarity and emotional resonance.
									</Animate.FadeUp>
								</Grid>
								<Grid size={12} container>
									<Grid size={12} className={styles.starContentContainer} mt={{xs: 4, md:0}}>
										<Animate.ScaleIn>
											<StarGradiantIcon width="30px" height="33px" />
										</Animate.ScaleIn>
										<Animate.FadeUp className={styles.visionMissionStatement}>
											From architecture and design to entertainment and innovation, we deliver 3D solutions that empower people to see, feel, and believe in what’s possible before it’s built.
										</Animate.FadeUp>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid size={{xs: 12, md: 6}} container>
							<Grid size={12} className={styles.missionVisionContainer}>
								<Grid size={12} container spacing={2} alignItems="center">
									<Grid size={{xs : 12, sm: 6}}>
										<Heading className={styles.lightText}>Our</Heading>
										<Heading className={styles.lightText}>Vision</Heading>
									</Grid>
									<Animate.FadeUp
										element={Grid}
										className={styles.missionVisionContent}
										elementProps={{
											size: {xs:12, sm:6}
										}}
									>
										Our vision is to redefine how the world experiences visualization—by transforming imagination into structured, intelligent, and emotionally resonant visual storytelling.
									</Animate.FadeUp>
								</Grid>
								<Grid size={12} container>
									<Grid size={12} className={styles.starContentContainer}  mt={{xs: 4, md:0}}>
										<Animate.ScaleIn>
											<StarGradiantIcon width="30px" height="33px" />
										</Animate.ScaleIn>
										<Animate.FadeUp className={styles.visionMissionStatement}>
											In a space often driven by fragmented, freelance practices, we stand for organization, reliability, and creative excellence on a global scale. Through refined processes and advanced technology, we strive to set new standards, where every render reflects information and clarity as envisioned by designers.
										</Animate.FadeUp>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid size={12} container className={`${styles.textCenter} ${styles.listingResultSection}`}>
						<Grid size={12}>
							<Heading className={styles.extraLightText}>From Listening to</Heading>
							<Heading>Lasting Results</Heading>
						</Grid>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: {xs: 12, md: 12},
								offset: {xs: 0, md: 0},
							}}
							className={styles.visionMissionCenterContent}
						>
							At Glocal Studio, our approach is simple yet powerful-we listen, understand, and deliver solutions tailored to your vision.
						</Animate.FadeUp>
					</Grid>
					<Grid size={12} container className={styles.textCenter} spacing={4} alignItems="flex-start">
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: {xs: 12, sm: 6, md: 3},
								container: true,
								spacing: {xs: 0, sm: 3, md: 3},
							}}
							delay="0ms"
						>
							<Grid size={12}>
								<Lottie
									animationData={require("../assets/animations/client-centric.json")}
									loop
									className={styles.visionMisionIcon}
								/>
							</Grid>
							<Grid size={12} mb={{xs: 2, md:0}} className={styles.visionMissionBoxHeading}>Client-Centric</Grid>
							<Grid size={12}>
								We don't just take briefs-we listen, question, and understand your goals to deliver solutions tailored exactly to your vision.
							</Grid>
						</Animate.FadeUp>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: {xs: 12, sm: 6, md: 3},
								container: true,
								spacing: {xs: 0, sm: 3, md: 3},
							}}
							delay="100ms"
						>
							<Grid size={12}>
								<Lottie
									animationData={require("../assets/animations/end-to-end-clarity.json")}
									loop
									className={styles.visionMisionIcon}
								/>
							</Grid>
							<Grid size={12} mb={{xs: 2, md:0}} className={styles.visionMissionBoxHeading}>End-to-End Clarity</Grid>
							<Grid size={12}>
								From early sketches and mockups to photorealistic renders and execution-ready drawings, we ensure seamless clarity throughout.
							</Grid>
						</Animate.FadeUp>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: {xs: 12, sm: 6, md: 3},
								container: true,
								spacing: {xs: 0, sm: 3, md: 3},
							}}
							delay="200ms"
						>
							<Grid size={12}>
								<Lottie
									animationData={require("../assets/animations/technical-depth.json")}
									loop
									className={styles.visionMisionIcon}
								/>
							</Grid>
							<Grid size={12} mb={{xs: 2, md:0}} className={styles.visionMissionBoxHeading}>Technical Depth</Grid>
							<Grid size={12}>
								Each render undergoes expert review by architects, interior designers, and product specialists-guaranteeing precision, design integrity, and refined visual quality.
							</Grid>
						</Animate.FadeUp>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: {xs: 12, sm: 6, md: 3},
								container: true,
								spacing: {xs: 0, sm: 3, md: 3},
							}}
							delay="300ms"
						>
							<Grid size={12}>
								<Lottie
									animationData={require("../assets/animations/collaborative.json")}
									loop
									className={styles.visionMisionIcon}
								/>
							</Grid>
							<Grid size={12} mb={{xs: 2, md:0}} className={styles.visionMissionBoxHeading}>Collaborative</Grid>
							<Grid size={12}>
								We integrate smoothly with designers, contractors, and vendors, creating a streamlined process guaranteeing cohesive outcomes.
							</Grid>
						</Animate.FadeUp>
					</Grid>
				</Container>
			</section>
			<section className={styles.glocalAdvantageSection}>
				<div className={styles.advantageStarIcon}>
					<CircularText text="REVIEW. REFINE. PERFECT. DELIVER." />
					<StarGradiantIcon className={styles.starIcon} />
				</div>
				<Container maxWidth="xl">
					<Grid size={12} container spacing={3} className={styles.textCenter}>
						<Grid size={12}>
							<Heading className={cx(styles.textWhite, styles.extraLightText)}>The Glocal {isMobile && <br/>}Studio</Heading>
							<Heading className={styles.textWhite}>Advantage</Heading>
						</Grid>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: {xs: 12, md: 8},
								offset: {xs: 0, md: 2},
							}}
							className={cx(styles.advantageText, styles.textWhite, styles.glocalPrespectiveText)}
						>
							{isMobile ?
								"With a global perspective and local precision, our work adapts seamlessly to diverse cultural and market needs."
								:
								"Our difference lies in discipline. Every project moves through a structured review by specialists - ensuring that each image is accurate, purposeful, and market-ready. With global insight and local sensitivity, we deliver clarity you can trust."
							}
						</Animate.FadeUp>
					</Grid>
					<Grid size={12} container spacing={4} alignItems="flex-start" className={styles.qualityMetricsContainer}>
						<Grid size={{xs: 12, md: 6}} container>
							<Animate.FadeUp
								element={Grid}
								elementProps={{
									size: 12
								}}
								className={styles.glassContainer}
								direction="right"
								style={{
									background: "rgba(23, 32, 60, 0.7)"
								}}
							>
								<Grid size={12} container className={styles.glassContainerWrapper} spacing={{xs: 2, md: 4}}>
									<Grid size={{xs: 12, sm: 6}}>
										<Heading variant="secondary" className={cx(styles.fontNormal, styles.textWhite)}>
											Scalable & Reliable
										</Heading>
									</Grid>
									<Animate.FadeUp
										element={Grid}
										elementProps={{
											size: {xs: 12, sm: 6},
										}}
										className={styles.textWhite}
									>
										From boutique projects to large-scale developments, our structured team and proven processes ensure dependable delivery at any scale.
									</Animate.FadeUp>
								</Grid>
							</Animate.FadeUp>
							<Animate.FadeUp
								element={Grid}
								elementProps={{
									size: 12
								}}
								className={styles.glassContainer}
								direction="right"
								delay="100ms"
								style={{
									background: "rgba(242, 240, 234, 0.7)"
								}}
							>
								<Grid size={12} container className={styles.glassContainerWrapper} spacing={{xs: 0, sm: 5}} alignItems="flex-end">
									<Grid size={{xs: 12, sm: 9}} sx={{ order: { xs: 2, sm: 0 } }} container spacing={{xs: 2, md:3}}>
										<Grid size={12}>
											<Heading variant="secondary" className={styles.fontNormal}>
												Idea Meets Visualization
											</Heading>
										</Grid>
										<Animate.FadeUp
											element={Grid}
											elementProps={{
												size: 12,
											}}
										>
											Every render is backed by design intelligence, blending creative artistry with architectural accuracy to make visuals both beautiful and believable.
										</Animate.FadeUp>
									</Grid>
									<Animate.ScaleIn
										element={Grid}
										elementProps={{
											size: {xs: 12, sm: 3},
											// sx:{display: { xs: "none", sm: "flex" }}
										}}
									>
										<Lottie
											animationData={require("../assets/animations/idea-meets-visualization.json")}
											loop
											className={styles.advantageIcon}
										/>
									</Animate.ScaleIn>
								</Grid>
							</Animate.FadeUp>
						</Grid>
						<Grid size={{xs: 12, md: 6}} container>
							<Animate.FadeUp
								element={Grid}
								elementProps={{
									size: 12,
									sx:{ order: { xs: 4, md: 3 } }
								}}
								className={styles.glassContainer}
								direction="left"
								delay="100ms"
								style={{
									background: "rgba(242, 240, 234, 0.7)"
								}}
							>
								<Grid size={12} container className={styles.glassContainerWrapper} spacing={{xs: 0, sm: 5}} alignItems="flex-end">
									<Grid size={{xs: 12, sm: 9}} sx={{ order: { xs: 2, sm: 0 } }} container spacing={{xs: 2, md:3}}>
										<Grid size={12}>
											<Heading variant="secondary" className={styles.fontNormal}>
												Global Perspective, Local Precision
											</Heading>
										</Grid>
										<Animate.FadeUp
											element={Grid}
											elementProps={{
												size: 12,
											}}
										>
											We adapt designs for different cultures and markets-delivering visuals that resonate globally while respecting local context.
										</Animate.FadeUp>
									</Grid>
									<Animate.ScaleIn
										element={Grid}
										elementProps={{
											size: {xs: 12, sm: 3},
											// sx:{display: { xs: "none", sm: "flex" }}
										}}
									>
										<Lottie
											animationData={require("../assets/animations/global-perspective.json")}
											loop
											className={styles.advantageIcon}
										/>
									</Animate.ScaleIn>
								</Grid>
							</Animate.FadeUp>
							<Animate.FadeUp
								element={Grid}
								elementProps={{
									size: 12
								}}
								className={styles.glassContainer}
								direction="left"
								style={{
									background: "rgba(23, 32, 60, 0.7)"
								}}
							>
								<Grid size={12} container className={styles.glassContainerWrapper} spacing={{xs: 2, md: 4}}>
									<Grid size={{xs: 12, sm: 6}}>
										<Heading variant="secondary" className={cx(styles.fontNormal, styles.textWhite)}>
											Partnership-Oriented
										</Heading>
									</Grid>
									<Animate.FadeUp
										element={Grid}
										elementProps={{
											size: {xs: 12, sm: 6},
										}}
										className={styles.textWhite}
									>
										We focus on building long-term collaborations-becoming an extension of your team rather than a one-time service provider.
									</Animate.FadeUp>
								</Grid>
							</Animate.FadeUp>
						</Grid>
					</Grid>
				</Container>
			</section>
			{!isMobile && 
				<section className={styles.curvedLoopSection}>
					<CurvedLoop marqueeText="Not just a team-an expedition of thinkers, makers, and visionaries." />
				</section>
			}
			
			<section className={styles.explorerSection}>
				<Container maxWidth="xl">
					<Grid size={12} container spacing={3} className={styles.textCenter}>
						<Grid size={12}>
							<Heading className={styles.extraLightText} direction="down">The Explorers</Heading>
							<Heading>Behind The Vision</Heading>
						</Grid>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: {xs: 12, md: 8},
								offset: {xs: 0, md: 2},
							}}
							className={styles.advantageText}
						>
							Every project we deliver is shaped by a multidisciplinary team of artists, designers and visualization experts-driven by precision, collaboration, and a shared pursuit of excellence.
						</Animate.FadeUp>
					</Grid>
					<Grid size={12} container spacing={{xs: 3, md: 6}} alignItems="flex-start" className={styles.teamSection}>
						<Grid size={{xs: 12, md: 6}}>
							<img
								src={require("../assets/images/about-us/vasu-dev-chawla.jpg")}
								alt=""
								className={styles.teamMainImage}
							/>
						</Grid>
						<Grid size={{xs: 12, md: 6}} container spacing={0}>
							<Grid size={12} container alignItems="top" justifyContent="space-between" spacing={{xs: 2, md:0}}>
								<Heading variant="secondary" direction="down">Vasu Dev Chawla</Heading>
								{isMobile &&
									<Animate.ScaleIn style={{
										display: "inline-block"
									}}>
										<a
											href="https://www.linkedin.com/in/vasu-dev-chawla-b655b368/"
											target="_blank"
											rel="nofollow noreferrer"
											label="Srishti Khatri"
										>
											<img
												src={require("../assets/images/about-us/linkedin-icon.png")}
												alt=""
												className={styles.linkedInIcon}
											/>
										</a>
									</Animate.ScaleIn>
								}
							</Grid>
							<Animate.FadeUp
								element={Grid}
								elementProps={{
									size: 12
								}}
								className={styles.advantageText}
							>
								Operations Head, Glocal Studio
							</Animate.FadeUp>
							<Animate.FadeUp
								element={Grid}
								elementProps={{
									size: 12
								}}
								className={styles.teamContent}
							>
								With a strong background in architecture and design, Vasu Dev Chawla leads operations at Glocal Studio. He has worked on diverse projects across India, the Middle East, and the USA, spanning residential, commercial, and hospitality sectors.<br/>
								<br/>
								Vasu specializes in ensuring seamless coordination between design vision and technical execution, overseeing the delivery of visualization, drafting, and detailing services with a sharp focus on quality and client satisfaction.<br/>
								<br/>
								Passionate about bridging creativity with practicality, he works closely with both design teams and clients, making Glocal Studio a trusted partner for architects, developers, and homeowners alike.
							</Animate.FadeUp>
							{!isMobile &&
								<Grid size={12}>
									<Animate.ScaleIn style={{
										display: "inline-block"
									}}>
										<a
											href="https://www.linkedin.com/in/vasu-dev-chawla-b655b368/"
											target="_blank"
											rel="nofollow noreferrer"
											label="Srishti Khatri"
										>
											<img
												src={require("../assets/images/about-us/linkedin-icon.png")}
												alt=""
												className={styles.linkedInIcon}
											/>
										</a>
									</Animate.ScaleIn>
								</Grid>
							}
						</Grid>
					</Grid>
					<Grid size={12} container spacing={{xs: 6, md: 4}} alignItems="flex-start">
						<Grid size={{xs: 12, md: 6}} container spacing={3}>
							<Animate.FadeUp
								direction="right"
								element={Grid}
								elementProps={{
									size: 12
								}}
							>
								<div className={styles.imageContainer}>
									<img
										src={require("../assets/images/about-us/kunal.jpg")}
										alt=""
										className={styles.teamImage}
									/>
								</div>
							</Animate.FadeUp>
							<Grid size={12} container>
								<Animate.FadeUp
									direction="right"
									element={Grid}
									elementProps={{
										size: {xs: 12, sm: 5}
									}}
								>
									<Grid size={12} container alignItems="top" justifyContent="space-between" spacing={{xs: 2, md:0}}>
										<div className={styles.teamMemberName}>Kunal Jaggi</div>
										{isMobile &&
											<a
												href="https://www.linkedin.com/in/kunal-jaggi-0b5a182/"
												target="_blank"
												rel="nofollow noreferrer"
												label="Srishti Khatri"
												className={styles.linkedInSmallIcon}
											>
												<img
													src={require("../assets/images/about-us/linkedin-icon.png")}
													alt=""
												/>
											</a>
										}		
									</Grid>
									<div className={styles.teamMemberPosition}>Founder & Managing Director</div>
									{!isMobile &&
										<div>
											<a
												href="https://www.linkedin.com/in/kunal-jaggi-0b5a182/"
												target="_blank"
												rel="nofollow noreferrer"
												label="Srishti Khatri"
												className={styles.linkedInSmallIcon}
											>
												<img
													src={require("../assets/images/about-us/linkedin-icon.png")}
													alt=""
												/>
											</a>
										</div>
									}
								</Animate.FadeUp>
								<Animate.FadeUp
									direction="left"
									element={Grid}
									className={styles.teamParagraph}
									elementProps={{
										size: {xs: 12, sm: 7}
									}}
								>
									Kunal drives Glocal Studio's creative vision with over two decades of design expertise. He combines strategy, technology, and artistry to deliver visuals that inspire and impress globally.
								</Animate.FadeUp>
							</Grid>
						</Grid>
						<Grid size={{xs: 12, md: 6}} container spacing={3}>
							<Animate.FadeUp
								direction="left"
								element={Grid}
								elementProps={{
									size: 12
								}}
							>
								<div className={styles.imageContainer}>
									<img
										src={require("../assets/images/about-us/srishti.jpg")}
										alt=""
										className={styles.teamImage}
									/>
								</div>
							</Animate.FadeUp>
							<Grid size={12} container>
								<Animate.FadeUp
									direction="right"
									element={Grid}
									elementProps={{
										size: {xs: 12, sm: 5}
									}}
								>
									<Grid size={12} container alignItems="top" justifyContent="space-between" spacing={{xs: 2, md:0}}>
										<div className={styles.teamMemberName}>Srishti Khatri</div>
										{isMobile &&
											<a
												href="https://www.linkedin.com/in/srishtikhatri/"
												target="_blank"
												rel="nofollow noreferrer"
												label="Srishti Khatri"
												className={styles.linkedInSmallIcon}
											>
												<img
													src={require("../assets/images/about-us/linkedin-icon.png")}
													alt=""
												/>
											</a>
										}

									</Grid>
									<div className={styles.teamMemberPosition}>Business Head</div>
									{!isMobile &&
										<div>
											<a
												href="https://www.linkedin.com/in/srishtikhatri/"
												target="_blank"
												rel="nofollow noreferrer"
												label="Srishti Khatri"
												className={styles.linkedInSmallIcon}
											>
												<img
													src={require("../assets/images/about-us/linkedin-icon.png")}
													alt=""
												/>
											</a>
										</div>
									}
								</Animate.FadeUp>
								<Animate.FadeUp
									direction="left"
									element={Grid}
									className={styles.teamParagraph}
									elementProps={{
										size: {xs: 12, sm: 7}
									}}
								>
									Srishti Khatri is a visionary leader transforming ideas into compelling visuals. Her grounded, decisive, and collaborative approach nurtures and refines every concept with clarity and purpose. She empowers others, builds effective systems, and creates impact through creativity and consistency.
								</Animate.FadeUp>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</section>
		</>
	);
};

export default About;
