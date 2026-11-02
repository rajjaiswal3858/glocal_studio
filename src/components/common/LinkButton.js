import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import Animate from "./Animate";

import * as styles from "./LinkButton.module.scss";

function LinkButton(props) {
	const {
		to,
		delay,
		className = "",
		wrapperStyle = {},
		wrapperClassName = "",
		style = {},
		children,
		onClick = () => {},
		direction = "up"
	} = props;

	return (
		<Animate.FadeUp
			direction={direction}
			delay={delay}
			className={cx(styles.buttonWrapper, wrapperClassName)}
			style={wrapperStyle}
		>
			{to ? (
				<Link to={to} className={cx(styles.button, className)} style={style} onClick={onClick}>
					{children}
				</Link>
			) : (
				<button
					type="button"
					className={cx(styles.button, className)}
					style={style}
					onClick={(e) => {
						e.preventDefault();
						onClick(e);
					}}
				>
					{children}
				</button>
			)}
		</Animate.FadeUp>
	);
}

export default LinkButton;
