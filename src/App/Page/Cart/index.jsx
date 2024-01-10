import { useDispatch, useSelector } from 'react-redux';
import {  selectCartsError, selectCartsStatus } from '../../../Data/Store/Features/Carts/CartsSlice';
import { Contenedor, ContenedorBtnComprar } from './estilos';
import Producto from '../Product/Routes/ListaProductos/Components/Producto/Index';
import { useContext, useEffect, useState } from 'react';
import { LoaderPage } from '../LoaderPage/LoaderPage';
import { BotonComprar } from '../Components/BotonComprar/Index';
import DataContext from '../../../Data/Context/Context';
import { useCartData } from '../../../Data/Context/GetContext';
import { ShopingPage } from '../ShopingPage/Index';
import { Product } from './Components/Products';

export const Cart = () => {
	const { profile } = useContext(DataContext);
	const [dataCarts, setDataCarts] = useState(null);
	const cartUser = useCartData(profile.data?.id || null);
	const [watch, setWatch] = useState(true);
	const error = useSelector(selectCartsError);
	const [cart, setCart] = useState([]);
	const dispatch = useDispatch();

	let content = 'Esto es un texto predeterminado';

	useEffect(() => {
		if (!profile.isLocal) {
			if (cartUser.status === 'succeeded' && cartUser.data) {
				setDataCarts(cartUser.data);
			}
		} else if (profile.isLocal && cartUser.data?.length > 0) {
			setDataCarts(cartUser.data);
		}
	}, [profile]);

	useEffect(() => {
		if (dataCarts && dataCarts.length > 0) {
			setCart(dataCarts);
		}
	}, [dataCarts]);

	switch (cartUser.status) {
		case 'idle':
			{
				content = 'No está cargando';
			}
			break;
		case 'loading':
			{
				content = <LoaderPage />;
			}
			break;
		case 'succeeded':
			{
				if (Array.isArray(cart)) {
					content =
						cart.length > 0
							? cart.map((prod, index) =>
									prod.products.map((item) => (
										<li key={index}><Product productId={item.productId} quantity={item.quantity} Mostrar={false} />{' '}</li>
									))
							  )
							: '';
				}
			}
			break;
		case 'failed':
			{
				content = <>{error}</>;
			}
			break;
		default:
			{
				content = 'Algo por defecto';
			}
			break;
	}
	const resultado = (
		<>
			<Contenedor id='Contenedor-Content-Cart'>{content}</Contenedor>
			<BotonComprar setWatch={setWatch} />
			<ContenedorBtnComprar
				id='ContenedorRecibo'
				display={watch}>
				<ShopingPage
					cart={cart}
					setWatch={setWatch}
				/>
			</ContenedorBtnComprar>
		</>
	);
	return cart.length > 0 ? resultado : <p>El Carrito esta Vacio</p>;
};
