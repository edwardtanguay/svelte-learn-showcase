export type Employee = {
	firstName: string;
	lastName: string;
};

export type Skill = {
	name: string;
	description: string;
};

export type Cart = {
	cartId: number;
	products: string[];
};

export type HtmlColor = {
	hex: string;
	name: string;
	textColor: string;
};

export type AppStore = {
	siteName: string;
	employees: Employee[]
};