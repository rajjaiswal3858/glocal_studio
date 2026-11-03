import React, { useEffect, useRef, useState } from "react";
import { Modal, Fade } from "@mui/material";
import cx from "classnames";

import { CloseIcon } from "@/components/Icons";

import siteImage from "@/assets/images/site-explorer/site-aerial.webp";
import aerialRooftop from "@/assets/videos/site-explorer/aerial-rooftop.mp4";
import aerialSite01 from "@/assets/videos/site-explorer/aerial-site-01.mp4";
import aerialSite02 from "@/assets/videos/site-explorer/aerial-site-02.mp4";
import buildingFrontage from "@/assets/videos/site-explorer/building-frontage.mp4";
import centralPlaza from "@/assets/videos/site-explorer/central-plaza.mp4";
import entrance from "@/assets/videos/site-explorer/entrance.mp4";
import floatingCafe from "@/assets/videos/site-explorer/floating-cafe.mp4";
import parking from "@/assets/videos/site-explorer/parking.mp4";
import pavilion from "@/assets/videos/site-explorer/pavilion.mp4";
import playground from "@/assets/videos/site-explorer/playground.mp4";
import tennisCourt from "@/assets/videos/site-explorer/tennis-court.mp4";

import * as styles from "./SiteExplorer.module.scss";

// x / y are percentages of the image width / height
const hotspots = [
	{ id: "aerial-rooftop", label: "Aerial Rooftop", video: aerialRooftop, x: 42.3, y: 54.7 },
	{ id: "building-frontage", label: "Podium Promenade", video: buildingFrontage, x: 50, y: 58 },
	{ id: "floating-cafe", label: "Floating Cafe", video: floatingCafe, x: 56.25, y: 60.9 },
	{ id: "parking", label: "Parking", video: parking, x: 69, y: 64.7 },
	{ id: "pavilion", label: "Pavilion", video: pavilion, x: 74, y: 68.6 },
	{ id: "playground", label: "Playground", video: playground, x: 29.5, y: 68.6 },
	{ id: "central-plaza", label: "Central Plaza", video: centralPlaza, x: 44, y: 72.6 },
	{ id: "aerial-site-02", label: "Aerial Site View 01", video: aerialSite02, x: 69, y: 73.5 },
	{ id: "tennis-court", label: "Tennis Court", video: tennisCourt, x: 27, y: 76 },
	{ id: "aerial-site-01", label: "Aerial Site View 02", video: aerialSite01, x: 54.5, y: 78.8 },
	{ id: "entrance", label: "Entrance", video: entrance, x: 44.5, y: 85.7 },
];

// Per-hotspot timings so the blips float and pulse out of step with each other
const motionStyle = (index) => ({
	"--i": index,
	"--float-duration": `${(3.6 + ((index * 0.73) % 1.9)).toFixed(2)}s`,
	"--float-delay": `-${((index * 1.37) % 4).toFixed(2)}s`,
	"--pulse-duration": `${(2.8 + ((index * 0.59) % 1.4)).toFixed(2)}s`,
	"--blip-duration": `${(2.2 + ((index * 0.41) % 1.1)).toFixed(2)}s`,
	"--blip-delay": `${((index * 0.29) % 1).toFixed(2)}s`,
});

// Sparkles scattered over the plaza and gardens; fixed values keep SSR and client markup identical
const particles = Array.from({ length: 16 }, (_, index) => ({
	"--x": `${(12 + ((index * 37) % 76)).toFixed(1)}%`,
	"--y": `${(45 + ((index * 23) % 45)).toFixed(1)}%`,
	"--size": `${3 + (index % 4)}px`,
	"--duration": `${(6 + ((index * 1.7) % 5)).toFixed(2)}s`,
	"--delay": `-${((index * 2.3) % 9).toFixed(2)}s`,
}));

