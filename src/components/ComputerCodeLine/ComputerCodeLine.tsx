import type { IComputerCodeLine } from "./types";
import Styles from "./styles.module.css";

const ComputerCodeLine = ({ user = "", path = "", words = "example" }: IComputerCodeLine) => {
	return (
		<>
			<h1>
				<span className={Styles.userStyle}>{user}</span>:<span className={Styles.pathStyle}>{path}</span>
				<span className={Styles.wordStyle}>
					$ {words} <span className={Styles.flashing}>▌</span>
				</span>
			</h1>
		</>
	);
};

export default ComputerCodeLine;
