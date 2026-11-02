import React from "react";
import cx from "classnames";

import * as styles from "./ColorfulText.module.scss";

export default function ColorfulText(props) {
	const { children, className = "" } = props;

	return (
		<span className={cx(styles.colorfulText, className)}>{children}</span>
	)
}
