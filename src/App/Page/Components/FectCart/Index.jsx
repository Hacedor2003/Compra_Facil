import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataContext } from '../../../../Data/Context/Context';
import { useCartData } from '../../../../Data/Context/GetContext';
import { fetchCarts, selectCartsStatus } from '../../../../Data/Store/Features/Carts/CartsSlice';

export const useFectCart = () => {
	const { profile } = useContext(DataContext);
	const cartStatus = useSelector(selectCartsStatus);
	const cartUser = useCartData(profile.data?.id || null);
	const [dataCarts, setDataCarts] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (cartStatus === 'idle') {
			return () => {
				dispatch(fetchCarts());
			};
		}
	}, [cartStatus,dispatch]);

	useEffect(() => {
		if (!profile.isLocal) {
			if (cartStatus === 'succeeded') {
				if (cartUser.data) {
					return () => {
						setDataCarts(JSON.parse(cartUser.data));
					};
				}
			}
		} else if (profile.isLocal) {
			if (cartUser.data?.length > 0) {
				return () => {
					setDataCarts(JSON.parse(cartUser.data));
				};
			}
		}
	}, [cartStatus, cartUser, profile]);

	return dataCarts;
};
