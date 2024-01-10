import { useSelector } from 'react-redux';
import { BtnComprar, ContenedorHeader, ContenedorReceta, ListaPlecas, Receipt } from './Estilos';
import { selectCartsError, selectCartsStatus } from '../../../Data/Store/Features/Carts/CartsSlice';
import { LoaderPage } from '../LoaderPage/LoaderPage';
import PropTypes from 'prop-types';

export const ShopingPage = ({ cart, setWatch }) => {
	const cartStatus = useSelector(selectCartsStatus);
	const error = useSelector(selectCartsError);

	let total = 0;
	let content = 'Esto es un texto predeterminado';

	switch (cartStatus) {
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
					content = (
						<Receipt id='Recibo'>
							<ContenedorHeader>
								<button onClick={() => setWatch((props) => !props)}>❌</button>
								<h2>Seguro que va a comprar?</h2>
							</ContenedorHeader>
							<ol>
								{cart.map((prod, index) => {
									const contentData = (
										<ListaPlecas>
											<span>{prod.products.title}</span>
											<span>{'Cantidad: ' + prod.products.quantity}</span>
											<small>${prod.products.price}</small>
										</ListaPlecas>
									);
									total += prod.products.price;
									return <li key={index}>{contentData}</li>;
								})}
							</ol>
							<ContenedorReceta>Total: ${total}</ContenedorReceta>
							<BtnComprar>Comprar</BtnComprar>
						</Receipt>
					);
				}
			}
			break;
		case 'failed':
			{
				content = <>{error}</>;
			}
			break;
		default:
			content = 'Algo por defecto';
			break;
	}

	return <>{content}</>;
};

ShopingPage.propTypes = {
	cart: PropTypes.array.isRequired,
	setWatch: PropTypes.func.isRequired,
};
