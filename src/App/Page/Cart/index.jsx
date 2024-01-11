import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartsByUserID, selectCartsError, selectCartsStatus } from '../../../Data/Store/Features/Carts/CartsSlice';
import { selectAllProducts } from '../../../Data/Store/Features/Products/ProductSlice';
import { Contenedor, ContenedorBtnComprar } from './estilos';
import { LoaderPage } from '../LoaderPage/LoaderPage';
import { BotonComprar } from '../Components/BotonComprar/Index';
import { ShopingPage } from '../ShopingPage/Index';
import { GetDataLogin } from '../Components/getDataLogin';
import Producto from '../Product/Routes/ListaProductos/Components/Producto/Index';

export const Cart = () => {
	const { local } = GetDataLogin();
	const cartStatus = useSelector(selectCartsStatus);
	const cartData = useSelector((state) => selectCartsByUserID(state, local?.id || null));
	const error = useSelector(selectCartsError);
	const allProducts = useSelector(selectAllProducts);

	const [cart, setCart] = useState([]);
	const [watch, setWatch] = useState(false);

	useEffect(() => {
		if (cartStatus === 'succeeded' && cartData) {
			const products = cartData.products.map((item) => allProducts.find((product) => product.id === item.productId));
			setCart(products);
		}
	}, [cartStatus, cartData, allProducts]);

	let content = '';
	switch (cartStatus) {
		case 'idle':
			content = 'No está cargando';
			break;
		case 'loading':
			content = <LoaderPage />;
			break;
		case 'succeeded':
			if (Array.isArray(cart)) {
				content = cart.map((prod) => (
					<Producto key={prod} producto={prod} Mostrar={false} />
				));
			}
			break;
		case 'failed':
			content = <>{error}</>;
			break;
		default:
			content = 'Algo por defecto';
			break;
	}

	const resultado = (
		<>
			<Contenedor id='Contenedor-Content-Cart'>{content}</Contenedor>
			<BotonComprar setWatch={setWatch} />
			<ContenedorBtnComprar
				id='ContenedorRecibo'
				style={{ display: watch ? 'block' : 'none' }}>
				<ShopingPage
					cart={cart}
					setWatch={setWatch}
				/>
			</ContenedorBtnComprar>
		</>
	);

	return cart.length > 0 ? resultado : <p>El Carrito está Vacío</p>;
};
