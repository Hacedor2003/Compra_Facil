import PropTypes from 'prop-types';
import { ContenedorSubPrecio } from '../../Product/Routes/ProductPage/Estilos';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantityProduct, selectCart } from '../../../../Data/Store/Features/Carts/CartsSlice';

export const BtnComparar = ({ id = 1 }) => {
	const dispatch = useDispatch();
	const cart = useSelector(selectCart);
	const cantidad = cart[0]?.products.quantity || 0;

	const restar = { id: Number(id), quantity: Math.max(cantidad - 1, 0) };
	const sumar = { id: Number(id), quantity: cantidad + 1 };

	return (
		<ContenedorSubPrecio>
			<button
				disabled={cantidad > 0 ? false : true}
				onClick={() => dispatch(changeQuantityProduct(restar))}>
				{'<'}
			</button>
			<p>{cantidad === 0 ? 'Añadir' : cantidad}</p>
			<button onClick={() => dispatch(changeQuantityProduct(sumar))}>{'>'}</button>
		</ContenedorSubPrecio>
	);
};

BtnComparar.propTypes = {
	id: PropTypes.number.isRequired,
};
