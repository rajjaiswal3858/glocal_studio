import React from "react";

import * as styles from "./GlassContainer.module.scss";

export default function GlassContainer(props) {
	const { glassBackground } = props;
	return (
		<>
			<div className={styles.glassEffect} style={{ "--glassBackground": glassBackground }} />
			<div className={styles.glassTint} style={{ "--glassBackground": glassBackground }} />
			<div className={styles.glassShine} style={{ "--glassBackground": glassBackground }} />
		</>
	);
}
