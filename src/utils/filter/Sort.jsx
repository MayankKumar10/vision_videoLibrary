export const Sort = (arry, sortBy) => {
	let arry2 = [];
	if (sortBy === "LOW_TO_HIGH") {
		return (arry2 = [...arry].sort(
			(item1, item2) =>
				item1.price - item2.price
		));
	}
	if (sortBy === "HIGH_TO_LOW") {
		return (arry2 = [...arry].sort(
			(item1, item2) =>
				item2.price - item1.price
		));
	}
	return arry;
};
