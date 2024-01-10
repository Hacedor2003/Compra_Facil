import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchCarts = createAsyncThunk('carts/fetchCarts', async () => {
	try {
		const response = await axios.get('https://fakestoreapi.com/carts');
		return response.data;
	} catch (error) {
		console.error('Error fetching carts:', error);
		throw error;
	}
});

const initialState = {
	carts: JSON.parse(localStorage.getItem('cart')) || [],
	status: 'idle',
	error: null,
};

const cartsSlice = createSlice({
	name: 'carts',
	initialState,
	reducers: {
		changeQuantityProduct: (state, action) => {
			const { id, quantity } = action.payload;
			const updatedCarts = state.carts.map((cart) => {
				const updatedProducts = cart.products.map((product) => {
					if (product.productId === id) {
						return { ...product, quantity: quantity };
					}
					return product;
				});
				return { ...cart, products: updatedProducts };
			});
			return { ...state, carts: updatedCarts };
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCarts.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchCarts.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.carts = action.payload;
			})
			.addCase(fetchCarts.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const { changeQuantityProduct } = cartsSlice.actions;
export default cartsSlice.reducer;
export const selectCart = (state) => state.carts.carts;
export const selectCartsLenght = (state) => state.carts.carts.length;
export const selectCartById = (state, cartsId) => state.carts.carts.find((cart) => cart.id === cartsId);
export const selectCartsByUserID = (state, userID) => state.carts.carts.filter((cart) => cart.userId === userID);
export const selectCartsStatus = (state) => state.carts.status;
export const selectCartsError = (state) => state.carts.error;
