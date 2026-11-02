import React from "react";
import { Grid2 as Grid } from "@mui/material";

import { Heading, Animate } from "@/components/common";

import { StarGradiantIcon } from "@/components/Icons";

import { useDevice } from '@/context/DeviceContext';

import * as styles from "./ProfessionalServiceBox.module.scss";

function ProfessionalServiceBox(props) {
	const { image, heading, content, keyServices, footer } = props;
	const { isMobile } = useDevice();

	return (<Grid size={{xs:12, md: 6, lg: 3}} container spacing={{xs: 2, md: 4}}>
		<Grid size={{xs:12}} container spacing={4} className={styles.container}>
			<Grid size={12} alignSelf="flex-start">
				<img
					src={image}
					alt={heading}
					className={styles.image}
				/>
			</Grid>
			<Grid size={12} spacing={{xs:2, md: 4}} container className={styles.contentContainer} alignSelf="flex-start">
				<Grid size={12}>
					<Heading variant="secondary" className={styles.headingText}>{heading}</Heading>
				</Grid>
				<Animate.FadeUp
					element={Grid}
					elementProps={{
						size: 12,
					}}
					className={styles.smallFontSize}
				>
					{content}
				</Animate.FadeUp>
			</Grid>
			<Grid size={12} container className={styles.contentContainer}  alignSelf="flex-end">
				<Grid size={12} container spacing={3}>
					<Animate.FadeUp
						element={Grid}
						elementProps={{
							size: 12,
						}}
						className={styles.mediumBold}
					>
						Key Qualities We Offer:
					</Animate.FadeUp>
					{
						keyServices.map((service, index) => (
							<Animate.FadeUp
								element={Grid}
								elementProps={{
									size: 6,
									container: true,
									spacing: {xs:1, md:2},
									alignItems: "flex-start"
								}}
								className={styles.mediumBold}
								key={index}
								delay={`${index * 50}ms`}
							>
								<Grid size={{md:4}} className={styles.keyServiceIcon}>
									{service.image}
								</Grid>
								<Grid size={{xs:8}} className={styles.extraSmallfontsize}>{service.content}</Grid>
							</Animate.FadeUp>
						))
					}
				
				</Grid>
				
				{!isMobile ?
				<Grid size={{xs: 8, md: 12}}>
					<img
						src={require("../../assets/images/service-details/arrow-icon.png")}
						alt=""
						className={styles.arrowIcon}
					/>
				</Grid>
				: null}
			</Grid>
		</Grid>
		{isMobile ? 
		<Grid 
			size={{xs:12}}
			container spacing={4}
			mb={{xs: 4, md: 0}}
			sx={{
				display: { xs: "block", lg: "none" }
			}}
		>
			<Animate.FadeUp
				element={Grid}
				className={styles.starBox}
				elementProps={{
					size: 12,
					container: true,
					spacing: 2,
					alignItems: "flex-start",
					justifyContent:"center"
				}}
			>
				<Grid>
					<StarGradiantIcon width="35px" height="39px" />
				</Grid>
				<Grid size={9} className={styles.smallFontSize}>{footer}</Grid>
			</Animate.FadeUp>
		</Grid>
		: null}
	</Grid>)
}

export default ProfessionalServiceBox;