function SiteExplorer() {
	const sectionRef = useRef(null);
	const scrollerRef = useRef(null);
	const videoRef = useRef(null);
	const [active, setActive] = useState(null);
	const [open, setOpen] = useState(false);
	// Hotspot highlighted from the corner list, so users can see where it is on the site
	const [highlighted, setHighlighted] = useState(null);
	// Entrance animations only kick in once JS runs, so the section is never stuck hidden
	const [animated, setAnimated] = useState(false);
	const [inView, setInView] = useState(false);
	// Offset of the clicked hotspot from the viewport centre; the lightbox grows out of it
	const [origin, setOrigin] = useState({ x: 0, y: 0 });

	// On narrow screens the image is wider than the viewport; start centred on the site
	useEffect(() => {
		const scroller = scrollerRef.current;
		if (scroller && scroller.scrollWidth > scroller.clientWidth) {
			scroller.scrollLeft = (scroller.scrollWidth - scroller.clientWidth) / 2;
		}
	}, []);

	// Scale the site in when the section enters the viewport and back out when it leaves
	useEffect(() => {
		const section = sectionRef.current;
		if (!section || typeof IntersectionObserver === "undefined") return undefined;
		setAnimated(true);
		const observer = new IntersectionObserver(
			([entry]) => setInView(entry.isIntersecting),
			{ threshold: 0.2 }
		);
		observer.observe(section);
		return () => observer.disconnect();
	}, []);

	// Cursor parallax (mouse only); writes -1..1 offsets as CSS variables, once per frame
	const frameRef = useRef(null);
	const handlePointerMove = (event) => {
		if (event.pointerType !== "mouse") return;
		const section = sectionRef.current;
		const rect = section.getBoundingClientRect();
		const px = ((event.clientX - rect.left) / rect.width) * 2 - 1;
		const py = ((event.clientY - rect.top) / rect.height) * 2 - 1;
		cancelAnimationFrame(frameRef.current);
		frameRef.current = requestAnimationFrame(() => {
			section.style.setProperty("--px", px.toFixed(3));
			section.style.setProperty("--py", py.toFixed(3));
		});
	};

	const handlePointerLeave = () => {
		cancelAnimationFrame(frameRef.current);
		sectionRef.current.style.setProperty("--px", 0);
		sectionRef.current.style.setProperty("--py", 0);
	};

	useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

	// Autoplay with sound; fall back to muted if the browser blocks it
	useEffect(() => {
		const video = videoRef.current;
		if (!open || !video) return;
		const playPromise = video.play();
		if (playPromise) {
			playPromise.catch(() => {
				video.muted = true;
				video.play().catch(() => {});
			});
		}
	}, [open, active]);

	const handleOpen = (hotspot, event) => {
		const rect = event.currentTarget.getBoundingClientRect();
		setOrigin({
			x: rect.left + rect.width / 2 - window.innerWidth / 2,
			y: rect.top + rect.height / 2 - window.innerHeight / 2,
		});
		setActive(hotspot);
		setOpen(true);
	};

	const handleClose = () => {
		const video = videoRef.current;
		if (video) {
			video.pause();
			video.currentTime = 0;
		}
		setOpen(false);
	};

	// Unmount the video once the fade-out finishes so it stops buffering
	const handleExited = () => setActive(null);

	return (
		<section
			ref={sectionRef}
			className={cx(styles.siteExplorer, animated && styles.animated, inView && styles.inView)}
			aria-label="Interactive site explorer"
			onPointerMove={handlePointerMove}
			onPointerLeave={handlePointerLeave}
		>
			<div className={styles.scroller} ref={scrollerRef}>
				<div className={styles.stage}>
					<div className={styles.canvas}>
						{/* Image and hotspots drift together so the blips stay pinned to their spots */}
						<div className={styles.drift}>
							<img src={siteImage} alt="Aerial view of the three-tower development and its amenities" className={styles.image} loading="lazy" />
							<div className={styles.clouds} aria-hidden="true" />
							<div className={styles.glint} aria-hidden="true" />
							<div className={styles.particles} aria-hidden="true">
								{particles.map((style, index) => (
									<span key={index} className={styles.particle} style={style} />
								))}
							</div>
							{hotspots.map((hotspot, index) => (
								<button
									key={hotspot.id}
									type="button"
									className={cx(styles.hotspot, highlighted === hotspot.id && styles.hotspotHighlighted)}
									style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%`, ...motionStyle(index) }}
									onClick={(event) => handleOpen(hotspot, event)}
									aria-label={`Play ${hotspot.label} video`}
								>
									<span className={styles.dot} />
									<span className={styles.label}>{hotspot.label}</span>
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			<nav className={styles.areaList} aria-label="Site areas">
				<ul>
					{hotspots.map((hotspot) => (
						<li key={hotspot.id}>
							<button
								type="button"
								className={styles.areaLink}
								onClick={(event) => handleOpen(hotspot, event)}
								onMouseEnter={() => setHighlighted(hotspot.id)}
								onMouseLeave={() => setHighlighted(null)}
								onFocus={() => setHighlighted(hotspot.id)}
								onBlur={() => setHighlighted(null)}
							>
								{hotspot.label}
							</button>
						</li>
					))}
				</ul>
			</nav>

			<Modal
				open={open}
				onClose={handleClose}
				closeAfterTransition
				aria-label={active ? `${active.label} video` : undefined}
				slotProps={{
					backdrop: {
						className: styles.backdrop,
						style: { "--backdrop-image": `url(${siteImage})` },
						transitionDuration: { enter: 500, exit: 400 },
					},
				}}
				data-lenis-prevent
			>
				<Fade in={open} onExited={handleExited} timeout={{ enter: 300, exit: 400 }}>
					<div
						className={cx(styles.lightbox, open ? styles.lightboxOpen : styles.lightboxClosing)}
						style={{ "--from-x": `${origin.x}px`, "--from-y": `${origin.y}px` }}
					>
						<button type="button" className={styles.closeButton} onClick={handleClose} aria-label="Close video">
							<CloseIcon className={styles.closeIcon} />
						</button>
						{active && (
							<video
								key={active.id}
								ref={videoRef}
								className={styles.video}
								src={active.video}
								autoPlay
								loop
								playsInline
								preload="auto"
							/>
						)}
					</div>
				</Fade>
			</Modal>
		</section>
	);
}

export default SiteExplorer;
