import React from "react";
import { useTransform, motion } from 'framer-motion';

import { useDevice } from '@/context/DeviceContext';

import * as styles from "./ScrollableMotionText.module.scss";

function ScrollableMotionText(props) {
	const { direction, left, progress, children } = props;

	const { isMobile } = useDevice();

	const dir = direction === 'left' ? -1 : 1;
	const progression = isMobile ? 4100 : 2800;

	const translateX = useTransform(
		progress,
		[0, 1],
		[150 * dir, -progression * dir]
	);

	return (
		<motion.div style={{x: translateX, left}} className={styles.textContainer}>
			{children}
		</motion.div>
	)
};

export default ScrollableMotionText;
