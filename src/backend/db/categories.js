import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "Laptop",
		description: "Laptop",
	},
	{
		_id: uuid(),
		categoryName: "Gaming Laptops",
		description: "Phones",
	},
	{
		_id: uuid(),
		categoryName: "CPU",
		description: "CPU",
	},
	{
		_id: uuid(),
		categoryName: "Phones",
		description: "Phones",
	},
];
