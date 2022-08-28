import MainNavigation from "./MainNavigation";
import { Variant } from "@vitebook/preact";

const WebsiteTaglineStory = () => {
	const onEnterVariant = (variant: Record<string, unknown>) => {
		console.log(variant);
	};

	const onExitVariant = (variant: Record<string, unknown>) => {
		console.log(variant);
	};
	return (
		<>
			<Variant name="Default" description="The default settings." onEnter={onEnterVariant} onExit={onExitVariant}>
				<MainNavigation menu={[{ url: "test.com", label: "label" }]} />
			</Variant>
			<Variant name="Long" description="The longer setting." onEnter={onEnterVariant} onExit={onExitVariant}>
				<MainNavigation
					menu={[
						{ url: "#", label: "Home" },
						{ url: "#articles", label: "Articles" },
						{ url: "#about", label: "About" },
						{ url: "#csv", label: "CSV" },
						{ url: "#contact", label: "Contact" }
					]}
				/>
			</Variant>
		</>
	);
};

export default WebsiteTaglineStory;
