import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductos = createAsyncThunk('products/fetchProductos', async () => {
	try {
		const response = await axios.get('https://fakestoreapi.com/products');
		return response.data;
	} catch (error) {
		console.error('Error fetching products:', error);
		throw error;
	}
});

const productSlice = createSlice({
	name: 'products',
	initialState: {
		products: [],
		status: 'idle',
		error: null,
	},
	reducers: {
		productAdded: (state, action) => {
			state.products.push(action.payload);
		},
		reactionAdded: (state, action) => {
			const { productId, reaction } = action.payload;
			const existingProduct = state.products.find((product) => product.id === productId);
			if (existingProduct) {
				existingProduct.reactions[reaction]++;
			}
		},
		change: (state, action) => {
			const { payload } = action;
			const existingProduct = state.products.find((product) => product.id === payload.id);
			if (existingProduct) {
				Object.assign(existingProduct, payload);
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProductos.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchProductos.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.products = action.payload;
			})
			.addCase(fetchProductos.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const { change, productAdded, reactionAdded } = productSlice.actions;
export const selectAllProducts = (state) => state.products.products;
export const selectProductById = (state, productId) => state.products.products.find((product) => product.id === productId);
export const selectProductByName = (state, nameProduct) => state.products.products.filter((product) => product.title.includes(nameProduct));
export const selectProductStatus = (state) => state.products.status;

export const productSlicee = productSlice.reducer