import { useSelector } from 'react-redux';
import { selectProductById } from '../../../../Data/Store/Features/Products/ProductSlice';

export const useUpdateProductQuantity = (id, product, action = 'sum') => {
	let localCartData = JSON.parse(localStorage.getItem('cart') || '[]');
	let existingProductIndex = -1;
	let newProduct = undefined;

	if (product !== null) {
		existingProductIndex = localCartData.findIndex((item) => item.products.id === Number(product.products.id));
	} else if (action === 'create') {
		newProduct = useSelector((state) => selectProductById(state, Number(id)));
	}

	if (existingProductIndex !== -1) {
		switch (action) {
			case 'sum':
				{
					localCartData[existingProductIndex].products.quantity += 1;
				}
				break;
			case 'less':
				{
					localCartData[existingProductIndex].products.quantity -= 1;
				}
				break;
		}
	} else if (existingProductIndex === -1) {
		localCartData.push({
			id: 2,
			userId: 1,
			products: {
				...product,
				quantity: 1,
			},
		});
	} else if (action === 'create') {
		localCartData.push({
			id: 2,
			userId: 1,
			products: {
				...newProduct,
				quantity: 1,
			},
		});
	}

	localStorage.setItem('cart', JSON.stringify(localCartData));
	return newProduct;
};
