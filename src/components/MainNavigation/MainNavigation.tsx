import React, { useState } from "react";
import type { IMainNavigation } from "./types";
import Styles from "./styles.module.css";
import Pointer from "../Pointer/Pointer";

const MainNavigation = ({ menu }: IMainNavigation) => {
	return (
		<nav id="mainHeaderNavigation">
			<ul className={Styles.mainNavLinkContainer}>
				{menu.map((item) => {
					return (
						<li>
							<a className={Styles.mainNavLink} href={item.url}>
								{item.label}
							</a>
						</li>
					);
				})}
			</ul>
			{/* <Pointer text="HIRE ME!" size="small" /> //Turned off because it's just not looking right. Custom SVG pointing to what i want */}
		</nav>
	);
};

export default MainNavigation;
