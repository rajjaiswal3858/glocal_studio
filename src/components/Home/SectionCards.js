import React from "react";
import { Grid2 as Grid } from "@mui/material";
import { useTransform, motion } from 'framer-motion';

import { useDevice } from '@/context/DeviceContext';
import { Heading, Animate } from "@/components/common";

import * as styles from "./SectionCards.module.scss";

export default function SectionCards(props) {
	const { card, progress, range, targetScale } = props;
	const { isMobile } = useDevice();

	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<motion.div
			className={styles.content}
			style={{scale}} 
		>
			<Grid
				size={12}
				container
				spacing={{xs:3, md: 8}}
				className={styles.container}
				data-count={card.id}
			>
				<Grid size={{xs: 12, md: 5}} container 
					// sx={{alignContent:"space-between"}}
					sx={{
						alignContent: { xs: "start", md: "space-between" },
					}}
				>
					<Grid size={12}>
						<div className={styles.stepCount}>
							WHY CHOOSE US?
						</div>
						<Heading variant="secondary" className={styles.title}>
							{card.title}
						</Heading>
					</Grid>
					<Grid size={12}>
						<Animate.FadeUp
							element="p"
							className={styles.text}
						>
							{isMobile ? card.textMobile : card.text}
						</Animate.FadeUp>
					</Grid>
				</Grid>
			</Grid>
			<img
				className={styles.img}
				src={card.imgSrc}
				alt={card.title}
			/>
		</motion.div>
	)
};
