import { Container } from 'react-bootstrap';
import { Cart } from '../../../Cart/index';
import { Contenedor } from './estilos';

export const MiCarrito = () => {
	return (
		<Contenedor id='Contendedor-PageMiCarrito'>
			<Container fluid={true}>
			<Cart />
			</Container>
		</Contenedor>
	);
}
