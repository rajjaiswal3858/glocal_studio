import React from "react";
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid } from "@mui/material";
import cx from "classnames";

import { StarGradiantIcon } from "@/components/Icons";

import {
	Heading,
	LinkButton,
	Animate,
	ServiceList,
} from "@/components/common";

import masterHeadVideo from "@/assets/videos/services-masterhead.mp4";
import masterHeadVideoSmall from "@/assets/videos/services-masterhead.webm";

import { routes } from "@/utils/routesPath";

import * as styles from "./Services.module.scss";

function About() {
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
						poster={require("../assets/images/services-masterhead.jpg")}
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
							Services
						</Animate.FadeUp>
						<Grid size={12} mb={{xs:2, md:0}}>
							<Heading className={cx(styles.masterHeadingHeading, styles.extraLightText)}>Creative vision meets</Heading>
							<Heading className={styles.masterHeadingHeading}>technical excellence</Heading>
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
							We offer end-to-end 3D services that help architects, designers, developers, and brands visualize, sell, and execute ideas confidently.
						</Animate.FadeUp>
						<Grid size={12}>
							<LinkButton
								to={routes["contact-us"].href}
								style={{ "--button-bg": "#060010", "--button-text-color":  "#f3f2ee" }}
							>
								let's get started
							</LinkButton>
						</Grid>
					</Grid>
				</Container>
			</section>
			<ServiceList />
		</>
	);
};

export default About;
