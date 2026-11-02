import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Grid2 as Grid } from "@mui/material";
import cx from "classnames";

import MasterHeadVideo from "@/components/Home/MasterHeadVideo";
import MaskVideoSection from "@/components/Home/MaskVideoSection";
import ZoomParallax from "@/components/Home/ZoomParallax";
import UspSectionCards from "@/components/Home/UspSectionCards";
import ScrollCarousel from "@/components/Home/ScrollCarousel";
import SalesTalentPopup from '@/components/Home/SalesTalentPopup';
import SiteExplorer from "@/components/Home/SiteExplorer";


import { useDevice } from '@/context/DeviceContext';

import { Heading, Animate, ServiceList } from "@/components/common";

import masterHeadVideo from "@/assets/videos/home-masterhead-1080.mp4";
import masterHeadVideoWebm from "@/assets/videos/home-masterhead-1080.webm";
import masterHeadVideoMobile from "@/assets/videos/home-masterhead-720.mp4";

import * as styles from "./Home.module.scss";

function Home() {
	const { isMobile } = useDevice();

  return (
		<>
			<Helmet>
        <title>The World's Leading Studio You Can Trust | Glocal Studio</title>
				<meta name="description" content="Streamline your business with professional virtual assistant services. Get remote administrative support, scheduling, customer care, and more. Enhance productivity today!" />
      </Helmet>
			<section className={styles.masterHead}>
				<MasterHeadVideo />
				<video muted autoPlay controls={false} loop playsInline className={styles.masterHeadVideo}>
					<source src={masterHeadVideoMobile} type="video/mp4" media="(max-width: 900px)" />
					<source src={masterHeadVideoWebm} type="video/webm" />
					<source src={masterHeadVideo} type="video/mp4" />
				</video>
			</section>

			<SiteExplorer />

			<MaskVideoSection />
			
			<ServiceList />
			
			<section className={styles.portfolioSection}>
				<Container maxWidth="xl">
					<Grid size={12} mb={{xs: 1, md: 0}}>
						<Heading className={styles.portfolioHeading} direction="down">
							See the Stunning. 
						</Heading>
					</Grid>
					<Grid size={12}>
						<Heading variant="secondary" className={styles.portfolioSecondaryHeading}>Believe the Budget.</Heading>
					</Grid>
					{/* <Grid size={12} container justifyContent={"center"} className={`${styles.textCenter} ${styles.seeStunningText}`}>
						<Grid size={{xs: 12, md: 6}}> */}
					<Animate.FadeUp
						element={Grid}
						elementProps={{
							size: 12,
							container: true,
							justifyContent:"center"
						}}
						className={`${styles.textCenter} ${styles.seeStunningText}`}
						direction="up"
					>
						<Grid size={{xs: 12, md: 6}} offset={{xs:0, md:0}}>
							Explore some of our favorite works-from photorealistic home interiors to cinematic exterior walkthroughs. You'll be amazed what we deliver for the price.
						</Grid>
					</Animate.FadeUp>
					{/* <Grid size={12} justifySelf="center" className={styles.portfolioButtons}>
						<LinkButton style={{ "--button-bg": "#060010", "--button-text-color": "#ece9e2" }}>BROWSE PORTFOLIO</LinkButton>
					</Grid> */}
				</Container>
				<ZoomParallax />
			</section>
			<section className={styles.whyBrandLoveSection}>
				<Container maxWidth="xl">
					<Grid size={12}>
						<Heading variant="secondary" className={styles.whyBrandHeading} direction="down">Why Clients Love Us?</Heading>
					</Grid>
					<Grid size={12} sx={{
							mt: { xs: 3, md: 0 },
						}}>
						<Heading className={styles.whyBrandHeading}>
							Expert Reviewed.<br/>
							Technically Perfect.
						</Heading>
						<Heading className={cx(styles.textCenter, styles.fontBold)}>Every Time.</Heading>
					</Grid>
					<Animate.FadeUp
						element={Grid}
						direction="up"
						elementProps={{
							size: 12,
							container: true,
						}}
					>
						<Grid size={{xs: 12, md: 8}} offset={{xs: 0, md: 2}} className={styles.whyBrandSmallText}>
							At Glocal Studio, every render passes through a meticulous in-house review by architects, designers, and product specialists, ensuring accuracy, proportion, and realism at every stage. From light balance to material fidelity, nothing leaves our studio without expert validation. {isMobile && <><br/> <br/></>}The result? Consistent, production-ready visuals that meet the highest global standards.
						</Grid>
						<Grid size={{xs: 12, md:8}} offset={{xs:0, md:2}} className={styles.whyBrandSmallAnotherText}>
							Because great visuals aren't guessed, they're created.<br/>
							Every pixel checked. Every detail verified. Every time.
						</Grid>
					</Animate.FadeUp>
				</Container>
				<UspSectionCards />
			</section>
			<section className={styles.letUsRenderHeading}>
				<Container maxWidth="xl">
					<Grid size={12} container justifyContent="center">
						<Grid size={{md: 12, lg: 8}} className={styles.letUsRenderText}>
							Our services cover everything from architectural visualization and 3D modeling to product renders, animations, virtual tours, and technical documentation—giving you a complete creative and technical partner under one roof.
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.letUsRenderSection}> {/** Let us render section */}
				<ScrollCarousel
					images={[
						require("../assets/images/home/set1a.jpg"),
						require("../assets/images/home/set1b.jpg"),
						require("../assets/images/home/set1c.jpg"),
						require("../assets/images/home/set1d.jpg"),
					]}
					serviceName="Architectural Visualization"
				/>
			</section>
			<section className={styles.letUsRenderSection}> {/** Let us render section */}
				<ScrollCarousel
					images={[
						require("../assets/images/home/set2a.jpg"),
						require("../assets/images/home/set2b.jpg"),
						require("../assets/images/home/set2c.jpg"),
						require("../assets/images/home/set2d.jpg"),
					]}
					serviceName="3D Modeling"
				/>
			</section>
			<section className={styles.letUsRenderSection}> {/** Let us render section */}
				<ScrollCarousel
					images={[
						require("../assets/images/home/set4a.jpg"),
						require("../assets/images/home/set4b.jpg"),
						require("../assets/images/home/set4c.jpg"),
						require("../assets/images/home/set4d.jpg"),
					]}
					serviceName="Product Visualization"
				/>
			</section>
			<section className={styles.letUsRenderSection}> {/** Let us render section */}
				<ScrollCarousel
					images={[
						require("../assets/images/home/set5a.jpg"),
						require("../assets/images/home/set5b.jpg"),
						require("../assets/images/home/set5c.jpg"),
						require("../assets/images/home/set5d.jpg"),
					]}
					serviceName="3D Animation & Experiences"
				/>
			</section>
			<section className={styles.letUsRenderSection}> {/** Let us render section */}
				<ScrollCarousel
					images={[
						require("../assets/images/home/set6a.jpg"),
						require("../assets/images/home/set6b.jpg"),
						require("../assets/images/home/set6c.jpg"),
						require("../assets/images/home/set6d.jpg"),
					]}
					serviceName="360° & Virtual Tours"
				/>
			</section>
			<section className={styles.letUsRenderSection}> {/** Let us render section */}
				<ScrollCarousel
					images={[
						require("../assets/images/home/set3a.jpg"),
						require("../assets/images/home/set3b.jpg"),
						require("../assets/images/home/set3c.jpg"),
						require("../assets/images/home/set3d.jpg"),
					]}
					serviceName="Technical Drawings"
				/>
			</section>
			<section className={cx(styles.letUsRenderHeading, styles.letUsRenderHeadingLast)}>
				<Container maxWidth="xl">
					<Grid size={12} container justifyContent="center">
						<Grid size={8} className={styles.letUsRenderText}>
							and more...
						</Grid>
					</Grid>
				</Container>
			</section>
			{/* <SalesTalentPopup/> */}
		</>
  );
}

export default Home;
