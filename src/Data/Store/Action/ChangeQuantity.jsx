export const changeQuantity = (id, productId, quantity) => {
	return {
		type: 'CHANGE_QUANTITY',
		payload: {
			id,
			productId,
			quantity,
		},
	};
};
