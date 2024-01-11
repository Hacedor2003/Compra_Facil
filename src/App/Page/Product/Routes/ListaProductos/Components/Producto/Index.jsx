import { Contenedor, Etiqueta } from './estilos';

import { Link } from 'react-router-dom';
import { BtnAnadirAlCarrito } from '../../../../../Components/BtnAnadirAlCarrito';
import PropTypes from 'prop-types';
import Valoracion from './Components/Valoracion/Valoracion';
import { useState } from 'react';

export default function Producto({ producto, Mostrar }) {
	const [etiquetaWatch, setEtiquetaWatch] = useState(false);
	return (
		<Contenedor>
			<Link to={`/product/${producto.id}`}>
				<img src={producto.image} />
				<p>{producto.title}</p>
			</Link>
			<Etiqueta display={etiquetaWatch}>{producto.description}</Etiqueta>
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
			{Mostrar ? (
				<Valoracion
					rating={producto.rating.rate}
					setRating={null}
				/>
			) : (
				''
			)}
			<button
				style={{ display: 'contents' }}
				onClick={() => setEtiquetaWatch((prop) => !prop)}>
				Descripcion
			</button>
		</Contenedor>
	);
}

Producto.propTypes = {
	producto: PropTypes.object.isRequired,
	Mostrar: PropTypes.bool.isRequired,
};
