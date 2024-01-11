import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, selectProfileStatus } from '../../../../../../Data/Store/Features/Profile/ProfileSlice';
import { fetchCarts, selectCartsStatus } from '../../../../../../Data/Store/Features/Carts/CartsSlice';
import './Estilos.css';
import { useEffect } from 'react';
import { selectProductStatus } from '../../../../../../Data/Store/Features/Products/ProductSlice';

export const BtnRefresh = () => {
	const dispatch = useDispatch();
	const statusProfile = useSelector(selectProfileStatus);
	const statusCart = useSelector(selectCartsStatus);
	const statusProducts = useSelector(selectProductStatus);

	const handleClick = () => {
		dispatch(fetchProfile());
		dispatch(fetchCarts());
	};

	useEffect(() => {
		let newTitle = '';
		if (statusProducts === 'loading') {
			newTitle = 'Cargando Productos...';
		} else if (statusProfile === 'loading') {
			newTitle = 'Cargando perfiles...';
		} else if (statusCart === 'loading') {
			newTitle = 'Cargando el carrito...';
		} else if (statusProfile === 'succeeded' && statusCart === 'succeeded' && statusProducts === 'succeeded') {
			newTitle = 'Compra Fácil';
		} else if (statusProfile === 'idle' && statusCart === 'idle' && statusProducts === 'idle') {
			newTitle = 'No conexion';
		}
		if (!navigator.onLine) {
			newTitle = 'El navegador no tiene conexion';
		}
		document.title = newTitle || 'Compra Fácil';
	}, [statusProfile, statusCart, statusProducts]);

	return (
		<Button
			id='Btn'
			variant='light'
			onClick={handleClick}>
			Refresh
		</Button>
	);
};
