import PropTypes from 'prop-types';
import { Contenededor } from './styles';
import { Link } from 'react-router-dom';
import { BtnComparar } from '../../../Components/BotonCantidad';
import { useSelector } from 'react-redux';
import { selectProductById } from '../../../../../Data/Store/Features/Products/ProductSlice';

export const Product = ({ productId, quantity, Mostrar }) => {
	const data = useSelector((state) => selectProductById(state, productId));
	return (
		<Contenededor>
			<img src={data.image} />
			<Link to={`/product/${data.id}`}>
				<p>{data.title}</p>
			</Link>
			<p>Precio: {data.price}$</p>
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
