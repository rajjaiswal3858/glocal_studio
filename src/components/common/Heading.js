import React from "react";

import Animate from "./Animate";

import * as styles from "./Heading.module.scss";

function Heading(props) {
	const {
		variant = "primary",
		className = "",
		direction = "up",
		children
	} = props;

	if (variant === "primary") {
		return (
			<Animate.FadeUp direction={direction}>
				<h1
					className={`${styles.primaryHeading} ${className}`}
				>
					{children}
				</h1>
			</Animate.FadeUp>
		)
	}

	return (
		<Animate.FadeUp direction={direction}>
			<h2
				className={`${styles.secondaryHeading} ${className}`}
			>
				{children}
			</h2>
		</Animate.FadeUp>
	);
}

export default Heading;
