import React from "react";

function StarGradiantIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			style={{
				shapeRendering: "geometricPrecision",
				textRendering: "geometricPrecision",
				imageRendering: "optimizeQuality",
				fillRule: "evenodd",
				clipRule: "evenodd"
			}}
			viewBox="0 0 127.92 142.87"
			{...props}
		>
			<defs>
				<linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="63.96" y1="0" x2="63.96" y2="153.83">
					<stop
						offset="0"
						style={{
							stopOpacity: 1,
							stopColor: "#E5097F"
						}}
					/>
					<stop
						offset="0.458824" style={{
							stopOpacity: 1,
							stopColor: "#9139FF"
						}}
					/>
					<stop
						offset="1"
						style={{
							stopOpacity: 1,
							stopColor: "#00A0E3"
						}}
					/>
				</linearGradient>
			</defs>
			<g id="Layer_x0020_1">
				<path
					style={{
						fill: 'url(#id0)',
						fillRule: "nonzero"
					}}
					d="M126.43 73.36c-41.29,10.62 -51.18,21.57 -60.52,67.92 -0.43,2.12 -3.46,2.12 -3.89,0 -9.34,-46.35 -19.24,-57.3 -60.53,-67.92 -1.99,-0.51 -1.99,-3.33 0,-3.84 41.29,-10.63 51.19,-21.57 60.53,-67.93 0.43,-2.12 3.46,-2.12 3.89,0 9.34,46.36 19.23,57.3 60.52,67.93 1.99,0.51 1.99,3.33 0,3.84z"
				/>
			</g>
		</svg>
	);
}

export default StarGradiantIcon;
