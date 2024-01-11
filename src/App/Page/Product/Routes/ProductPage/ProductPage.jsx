import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import { fetchProductos, selectProductById, selectProductStatus } from '../../../../../Data/Store/Features/Products/ProductSlice';
import { BtnComparar } from '../../../Components/BotonCantidad';
import { BtnAnadirAlCarrito } from '../../../Components/BtnAnadirAlCarrito';
import { Anchor, ContenedorTitulo, ContenedorPrecio, ContenedorCaracteristicas, ContenedorAside } from './Estilos';
import './Estilos.css';
import { LoaderPage } from '../../../LoaderPage/LoaderPage';
import Valoracion from '../ListaProductos/Components/Producto/Components/Valoracion/Valoracion';

export const ProductPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const status = useSelector(selectProductStatus);
	const product = useSelector((state) => selectProductById(state, Number(id)));
	const cantidadAnadir = 0
	if (status === 'idle') {
		dispatch(fetchProductos());
	}

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchProductos());
		}
	}, [status, dispatch]);

	let content = undefined;

	switch (status) {
		case 'idle':
			{
				content = <p>No esta cargando</p>;
			}
			break;
		case 'loading':
			{
				content = <LoaderPage />;
			}
			break;
		case 'succeeded':
			{
				content = (
					<Container>
						<Row>
							<Col id='Columna'>
								<img
									src={product.image}
									alt={product.title}
								/>
							</Col>
							<Col id='Columna'>
								<ContenedorTitulo>
									<Anchor>{product.title}</Anchor>
									<p>Autor: Bryan Espinosa</p>
									<Valoracion rating={product.rating.rate} setRating={null} />
								</ContenedorTitulo>
								<ContenedorPrecio>
									<p>---- Precio: {product.price}$ ----</p>
									<p>Cantidad en Stock: {product.rating.count}</p>
									<BtnComparar id={id} />
								</ContenedorPrecio>
								<ContenedorCaracteristicas>
									<p>Caracteristicas:</p>
									<p>{product.description}</p>
								</ContenedorCaracteristicas>

								<ContenedorAside>
									<p>Precio: {product.price * cantidadAnadir}$</p>
									<BtnAnadirAlCarrito watch={true} />
								</ContenedorAside>
							</Col>
						</Row>
					</Container>
				);
			}
			break;
		default:
			content = <p>Algo por defecto </p>;
			break;
	}

	return content;
};
