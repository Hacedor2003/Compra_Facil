import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async () => {
	try {
		const response = await axios.get('https://fakestoreapi.com/users');
		return response.data;
	} catch (error) {
		console.error('Error fetching profile:', error);
		throw error;
	}
});

const profilelice = createSlice({
	name: 'profile',
	initialState: {
		profile: [],
		status: 'idle',
		error: null,
	},
	reducers: {
		profileAdded: (state, action) => {
			state.profile.push(action.payload);
		},
		reactionAdded: (state, action) => {
			const { profileId, reaction } = action.payload;
			const existingProfile = state.profile.find((profile) => profile.id === profileId);
			if (existingProfile) {
				existingProfile.reactions[reaction]++;
			}
		},
		change: (state, action) => {
			const { payload } = action;
			const existingProfile = state.profile.find((profile) => profile.id === payload.id);
			if (existingProfile) {
				Object.assign(existingProfile, payload);
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfile.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchProfile.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.profile = action.payload;
			})
			.addCase(fetchProfile.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const { change, profileAdded, reactionAdded } = profilelice.actions;
export default profilelice.reducer;
export const selectAllprofile = (state) => state.profile.profile;
export const selectProfileById = (state, profileId) => state.profile.profile.find((profile) => profile.id === profileId);
export const selectProfileByUserName = (state, username) => state.profile.profile.find((profile) => profile.username === username);
export const selectProfileByPassWord = (state, password) => state.profile.profile.find((profile) => profile.password === password);
export const profileStatusSelector = (state) => state.profile.status;
