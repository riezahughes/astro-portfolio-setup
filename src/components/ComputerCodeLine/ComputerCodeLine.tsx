import type { IComputerCodeLine } from "./types";
import { keyframes, css } from "@emotion/css";

const flashingUnderscore = keyframes`
    0% { opacity: 0 };
    20%{ opacity:  1 };
	80%{ opacity: 1 };
    100% { opacity: 0 };
`;

const userStyle = css`
	color: #20bd80;
`;

const pathStyle = css`
	color: #368ce8;
`;

const wordStyle = css`
	margin-right: 10px;
`;

const ComputerCodeLine = ({ user = "", path = "", words = "example" }: IComputerCodeLine) => {
	return (
		<>
			<h1>
				<span className={userStyle}>{user}</span>:<span className={pathStyle}>{path}</span>
				<span className={wordStyle}>$ {words}</span>
				<span
					className={css`
						animation: ${flashingUnderscore} 1s infinite;
					`}
				>
					▋
				</span>
			</h1>
		</>
	);
};

export default ComputerCodeLine;
