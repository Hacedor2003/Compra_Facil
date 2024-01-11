import { configureStore } from '@reduxjs/toolkit';
import { profileSlice } from './Features/Profile/ProfileSlice';
import { productSlicee } from './Features/Products/ProductSlice';
import { cartsSlicee } from './Features/Carts/CartsSlice';
import { categorySlice } from './Features/Products/Category/CategoriesSlice';
import { categorieProductSlice } from './Features/Products/ProductByCategory/CategoriesProductSlice';

const Store = configureStore({
	reducer: {
		profile: profileSlice,
		products: productSlicee,
		category: categorySlice,
		productByCategory: categorieProductSlice,
		carts: cartsSlicee,
	},
});

export default Store;
