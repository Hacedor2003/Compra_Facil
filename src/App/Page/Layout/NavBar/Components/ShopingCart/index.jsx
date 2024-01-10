import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Contenedor } from './styles';
import PropTypes from 'prop-types';

export const ShoppingCart = ({ itemCount = 0 }) => {
	const navigate = useNavigate();
	return (
		<Contenedor
			onClick={() => {
				navigate('/MiCarrito');
			}}>
			<FaShoppingCart />
			<span>{itemCount}</span>
		</Contenedor>
	);
};

ShoppingCart.propTypes = {
	itemCount: PropTypes.number.isRequired,
};
