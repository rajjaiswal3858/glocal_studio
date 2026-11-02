import React from "react";

import * as styles from "./Carousel.module.scss";

function Carousel(props) {
	const { animationTime, children } = props;

	return (
		<div className={styles.marquee}>
			<ul className={styles.marqueeContent} style={{ "--animation-time": animationTime }}>
				{children}
			</ul>
			<ul className={styles.marqueeContent} style={{ "--animation-time": animationTime }}>
				{children}
			</ul>
		</div>
	)
}

export default Carousel;
