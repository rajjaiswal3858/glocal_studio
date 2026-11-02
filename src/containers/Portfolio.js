import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid, ImageList, ImageListItem } from "@mui/material";
import FsLightbox from "fslightbox-react";
import Lottie from "lottie-react";
import cx from "classnames";

import { useDevice } from '@/context/DeviceContext';
import { StarGradiantIcon } from "@/components/Icons";

import { Heading, Animate } from "@/components/common";

import masterHeadVideo from "@/assets/videos/portfolio-masterhead.mp4";
import masterHeadVideoSmall from "@/assets/videos/portfolio-masterhead.webm";

import * as styles from "./Portfolio.module.scss";

function About() {
	const { isMobile } = useDevice();

	const [lightboxController, setLightboxController] = useState({
			toggler: false,
			slide: 1
		});
	
		const imageList= [];
	
		Array.from({ length: 55 }, (_, i) => {
			const imageSrc = require(`../assets/images/portfolio/portfolio-${i + 1}.webp`);
			imageList.push(imageSrc);
		});
	
		const openLightboxOnSlide = (number) => {
			setLightboxController({
				toggler: !lightboxController.toggler,
				slide: number
			});
		};

	return (
		<>
			<Helmet>
				<title>The World's Leading Studio You Can Trust | Glocal Studio</title>
				<meta name="description" content="Streamline your business with professional virtual assistant services. Get remote administrative support, scheduling, customer care, and more. Enhance productivity today!" />
			</Helmet>
			<section className={styles.masterHead}>
				<div className={styles.videoWrapper}>
					<video muted autoPlay controls={false} loop playsInline className={styles.masterHeadVideo}>
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
							Portfolio
						</Animate.FadeUp>
						<Grid size={12} mb={{xs:2, md:0}}>
							<Heading className={cx(styles.masterHeadingHeading, styles.extraLightText)}>A showcase of ideas</Heading>
							<Heading className={styles.masterHeadingHeading}>brought to life</Heading>
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
							Browse through the visuals that define our approach—sharp detailing, realistic light, and designs that communicate with clarity.
						</Animate.FadeUp>
						<Grid size={12}>
							<Lottie
								animationData={require("../assets/animations/down-arrow.json")}
								loop
								className={styles.downArrowIcon}
							/>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.gallerySection}>
				<Container maxWidth="xl">
					<Grid size={12} spacing={{xs: 6, md: 3}} container>
						<ImageList
							variant="masonry"
							cols={isMobile ? 2 : 3}
							gap={isMobile ? 10 : 20}
							className={styles.imageListRoot}
						>
							{
								imageList.map((image, i) => (
									<ImageListItem
										key={i}
										className={styles.imageListItem}
										onClick={() => openLightboxOnSlide(i + 1)}
										size={{xs:6}}
									>
										<img
											srcSet={image}
											src={image}
											loading="lazy"
											alt=""
										/>
									</ImageListItem>
								))
							}
						</ImageList>
					</Grid>
				</Container>
			</section>
			<FsLightbox
				toggler={lightboxController.toggler}
				sources={imageList}
				slide={lightboxController.slide}
			/>
		</>
	);
};

export default About;
