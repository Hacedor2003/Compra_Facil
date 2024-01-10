import PropTypes from 'prop-types';
import { Contenededor } from './styles';
import { Link } from 'react-router-dom';
import { useSearchProductsByID } from '../../../Components/SearchProductByID/SearchProductsByID';
import { BtnComparar } from '../../../Components/BotonCantidad';

export const Product = ({ productId, quantity, Mostrar }) => {
	const Data = useSearchProductsByID(productId);
	return (
		<Contenededor>
			<img src={Data.image} />
			<Link to={`/product/${Data.id}`}>
				<p>{Data.title}</p>
			</Link>
			<p>Precio: {Data.price}$</p>
			<p>Cantidad: {quantity}</p>
			{Mostrar ? <BtnComparar id={productId} /> : ''}
		</Contenededor>
	);
};

Product.propTypes = {
	productId: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	Mostrar: PropTypes.bool.isRequired,
};
