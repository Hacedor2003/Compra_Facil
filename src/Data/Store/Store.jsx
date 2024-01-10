import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './Features/Profile/ProfileSlice';
import productReducer from './Features/Products/ProductSlice';
import cartsReducer from './Features/Carts/CartsSlice';

export default configureStore({
	reducer: {
		profile: profileReducer,
		products: productReducer,
		carts: cartsReducer,
	},
});
