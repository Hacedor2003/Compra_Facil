import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductos, selectProductById, selectProductStatus } from '../../../../Data/Store/Features/Products/ProductSlice';

export const useSearchProductsByID = (productId) => {
	const [Data, setdata] = useState([]);
	const prodStatus = useSelector(selectProductStatus);
	const prodID = useSelector((state) => selectProductById(state, productId));

	const dispatch = useDispatch();

	useEffect(() => {
		if (prodStatus === 'idle') {
			dispatch(fetchProductos());
		}
	}, [prodStatus, dispatch]);

	useEffect(() => {
		if (prodStatus === 'succeeded' && prodID) {
			setdata(prodID);
		}
	}, [prodStatus, prodID]);

	return Data;
};
