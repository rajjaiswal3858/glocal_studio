import React, { useRef } from "react";
import { Grid2 as Grid } from '@mui/material';
import { useTransform, motion } from "framer-motion";
import { useDevice } from '@/context/DeviceContext';

import LinkButton from "./LinkButton";
import Animate from "./Animate";

import * as styles from "./ServiceCard.module.scss";

export default function ServiceCard(props) {
	const { isMobile } = useDevice();

	const {
		heading,
		subHeading,
		description,
		usp,
		image,
		imageClassName = "",
		progress,
		translateY = isMobile ? 100 : 400,
		link,
		imageType = "image"
	} = props;

	const serviceCardContainer = useRef(null);

	const parallax = useTransform(progress, [0, 1], [translateY, 0]);

	const MotionGrid = motion.create(Grid);

	return (
		<MotionGrid
			size={{xs: 12, md: 6, lg: 4}}
			className={styles.fullSupportItemGrid}
			style={{
				y: parallax,
				willChange: "transform",
			}}
			ref={serviceCardContainer}
		>
			<Grid size={12} container className={styles.itemContent}>
				<Animate.FadeUp
					element={Grid}
					elementProps={{
						size: 12,
					}}
					className={styles.itemHeading}
					direction="left"
				>
					{heading}
				</Animate.FadeUp>
				<Animate.FadeUp
					element={Grid}
					elementProps={{
						size: 12,
					}}
					className={styles.itemSubHeading}
					direction="left"
				>
					{subHeading}
				</Animate.FadeUp>
				<Animate.FadeUp
					element={Grid}
					elementProps={{
						size: 12,
					}}
					className={styles.itemText}
					direction="left"
				>
					{description}
				</Animate.FadeUp>
			</Grid>

			<Grid size={12} spacing={3} container>
				{/* <Grid size={{xs: 12, sm: 6}} sx={{ order: { xs: 3, md: 0 } }}>
					<LinkButton to={link} style={{ "--button-bg": "#f2f0ea" }}>GET A FREE QUOTE</LinkButton>
				</Grid> */}
				<Grid size={12} spacing={3} container>
					<Grid size={{xs: 12, sm: 6}} sx={{ order: { xs: 3, sm: 0 } }}>
						<LinkButton to={link} style={{ "--button-bg": "#f2f0ea" }}>Explore More</LinkButton>
					</Grid>
					<Grid flexDirection="row" size={{xs: 10, sm: 6}} sx={{ order: { xs: 2, sm: 0 } }} className={styles.itemSmallText}>
						<span>{usp}</span>
						<img src={require("../../assets/images/check-icon.svg")} alt="" className={styles.checkIcon} />
					</Grid>
					{/* <Grid size={{xs: 2, sm: 1}} >
						<img src={require("../../assets/images/check-icon.png")} alt="" className={styles.checkIcon} />
					</Grid> */}
				</Grid>
				{/* <Grid size={{xs:2, sm: 1}}>
					<img src={require("../../assets/images/check-icon.png")} alt="" className={styles.checkIcon} />
				</Grid> */}
			</Grid>

			<Grid size={12} className={styles.imageContainer}>
				{
					imageType === "image" ? (
						<img
							src={image}
							alt=""
							className={imageClassName}
						/>
					) : (
						<video muted autoPlay controls={false} loop playsInline>
							<source src={image} />
						</video>
					)
				}
			</Grid>
		</MotionGrid>
	);
}
