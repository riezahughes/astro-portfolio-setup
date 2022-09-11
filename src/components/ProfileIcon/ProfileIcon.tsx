import type { IProfileIcon } from "./types";
import styles from "./styles.module.css";

const ProfileIcon = ({ Icon, url, title }: IProfileIcon) => {
	return <a href={url}>{<Icon title={title} />}</a>;
};

export default ProfileIcon;
