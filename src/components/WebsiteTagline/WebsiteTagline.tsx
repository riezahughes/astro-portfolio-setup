import React, { useState } from "react";
import useInterval from "../../hooks/useInterval/useInterval";
import type { IWebsiteTagline } from "./types";
import Styles from "./styles.module.css";

const WebsiteTagline = ({ start = "google.com", choices = ["images", "news"], delay = 3000 }: IWebsiteTagline) => {
	const [choiceCount, setChoiceCount] = useState(0);
	const changeLink = () => {
		choiceCount >= choices.length - 1 ? setChoiceCount(0) : setChoiceCount(choiceCount + 1);
	};

	useInterval(() => {
		changeLink();
	}, delay);

	return (
		<>
			<h1>
				<span className={Styles.start}>{start}</span>/<span className={Styles.choice}>{choices[choiceCount]}</span>
			</h1>
		</>
	);
};

export default WebsiteTagline;
