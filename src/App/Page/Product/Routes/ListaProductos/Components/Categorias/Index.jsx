import Producto from '../Producto/Index';
import { Lista } from './Estilos';
import PropTypes from 'prop-types';

export const Categoria = ({ producto }) => {
	return (
		<>
			{
				<Lista>
					<Producto
						producto={producto}
						Mostrar={true}
					/>
				</Lista>
			}
		</>
	);
};

Categoria.propTypes = {
	producto: PropTypes.object.isRequired,
};
