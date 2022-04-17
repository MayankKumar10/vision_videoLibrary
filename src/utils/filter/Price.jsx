export const Price = (arry, price) => {
	return arry.filter(
		(item) => item.price <= price
	);
};
