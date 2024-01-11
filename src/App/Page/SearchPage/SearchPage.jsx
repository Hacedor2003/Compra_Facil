import { useParams } from 'react-router-dom';
import { fetchProductos, selectProductByName, selectProductError, selectProductStatus } from '../../../Data/Store/Features/Products/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderPage } from '../LoaderPage/LoaderPage';
import { useEffect, useState } from 'react';
import { Lista, ListaDesordenada } from './estilos';
import Producto from '../Product/Routes/ListaProductos/Components/Producto/Index';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import SideBar from './Components/SideBar';

export const SearchPage = () => {
	const { nameProduct } = useParams();
	const productStatus = useSelector(selectProductStatus);
	const productError = useSelector(selectProductError);
	const productData = useSelector((state) => selectProductByName(state, nameProduct));

	const [product, setProduct] = useState(productData);
	const dispatch = useDispatch();
	const [selected, setSelected] = useState(false);

	useEffect(() => {
		if (productStatus === 'idle') {
			dispatch(fetchProductos());
		}
	}, [dispatch, productStatus]);

	let content;

	switch (productStatus) {
		case 'idle':
			{
				content = 'No Esta Cargando';
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
							<Col xs={3}>
								<Accordion
									style={{ height: '70vh' }}
									onClick={() => setSelected((prop) => !prop)}>
									<Accordion.Item eventKey='0'>
										<Accordion.Header>
											{' '}
											<h6>Filtros:</h6>{' '}
										</Accordion.Header>
										<Accordion.Body>
											<SideBar
												setProduct={setProduct}
												selected={selected}
											/>
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</Col>
							<Col>
								<ListaDesordenada>
									{product.length > 0 ? (
										product.map((producto) => (
											<Lista key={producto.id}>
												<Producto
													producto={producto}
													Mostrar={true}
												/>
											</Lista>
										))
									) : (
										<h2>No se encontro nada</h2>
									)}
								</ListaDesordenada>
							</Col>
						</Row>
					</Container>
				);
			}
			break;
		case 'failed':
			{
				content = 'error: ' + productError;
			}
			break;
		default:
			content = 'Algo por defecto';
			break;
	}
	return content;
};
