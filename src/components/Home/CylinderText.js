import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useDevice } from '@/context/DeviceContext';
import { ColorfulText } from "@/components/common";

import * as styles from "./CylinderText.module.scss";

gsap.registerPlugin(ScrollTrigger);

function CylinderText() {
	const { isMobile } = useDevice();
	const textWrapper = useRef(null);
	const wrapper = useRef(null);

	const calculatePositions = () => {
		const offset = isMobile ? 0.6 : 0.4;
		const radius = Math.min(window.innerWidth, window.innerHeight) * offset;
		const textItems = textWrapper.current.querySelectorAll(`.${styles.cylinderTextItem}`);
		const spacing = 180 / textItems.length;

		textItems.forEach((item, index) => {
			const angle = (index * spacing * Math.PI) / 180;
			const rotationAngle = index * -spacing;

			const x = 0;
			const y = Math.sin(angle) * radius;
			const z = Math.cos(angle) * radius;

			item.style.transform = `translate3d(-50%, -50%, 0) translate3d(${x}px, ${y}px, ${z}px) rotateX(${rotationAngle}deg)`;
		});
	}

	const createScrollTrigger = () => {
		
	}

	useEffect(() => {
		calculatePositions();
    createScrollTrigger();
	}, []);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			ScrollTrigger.create({
				trigger: wrapper.current,
				start: `top ${isMobile ? '20%' : 'top'}`,
				pin: wrapper.current,
				scrub: 2,
				animation: gsap.fromTo(textWrapper.current, { rotateX: -82 }, { rotateX: 270, ease: 'none' }),
			});
		});
		return () => ctx.revert(); // <- cleanup!
	}, []);

	const wrapperStyle = { height: "60vh", overflow: "hidden" }

	return (
		<section className={styles.cylinderWrapper} ref={wrapper} style={isMobile ? wrapperStyle : {}}>
			<ul className={styles.cylinderTextWrapper} ref={textWrapper}>
				<li className={styles.cylinderTextItem}>We</li>
				<li className={styles.cylinderTextItem}>explore,</li>
				<li className={styles.cylinderTextItem}>we</li>
				<li className={styles.cylinderTextItem}>design,</li>
				<li className={styles.cylinderTextItem}>we</li>
				<li className={styles.cylinderTextItem}>create,</li>
				<li className={styles.cylinderTextItem}>we</li>
				<li className={styles.cylinderTextItem}>refine,</li>
				<li className={styles.cylinderTextItem}>we</li>
				<li className={styles.cylinderTextItem}>reveal</li>
				<li className={styles.cylinderTextItem}>the</li>
				{isMobile ?
					<li className={styles.cylinderTextItem}><ColorfulText>Magic!</ColorfulText></li>
					:
					<li className={styles.cylinderTextItem}><ColorfulText>extraordinary</ColorfulText></li>
				}
			</ul>
		</section>
	)
}

export default CylinderText;
