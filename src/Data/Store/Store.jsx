import { configureStore } from '@reduxjs/toolkit';
import { profileSlice } from './Features/Profile/ProfileSlice';
import { productSlicee } from './Features/Products/ProductSlice';
import { cartsSlicee } from './Features/Carts/CartsSlice';

const Store = configureStore({
	reducer: {
		profile: profileSlice,
		products: productSlicee,
		carts: cartsSlicee,
	},
});

export default Store;
