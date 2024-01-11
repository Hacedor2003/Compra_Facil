import { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Categories from './ComponentsSideBar/Categories';
import Valoracion from '../../Product/Routes/ListaProductos/Components/Producto/Components/Valoracion/Valoracion';
import CheckBoxList from './ComponentsSideBar/CheckBoxList';

const SideBar = ({ selected, setProduct }) => {
	const [listaRespaldo, setListaRespaldo] = useState([]);
	const [valoracion, setValoracion] = useState(0);
	const listaStorage = [50, 100, 500, 800, 1000];
	const listaPrecios = [10, 50, 100, 500, 1000];

	useEffect(() => {
		if (selected) {
			if (valoracion !== 0) {
				setProduct((prop) => {
					setListaRespaldo(prop.slice());
					return prop.filter((itemProp) => itemProp.rating.rate < valoracion);
				});
			}
		} else if (!selected && valoracion === 0 && listaRespaldo.length > 0) {
			setProduct(listaRespaldo);
		}
	}, [selected, valoracion]);

	return (
		<Container style={{ height: '78vh' }}>
			<Row>
				<Accordion style={{ height: '70vh' }}>
					<Col>
						<Accordion.Item eventKey='0'>
							<Accordion.Header>
								<h6>Categorías:</h6>
							</Accordion.Header>
							<Accordion.Body>
								<Categories
									setProduct={setProduct}
									selected={selected}
								/>
							</Accordion.Body>
						</Accordion.Item>
					</Col>
					<Col>
						<Accordion.Item eventKey='1'>
							<Accordion.Header>
								<h6>Precio:</h6>
							</Accordion.Header>
							<Accordion.Body>
								<CheckBoxList
									setProduct={setProduct}
									selected={selected}
									lista={listaPrecios}
									is='Price'
								/>
							</Accordion.Body>
						</Accordion.Item>
					</Col>
					<Col>
						<Accordion.Item eventKey='2'>
							<Accordion.Header>
								<h6>Valoración:</h6>
							</Accordion.Header>
							<Accordion.Body>
								<Valoracion
									rating={valoracion}
									setRating={setValoracion}
								/>
							</Accordion.Body>
						</Accordion.Item>
					</Col>
					<Col>
						<Accordion.Item eventKey='3'>
							<Accordion.Header>
								<h6>Cantidad en Tienda:</h6>
							</Accordion.Header>
							<Accordion.Body>
								<CheckBoxList
									setProduct={setProduct}
									selected={selected}
									lista={listaStorage}
									is='Storage'
								/>
							</Accordion.Body>
						</Accordion.Item>
					</Col>
				</Accordion>
			</Row>
		</Container>
	);
};

SideBar.propTypes = {
	selected: PropTypes.bool.isRequired,
	setProduct: PropTypes.func.isRequired,
};

export default SideBar;
