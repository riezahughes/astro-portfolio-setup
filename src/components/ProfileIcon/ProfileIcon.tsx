import type { IProfileIcon } from "./types";
import styles from "./styles.module.css";

const ProfileIcon = ({ icon, url }: IProfileIcon) => {
	return <a href={url}>{icon()}</a>;
};

export default ProfileIcon;
