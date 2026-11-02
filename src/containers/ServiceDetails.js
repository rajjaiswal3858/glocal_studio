import React from "react";
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import cx from "classnames";

import { StarGradiantIcon } from "@/components/Icons";
import { useDevice } from '@/context/DeviceContext';
import {
	ColorfulText,
	Heading,
	LinkButton,
	Carousel,
	Animate
} from "@/components/common";

import WhatWeDoBox from "@/components/ServiceDetails/WhatWeDoBox";
import ProfessionalServiceBox from "@/components/ServiceDetails/ProfessionalServiceBox";
import FAQContainer from "@/components/ServiceDetails/FAQContainer";
import WhyChooseUsBox from "@/components/ServiceDetails/WhyChooseUsBox";

import NotFound from "@/containers/NotFound";

import { routes } from "@/utils/routesPath";
import { servicesInfo } from "@/utils/serviceInfo";

import * as styles from "./ServiceDetails.module.scss";

function ServiceDetails() {
	const params = useParams();
	const { isMobile } = useDevice();

	const serviceDetails = servicesInfo[params.id] || null;
	
	if (!serviceDetails) {
		return <NotFound />;
	}

	const whyChooseUsContent = [
		{
			image: require("../assets/images/service-details/collebration-section-icon-1.png"),
			title: "Direct Collaboration",
			content: "Work hand-in-hand with our 3D modeling and rendering team for clear communication and faster results.",
			usps: [
				"Work directly with artists, no middle layers.",
				"Instant changes and refinements.",
				"Your intent translated accurately into visuals."
			],
		}, {
			image: require("../assets/images/service-details/collebration-section-icon-2.png"),
			title: "Senior Supervision",
			content: "Every project is overseen by a senior designer to ensure consistency, creativity, and flawless output.",
			usps: [
				"Experienced designers guiding every project.",
				"Uniform quality across outputs.",
				"Junior modelers supervised for precision."
			],
		}, {
			image: require("../assets/images/service-details/collebration-section-icon-3.png"),
			title: "Boutique Quality",
			content: "Get high-end, boutique-level design quality at the efficiency and cost advantage of offshore execution.",
			usps: [
				"Boutique-level finish on every render.",
				"Offshore efficiency without compromise.",
				"Handle one-off jobs or large volumes."
			],
		}, {
			image: require("../assets/images/service-details/collebration-section-icon-4.png"),
			title: "Quick Turnarounds",
			content: "We deliver across time zones with speed and reliability-without ever compromising on detail or quality.",
			usps: [
				"Work continues seamlessly while you rest.",
				"Optimized processes for faster delivery.",
				"Consistently meeting tight schedules."
			],
		}, {
			image: require("../assets/images/service-details/collebration-section-icon-5.png"),
			title: "Privacy & Confidentiality",
			content: "Hands-on quality control and NDA-backed confidentiality protect your work, ensuring trust and peace of mind.",
			usps: [
				"Multiple review stages before delivery.",
				"NDA-backed data protection protocols.",
				"Proven record of trust and reliability."
			],
		}, 
	];

	return (
		<>
			<Helmet>
				<title>{serviceDetails?.seoContent?.title || `${serviceDetails.title} | Glocal Studio`}</title>
			</Helmet>
			<section className={styles.masterHead}>
				<div className={styles.videoWrapper}>
					<video
						muted
						autoPlay
						controls={false}
						loop
						playsInline
						className={cx(styles.masterHeadVideo, styles[serviceDetails.id])}
						key={params.id}
						poster={serviceDetails.background_poster}
					>
						<source src={serviceDetails.background_webm} type="video/webm" />
						<source src={serviceDetails.background} type="video/mp4" />
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
							{serviceDetails.title}
						</Animate.FadeUp>
						<Grid size={12}>
							<Heading className={cx(styles.masterHeadingHeading, styles.extraLightText)}>
								{serviceDetails.desktopMainHeading}
							</Heading>
							<Heading className={styles.masterHeadingHeading}>
								{serviceDetails.secondaryHeading}
							</Heading>
						</Grid>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: {xs: 12, md: 8},
								offset: {xs: 0, md: 2},
								mx: "20px",
								my: {xs: 2, md: 0},
							}}
							className={cx(styles.masterHeadText, styles.textWhite)}
						>
							{serviceDetails.description}
						</Animate.FadeUp>
						<Grid size={12}>
							<LinkButton
								to={routes.portfolio.href}
								style={{ "--button-bg": "#060010", "--button-text-color":  "#f3f2ee" }}
							>
								Browse portfolio
							</LinkButton>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.whatWeDoSection}>
				<Container maxWidth="xl">
					<Grid size={12} spacing={4} container>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: 12,
							}}
							className={cx(styles.textCenter, styles.sectionHeadings)}
							direction="down"
						>
							<ColorfulText className={styles.uppercase}>What We Do</ColorfulText>
						</Animate.FadeUp>
						<Grid size={12}>
							<Heading
								variant="secondary"
								className={cx(styles.extraLightText, styles.textCenter, styles.textWhite, styles.whatWeDoContent)}
							>
								{serviceDetails.whatWeDo.content}
							</Heading>
						</Grid>
					</Grid>
					<Grid
						size={12}
						container
						spacing={4}
						className={styles.whatWeDoBoxContainer}
						justifyContent="center"
						alignItems="flex-start"
					>
						{
							serviceDetails.whatWeDo.items.map((item, index) => (
								<WhatWeDoBox
									key={item.id}
									id={item.id}
									title={item.title}
									heading={item.heading}
									content={item.content}
									image={item.image}
									type={item.type}
									delay={`${index * 100}ms`}
								/>
							))
						}
					</Grid>
				</Container>
			</section>
			<section>
				{
					serviceDetails?.show3dRenderSection ? (
						<>
							<div className={styles.threeDRenderVideoSection}>
								<video muted autoPlay controls={false} loop playsInline className={styles.threeDRenderVideo}>
									<source src={require("../assets/videos/3d-walkthough-section.mp4")} type="video/webm" />
									<source src={require("../assets/videos/3d-walkthough-section.mp4")} type="video/mp4" />
								</video>
							</div>
							<Container maxWidth="xl" className={styles.stepIntoSectionContainer}>
								<Grid size={12}>
									<Heading
										className={cx(styles.textCenter, styles.textWhite, styles.extraLightText, styles.uppercase)}
									>
										Step Inside Your Project-
									</Heading>
									<Heading
										className={cx(styles.textCenter, styles.textWhite, styles.uppercase)}
									>
										Before It's Built
									</Heading>
								</Grid>
								<Animate.FadeUp
									element={Grid}
									elementProps={{
										size: 12,
									}}
									className={styles.weDesignSecondaryHeading}
								>
									We design walkthroughs that help you present, persuade, <br />and close with confidence.
								</Animate.FadeUp>
								<Grid
									size={12}
									container
									spacing={{xs: 5, md: 4}}
									alignItems="flex-start"
									className={styles.projectInfoBoxes}
								>
									<Animate.FadeUp
										element={Grid}
										elementProps={{
											size: {xs: 12, sm: 6, md: 3},
											container: true,
											spacing: {xs: 1, md: 4},
										}}
										delay="0"
									>
										<Grid size={12} className={styles.textCenter}>
											<img
												src={require("../assets/images/service-details/project-info-icon-1.png")}
												alt=""
												className={styles.projectInfoImage}
											/>
										</Grid>
										<Grid size={12} className={cx(styles.textCenter, styles.textWhite, styles.fontLarge)}>
											Dynamic camera movements & smooth transitions
										</Grid>
									</Animate.FadeUp>
									<Animate.FadeUp
										element={Grid}
										elementProps={{
											size: {xs: 12, sm: 6, md: 3},
											container: true,
											spacing: {xs: 1, md: 4},
										}}
										delay="50ms"
									>
										<Grid size={12} className={styles.textCenter}>
											<img
												src={require("../assets/images/service-details/project-info-icon-2.png")}
												alt=""
												className={styles.projectInfoImage}
											/>
										</Grid>
										<Grid size={12} className={cx(styles.textCenter, styles.textWhite, styles.fontLarge)}>
											Realistic lighting, textures, and materials
										</Grid>
									</Animate.FadeUp>
									<Animate.FadeUp
										element={Grid}
										elementProps={{
											size: {xs: 12, sm: 6, md: 3},
											container: true,
											spacing: {xs: 1, md: 4},
										}}
										delay="100ms"
									>
										<Grid size={12} className={styles.textCenter}>
											<img
												src={require("../assets/images/service-details/project-info-icon-3.png")}
												alt=""
												className={styles.projectInfoImage}
											/>
										</Grid>
										<Grid size={12} className={cx(styles.textCenter, styles.textWhite, styles.fontLarge)}>
											Exterior flythroughs + interior walkthroughs
										</Grid>
									</Animate.FadeUp>
									<Animate.FadeUp
										element={Grid}
										elementProps={{
											size: {xs: 12, sm: 6, md: 3},
											container: true,
											spacing: {xs: 1, md: 4},
										}}
										delay="150ms"
									>
										<Grid size={12} className={styles.textCenter}>
											<img
												src={require("../assets/images/service-details/project-info-icon-4.png")}
												alt=""
												className={styles.projectInfoImage}
											/>
										</Grid>
										<Grid size={12} className={cx(styles.textCenter, styles.textWhite, styles.fontLarge)}>
											Music, narration & branding integration
										</Grid>
									</Animate.FadeUp>
								</Grid>
							</Container>
						</>
					) : null
				}
				<div className={styles.threeDRenderImageWrapper}>
					<img
						src={require("../assets/images/service-details/step-into-section-bg.webp")}
						alt=""
						className={styles.threeDRenderImage}
					/>
				</div>
			</section>
			<section className={styles.partnerWithProfessionalSection}>
				<Container maxWidth="xl" className={styles.partnerWithProfessionalContainer}>
					<Grid size={12} spacing={{xs: 3, md: 6}} container>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: 12,
							}}
							className={cx(styles.textCenter, styles.sectionHeadings)}
							direction="down"
						>
							<ColorfulText>INDUSTRIES WE SERVE</ColorfulText>
						</Animate.FadeUp>
						<Grid size={12} mb={{xs: 4, md: 0}}>
							<Heading
								className={cx(styles.textCenter, styles.textWhite, styles.uppercase, styles.fontNormal)}
							>
								Partnering With Professionals
							</Heading>
							<Heading
								className={cx(styles.textCenter, styles.textWhite, styles.uppercase, styles.fontNormal)}
							>
								Who Shape Spaces
							</Heading>
						</Grid>
						<Grid size={12} container spacing={3} alignItems="stretch">
							{
								serviceDetails.professionalServiceContent.map((service, index) => (
									<ProfessionalServiceBox
										key={index}
										image={service.image}
										heading={service.heading}
										content={service.content}
										keyServices={service.keyServices}
										footer={service.footer}
										delay={`${index * 50}ms`}
									/>
								))
							}
						</Grid>
						{!isMobile ?
							<Grid 
								size={12}
								container
								spacing={3}
								className={styles.serviceUsp}
							>
								{
									serviceDetails.professionalServiceContent.map((service, index) => (
										<Grid size={{xs: 12, sm: 6, md: 3}} container spacing={4} key={index}>
											<Animate.FadeUp
												element={Grid}
												elementProps={{
													size: 12,
													container: true,
													spacing: 2,
													alignItems: "flex-start"
												}}
											>
												<Grid size={2} offset={1}>
													<StarGradiantIcon width="35px" height="39px" />
												</Grid>
												<Grid size={8} className={styles.smallFontSize}>{service.footer}</Grid>
											</Animate.FadeUp>
										</Grid>
									))
								}
							</Grid>
						: null}
						<Grid size={12} className={styles.textCenter}>
							<LinkButton to={routes["contact-us"].href}>
								let's get started
							</LinkButton>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.whyChooseUsSection}>
				<div className={cx(styles.videoWrapper, styles.whyChooseUsVideo)}>
					<video muted autoPlay controls={false} loop playsInline className={styles.masterHeadVideo} key={params.id}>
						<source src={require("../assets/videos/why-choose-us-video.mp4")} type="video/mp4" />
					</video>
				</div>
				<Container maxWidth="xl" className={styles.mainContainer}>
					<Grid size={12} container className={styles.whyChooseUsContentContainer}>
						<Grid size={12} container className={styles.textCenter} justifyContent="center">
							<Animate.FadeUp
								element={Grid}
								elementProps={{
									size: 12,
								}}
								direction="down"
								className={cx(styles.textCenter, styles.sectionHeadings)}
							>
								<ColorfulText>WHY CHOOSE US</ColorfulText>
							</Animate.FadeUp>
							<Grid size={12} className={styles.whyChooseUsSecondaryHeadingContainer}>
								<Heading variant="seconndary" className={styles.uppercase}>
									Collaboration, <br/>
									Supervision & Speed
								</Heading>
							</Grid>
							<Animate.ScaleIn
								element={Grid}
								elementProps={{
									size: 12,
								}}
							>
								<StarGradiantIcon width="65px" height="78px" />
							</Animate.ScaleIn>
							<Grid size={12} className={styles.whyChooseUsHeadingContainer}>
								<Heading className={styles.uppercase}>All in One Studio.</Heading>
							</Grid>
							<Animate.FadeUp
								element={Grid}
								elementProps={{
									size: 12,
								}}
								className={styles.workDirectlyText}
							>
								Work directly with the creators, guided by senior designers, with quality and confidentiality at every step.
							</Animate.FadeUp>
						</Grid>
						<Grid size={12}>
							<WhyChooseUsBox whyChooseUsContent={whyChooseUsContent} />
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.logoContainer}>
				<Container maxWidth="xl">
					<Grid size={12} container spacing={3}>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: 12,
							}}
							className={cx(styles.textCenter, styles.sectionHeadings)}
							direction="down"
						>
							<ColorfulText>ONLY THE BEST TECH FOR OPTIMUM RESULTS</ColorfulText>
						</Animate.FadeUp>
						<Grid size={12} container justifyContent="center">
							<Heading className={styles.softwareHeading}>SOFTWARES & TOOLS</Heading>
						</Grid>
						<Grid size={12}>
							<Carousel animationTime="70s">
								{
									Array.from({ length: 15 }, (_, i) => {
										const imageSrc = require(`../assets/images/service-details/logos/software-logo-${i + 1}.png`);
										return (
											<li key={i}>
												<img
													src={imageSrc}
													alt=""
												/>
											</li>
										)
									})
								}
							</Carousel>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.faqContainer}>
				<Container maxWidth="xl">
					<Grid size={12} container>
						<Grid size={12}>
							<img src={require("../assets/images/service-details/faq-icon.png")} alt="" className={styles.faqIcon} />
						</Grid>
						<Grid size={12}>
							<div className={styles.faqHeading}>
								<Animate.FadeUp element="span" direction="right">
									frequently asked questions
								</Animate.FadeUp>
							</div>
						</Grid>
					</Grid>
					<FAQContainer faqContent={serviceDetails.faqContent} />
				</Container>
			</section>
		</>
	);
};

export default ServiceDetails;
