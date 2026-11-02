import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid, ImageList, ImageListItem } from "@mui/material";
import FsLightbox from "fslightbox-react";
import cx from "classnames";

import { StarGradiantIcon, PhoneIcon, EmailIcon } from "@/components/Icons";

import {
	Heading,
	Animate,
	ContactForm,
} from "@/components/common";

import { useDevice } from '@/context/DeviceContext';

import masterHeadVideo from "@/assets/videos/contact-us-masterhead.mp4";
import masterHeadVideoSmall from "@/assets/videos/contact-us-masterhead.webm";
import contactFormVideo from "@/assets/videos/contact-form-bg.mp4";
import contactFormVideoSmall from "@/assets/videos/contact-form-bg.webm";

import * as styles from "./ContactUs.module.scss";

function ContactUs() {
	const { isMobile } = useDevice();

	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

	const imageList= [];

	Array.from({ length: 23 }, (_, i) => {
		const imageSrc = require(`../assets/images/office-images/glocal-office-${i + 1}.webp`);
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
					<video
						muted
						autoPlay
						controls={false}
						loop
						playsInline
						className={styles.masterHeadVideo}
						poster={require("../assets/images/contact-us/masterhead.jpg")}
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
							CONTACT GLOCAL STUDIO
						</Animate.FadeUp>
						<Grid size={12} mb={{xs:2, md:0}}>
							<Heading className={cx(styles.masterHeadingHeading, styles.extraLightText)}>A GLOBAL LEADER IN</Heading>
							<Heading className={styles.masterHeadingHeading}>3D VISUALIZATION</Heading>
						</Grid>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								mb:{xs:2, md:0},
								size: {xs: 12, md: 8},
								offset: {xs: 0, md: 2},
							}}
							className={cx(styles.masterHeadText, styles.textWhite)}
						>
							Whether you're an architect, developer, or designer, we'd love to hear about your project. Let's start building something extraordinary together.
						</Animate.FadeUp>
					</Grid>
				</Container>
			</section>
			<section className={styles.qualityMetricsContainer}>
				<div className={cx(styles.videoWrapper, styles.formVideo)}>
					<video
						muted
						autoPlay
						controls={false}
						loop
						playsInline
						className={styles.masterHeadVideo}
						poster={require("../assets/images/contact-us/number-section-bg.jpg")}
					>
						<source src={contactFormVideoSmall} type="video/webm" />
						<source src={contactFormVideo} type="video/mp4" />
					</video>
				</div>
				<Container maxWidth="xl" className={styles.mainContainer} id="formContainer">
					<Grid
						size={12}
						container
						className={styles.contactFormContainer}
						spacing={9}
					>
						<Grid size={{xs: 12, md: 6}} container alignItems="space-between" spacing={0}>
							<Grid size={12}>
								<Heading variant="secondary" className={styles.contactFormSmallHeading} direction="down">
									Whether it's a quick question or a detailed brief, we're ready to explore your idea
								</Heading>
							</Grid>
							<Grid size={12} container alignContent="flex-end" spacing={0}>
								<Animate.FadeUp
									element={Grid}
									elementProps={{
										size: 12,
										container: true,
										spacing: 0
									}}
									className={styles.contactInfo}
								>
									<Grid size={12}>
										<div className={styles.addressHeading}>Glocal Studio - USA</div>
										<div>3422 Old Capitol Trail</div>
										<div>Wilmington DE 19808, USA</div>
									</Grid>
									<Grid size={12}>
										<div className={styles.phoneNumber}>
											<PhoneIcon fill="#000" width="24px" height="24px" />
											<a href="tel:+1213-510-4140">+1 213-510-4140</a>
										</div>
										<div className={styles.emailAddress}>
											<EmailIcon fill="#000" width="24px" height="24px" />
											<a href="mailto:info@glocalstudio.in">info@glocalstudio.in</a>
										</div>
									</Grid>
								</Animate.FadeUp>
								<Animate.FadeUp
									element={Grid}
									elementProps={{
										size: 12,
										container: true,
										alignContent: "flex-end",
										spacing: 0
									}}
								>
									<Grid size={12}>
										<div className={styles.addressHeading}>Glocal Studio - India</div>
										<div>B-73, Sector 57, Noida - 201301,</div>
										<div>Uttar Pradesh, INDIA</div>
									</Grid>
									<Grid size={12}>
										<div className={styles.phoneNumber}>
											<PhoneIcon fill="#000" width="24px" height="24px" />
											<a href="tel:+91 917 938 7208">+91 917 938 7208</a>
										</div>
										<div className={styles.emailAddress}>
											<EmailIcon fill="#000" width="24px" height="24px" />
											<a href="mailto:info@glocalstudio.in">info@glocalstudio.in</a>
										</div>
									</Grid>
								</Animate.FadeUp>
							</Grid>
						</Grid>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: {xs: 12, md: 6},
								container: true,
								alignContent: "flex-start",
								spacing: 0
							}}
							direction="left"
						>
							<Grid size={12} className={styles.formHeading}>
								Share a few details about your project and our team will get back to you shortly.
							</Grid>
							<Grid size={12}>
								<ContactForm isContactPageForm />
							</Grid>
						</Animate.FadeUp>
					</Grid>
				</Container>
			</section>
			<section className={styles.mapContainer}>
				<div className={styles.starIcon}>
					<Animate.ScaleIn>
						<StarGradiantIcon />
					</Animate.ScaleIn>
				</div>
				<div className={styles.mapFrameContainer}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112088.89475280508!2d77.21062309726561!3d28.606437200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56eee10001b%3A0xe692f713efb39502!2sHead%20Field%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1760264799193!5m2!1sen!2sin"
						className={styles.mapFrame}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Glocal Studio"
					/>
				</div>
			</section>
			<section className={styles.gallerySection}>
				<Container maxWidth="xl">
					<Grid size={12} container spacing={3} className={styles.textCenter}>
						<Grid size={12}>
							<Heading className={styles.extraLightText}>The Studio Where Ideas</Heading>
							<Heading>Take Shape</Heading>
						</Grid>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: {xs: 12, md: 8},
								offset: {xs: 0, md: 2},
							}}
							className={cx(styles.advantageText, styles.glocalPrespectiveText)}
						>
							Take a look inside our workspace where creativity, technology, and collabaration come together every day.
						</Animate.FadeUp>
					</Grid>
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

export default ContactUs;
