import React, { useState } from "react";
import type { IPointer } from "./types";
import Styles from "./styles.module.css";
import { reverseText } from "../../utils";

// experiment while playing around with SVG's

const Pointer = ({ text, size }: IPointer) => {
	return (
		<div className={Styles.container}>
			<svg
				className={Styles.svgComponent}
				width="100%"
				height="auto"
				version="1.1"
				viewBox="0 0 1000 550"
				preserveAspectRatio="xMidYMid meet"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g transform="matrix(1.5382, 0, 0, 1.5382, -189.090912, -190.557526)">
					<path
						id="arrow"
						d="m562.24 129.36c-26.316 61.039-68.879 114.24-121.52 154-53.199 40.32-118.16 70-185.36 76.16-27.441 2.2383-55.441 0-80.641-10.078 25.762-5.0391 50.961-10.078 76.719-15.121 5.6016-1.1211 6.7188-8.9609 6.7188-13.441 0-2.8008-1.1211-14.559-6.7188-13.441-36.398 7.2812-73.359 14.559-109.76 21.84-0.55859 0-1.6797 0.55859-2.2383 1.1211-1.1211-1.1211-2.2383-2.2383-3.3594-2.8008-9.5195-7.8398-13.441 17.922-6.7188 23.52 27.441 23.52 51.52 50.398 70.559 80.641 2.8008 4.4805 6.7188 5.0391 9.5195 0 2.8008-5.0391 3.3594-14 0-19.039-6.7188-10.641-14-20.16-21.281-30.238 50.961 14 109.2 1.6797 156.8-16.801 63.84-24.641 120.96-65.52 165.2-117.6 25.199-29.68 45.922-62.719 61.602-98 2.2383-5.6016 2.8008-13.441 0-19.039-2.2383-6.1602-7.2773-6.7188-9.5195-1.6797z"
						fill="#221f20"
					/>
				</g>
				<text className={Styles.svgText} fill="#ffffff" rotate="180">
					<textPath alignmentBaseline="after-edge" xlinkHref="#arrow">
						{reverseText(text)}
					</textPath>
				</text>
			</svg>
		</div>
	);
};

export default Pointer;
