import React, { useState } from "react";
import { Grid2 as Grid } from "@mui/material";
import cx from "classnames";

import { ColorfulText, Animate } from "@/components/common";

import { useDevice } from '@/context/DeviceContext';

import * as styles from "./FAQContainer.module.scss";

function FAQContainer(props) {
	const { faqContent } = props;
	const { isMobile } = useDevice();
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<Grid size={12} container spacing={5} alignItems="flex-start">
			{
				faqContent.map((item, index) => (
					<Animate.FadeUp
						element={Grid}
						elementProps={{
							size: {xs: 12, sm: 6, lg: 3},
							container: true,
							spacing: 0,
						}}
						key={item.id}
						delay={`${index * 100}ms`}
					>
						<Grid size={12} className={styles.count}>
							{
								index === activeIndex ? (
									<ColorfulText className={styles.colorfulTextFaq}>0{item.id}.</ColorfulText>
								) : (
									isMobile ?
										<ColorfulText className={styles.colorfulTextFaq}>0{item.id}.</ColorfulText>
										:
										<>0{item.id}.</>
									
									
								)
							}
						</Grid>
						<Grid
							size={12}
							className={cx(
								styles.heading,
								{
									[styles.active]: index === activeIndex
								}
							)}
							onClick={() => setActiveIndex(index)}
						>
							{item.title}
						</Grid>
						{
							index === activeIndex ? (
								<Grid size={12} className={styles.faqContent}>
									{item.content}
								</Grid>
							) : null
						}
					</Animate.FadeUp>
				))
			}
		</Grid>
	)
}

export default FAQContainer;
