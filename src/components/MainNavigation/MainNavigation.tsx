import React, { useState } from "react";
import type { IMainNavigation } from "./types";
import Styles from "./styles.module.css";

const MainNavigation = ({ menu }: IMainNavigation) => {
	return (
		<nav id="mainHeaderNavigation">
			<ul className={Styles.mainNavLinkContainer}>
				{menu.map((item, index) => {
					return (
						<li key={`mainNav-${index}`}>
							<a className={Styles.mainNavLink} href={item.url}>
								{item.label}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default MainNavigation;
