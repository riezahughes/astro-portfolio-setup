export interface IMainNavigation {
	menu: MainNavigationLinks[];
}

export type MainNavigationLinks = {
	url: string;
	label: string;
};
