import React from "react";
import { Grid2 as Grid } from "@mui/material";

import { Animate } from "@/components/common";

import { useDevice } from '@/context/DeviceContext';

import * as styles from "./WhyChooseUsBox.module.scss";

function WhyChooseUsBox(props) {
	const { whyChooseUsContent } = props;

	const { isMobile } = useDevice();

	return (
		<Grid size={12} container spacing={{xs: 0, sm: 5}} className={styles.whyChooseUsBoxContainer}>
			{
				whyChooseUsContent.map((box, index) => (
					<Animate.FadeUp
						className={styles.whyChooseUsBox}
						key={index}
						element={Grid}
						elementProps={{
							size: {xs: 12, sm: 6, md: 4, lg: 2.4},
							container: true,
							mb:{xs: 5, md: 0},
							sx: {
								textAlign: {xs: "center", md: "left"}
							}
							
						}}
						
						delay={`${index * 150}ms`}
					>	
						<Grid size={12} container spacing={3} >
							<Grid size={12}>
								<img
									src={box.image}
									alt={box.title}
									className={styles.icon}
								/>
							</Grid>
							<Grid size={12} className={styles.title}>
								{box.title}
							</Grid>
							<Grid size={12}>
								{box.content}
							</Grid>
							{!isMobile ?
								<Grid size={12} container spacing={2}>
									{
										box.usps.map((usp, index) => (
											<Grid size={12} container alignItems="flex-start" key={index}>
												<Grid size={2}>
													<img
														src={require("../../assets/images/service-details/tick-icon.png")}
														alt=""
														className={styles.tickIcon}
													/>
												</Grid>
												<Grid size={10}>
													{usp}
												</Grid>
											</Grid>
										))
									}
								</Grid>
							: null}
						</Grid>
					</Animate.FadeUp>
				))
			}
		</Grid>
	)
}

export default WhyChooseUsBox;