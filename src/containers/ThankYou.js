import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { StarGradiantIcon } from "@/components/Icons";

import {
	Heading,
	Animate,
	LinkButton,
} from "@/components/common";

import { routes } from "@/utils/routesPath";

import * as styles from "./ThankYou.module.scss";

function ThankYou() {
	const navigate = useNavigate();

	useEffect(() => {
		// If someone navigates to this page directly (not via form submission),
		// redirect them to the home page after checking referrer
		const isFromForm = sessionStorage.getItem("formSubmitted");
		if (!isFromForm) {
			navigate(routes.home.href, { replace: true });
		}
		// Clean up the flag so refreshing the page redirects to home
		return () => {
			sessionStorage.removeItem("formSubmitted");
		};
	}, [navigate]);

	return (
		<>
			<Helmet>
				<title>Thank You | Glocal Studio</title>
				<meta name="description" content="Thank you for reaching out to Glocal Studio. Our team will get back to you shortly." />
			</Helmet>
			<section className={styles.thankYouSection}>
				<Container maxWidth="xl" className={styles.mainContainer}>
					<Grid
						size={12}
						container
						className={styles.contentGrid}
						spacing={{ xs: 2, md: 4 }}
						justifyContent="center"
						alignItems="center"
					>
						<Animate.ScaleIn
							element={Grid}
							elementProps={{
								size: 12,
								justifyContent: "center",
							}}
						>
							<div className={styles.checkmarkWrapper}>
								<svg
									className={styles.checkmark}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 52 52"
								>
									<circle
										className={styles.checkmarkCircle}
										cx="26"
										cy="26"
										r="25"
										fill="none"
									/>
									<path
										className={styles.checkmarkCheck}
										fill="none"
										d="M14.1 27.2l7.1 7.2 16.7-16.8"
									/>
								</svg>
							</div>
						</Animate.ScaleIn>

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
							direction="down"
							className={styles.subHeading}
						>
							THANK YOU FOR REACHING OUT
						</Animate.FadeUp>

						<Grid size={12}>
							<Heading className={styles.mainHeading}>
								{"WE'VE RECEIVED YOUR"}
							</Heading>
							<Heading className={styles.mainHeadingBold}>
								INQUIRY
							</Heading>
						</Grid>

						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: { xs: 12, md: 8 },
								offset: { xs: 0, md: 2 },
							}}
							className={styles.descriptionText}
						>
							Our team is reviewing your message and will get back to you within 24 hours. In the meantime, feel free to explore our portfolio and services.
						</Animate.FadeUp>

						<Grid size={12} className={styles.buttonContainer}>
							<LinkButton
								to={routes.home.href}
								style={{ "--button-bg": "#060010", "--button-text-color": "#f3f2ee" }}
							>
								Back to Home
							</LinkButton>
						</Grid>
					</Grid>
				</Container>
			</section>
		</>
	);
}

export default ThankYou;
