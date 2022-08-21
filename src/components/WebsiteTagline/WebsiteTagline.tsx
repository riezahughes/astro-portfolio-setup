import React, { useEffect, useState } from "react";
import type { IWebsiteTagline } from "./types";
import Styles from "./styles.module.css";

export default function WebsiteTagline({ start = "google.com", choices = ["images", "news"] }: IWebsiteTagline) {
	const [choiceCount, setChoiceCount] = useState(0);
	const changeLink = () => {
		choices.length > choiceCount + 1 ? setChoiceCount(choiceCount + 1) : setChoiceCount(0);
	};

	useEffect(() => {
		setInterval(() => {
			console.log("Preso Changeo!");
			changeLink();
		}, 5000);
	}, []);

	return (
		<>
			<h1>
				<span className={Styles.start}>{start}</span>/<span className={Styles.choice}>{choices[choiceCount]}</span>
			</h1>
		</>
	);
}
