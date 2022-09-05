import ProfileIcon from "./ProfileIcon";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Variant } from "@vitebook/preact";

const ProfileIconStory = () => {
	const onEnterVariant = (variant: Record<string, unknown>) => {
		console.log(variant);
	};

	const onExitVariant = (variant: Record<string, unknown>) => {
		console.log(variant);
	};
	return (
		<>
			<Variant name="Github" description="The default settings." onEnter={onEnterVariant} onExit={onExitVariant}>
				<ProfileIcon url="https://github.com/riezahughes" icon={<AiFillGithub />} />
			</Variant>
			<Variant name="Multiple" description="More than 1." onEnter={onEnterVariant} onExit={onExitVariant}>
				<div style={{ display: "flex" }}>
					<ProfileIcon url="#" icon={<AiFillGithub />} />
					<ProfileIcon url="#" icon={<AiFillLinkedin />} />
					<ProfileIcon url="#" icon={<AiFillGithub />} />
					<ProfileIcon url="#" icon={<AiFillLinkedin />} />
				</div>
			</Variant>
		</>
	);
};

export default ProfileIconStory;
