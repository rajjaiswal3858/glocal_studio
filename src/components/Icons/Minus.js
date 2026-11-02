import React from "react";

function MinusIcon(props) {
	const { fill = "#ece9e2", ...restProps } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill={fill}
			{...restProps}
		>
			<path d="m6 10c0-.41421.33579-.75.75-.75h6.5c.4142 0 .75.33579.75.75 0 .4142-.3358.75-.75.75h-6.5c-.41421 0-.75-.3358-.75-.75z" />
		</svg>
	)
}

export default MinusIcon;
