import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProfileById, fetchProfile, profileStatusSelector } from '../../Data/Store/Features/Profile/ProfileSlice';
import { selectCartsStatus, fetchCarts, selectCartsByUserID } from '../Store/Features/Carts/CartsSlice';

export const useProfileData = () => {
	let profileStatus = useSelector(profileStatusSelector);
	const profile = useSelector((state) => selectProfileById(state, 2));
	const dispatch = useDispatch();

	const [localProfileData, setLocalProfileData] = useState(null);

	useEffect(() => {
		const localData = {
			username: localStorage.getItem('username'),
			password: localStorage.getItem('password'),
			email: localStorage.getItem('email'),
			id: localStorage.getItem('id'),
			photo: localStorage.getItem('photo'),
			name: {
				firstname: localStorage.getItem('name'),
				lastname: localStorage.getItem('lastname'),
			},
		};

		if (localData.username) {
			setLocalProfileData(localData);
			profileStatus = 'succeeded';
		}
	}, [profileStatus, dispatch]);

	return {
		status: profileStatus,
		data: localProfileData || profile,
		isLocal: !!localProfileData,
	};
};

export const useCartData = (userId) => {
	const cartStatus = useSelector(selectCartsStatus);
	const dispatch = useDispatch();
	const cartData = useSelector((state) => selectCartsByUserID(state, userId));
	const localCartData = JSON.parse(localStorage.getItem('cart'));

	useEffect(() => {
		if (!userId && cartStatus === 'idle') {
			dispatch(fetchCarts());
		}
	}, [userId, cartStatus, dispatch]);

	return {
		status: cartStatus,
		data: localCartData || cartData,
	};
};
