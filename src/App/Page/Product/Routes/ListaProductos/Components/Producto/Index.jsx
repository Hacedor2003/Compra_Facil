import { Contenedor, Etiqueta } from './estilos';

import { Link } from 'react-router-dom';
import { BtnAnadirAlCarrito } from '../../../../../Components/BtnAnadirAlCarrito';
import PropTypes from 'prop-types';
import Valoracion from './Components/Valoracion/Valoracion';

export default function Producto({ producto, Mostrar }) {
	return (
		<Contenedor>
			<Link to={`/product/${producto.id}`}>
				<img src={producto.image} />
				<p>{producto.title}</p>
			</Link>
			<Etiqueta>{producto.description}</Etiqueta>
			<p>
				Precio:{producto.price}$
				{Mostrar ? (
					<BtnAnadirAlCarrito
						rating={producto.rating.count}
						producto={producto}
						watch={false}
					/>
				) : (
					''
				)}
			</p>
			{Mostrar ? <Valoracion rating={producto.rating.rate} setRating={null}  /> : ''}
		</Contenedor>
	);
}

Producto.propTypes = {
	producto: PropTypes.object.isRequired,
	Mostrar: PropTypes.bool.isRequired,
};
