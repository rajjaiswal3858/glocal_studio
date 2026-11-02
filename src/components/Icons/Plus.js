import React from "react";

function PlusIcon(props) {
	const { fill = "#ece9e2", ...restProps } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill={fill}
			{...restProps}
		>
			<path d="m10.75 6.75c0-.41421-.3358-.75-.75-.75-.41421 0-.75.33579-.75.75v2.5h-2.5c-.41421 0-.75.33579-.75.75 0 .4142.33579.75.75.75h2.5v2.5c0 .4142.33579.75.75.75.4142 0 .75-.3358.75-.75v-2.5h2.5c.4142 0 .75-.3358.75-.75 0-.41421-.3358-.75-.75-.75h-2.5z" />
		</svg>
	)
}

export default PlusIcon;
