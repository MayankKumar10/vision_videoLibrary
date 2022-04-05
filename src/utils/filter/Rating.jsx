export const Rating = (arry, rating) => {
	if (rating) {
		return arry.filter(
			(item) => item.rating >= rating
		);
	}
	return arry;
};
