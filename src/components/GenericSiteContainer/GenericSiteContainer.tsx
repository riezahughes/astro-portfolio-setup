import type { IGenericSiteContainer } from "./types";

const GenericSiteContainer = ({ children, padding }: IGenericSiteContainer) => {
	return <div style={{ padding: padding }}>{children}</div>;
};
export default GenericSiteContainer;
