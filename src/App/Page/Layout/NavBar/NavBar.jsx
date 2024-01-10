import { Header } from './Estilos';
import { ProfilePhoto } from './Components/Profile/Index';
import SearchBar from './Components/SearchBar/Index';
import { ShoppingCart } from './Components/ShopingCart';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import './Estilos.css';
import { useSelector } from 'react-redux';
import { selectCartById } from '../../../../Data/Store/Features/Carts/CartsSlice';
import { BtnRefresh } from './Components/BtnRefresh';

export const NavBar = () => {
	const cantEnCarrito = useSelector((state) => selectCartById(state, 0));
	return (
		<Navbar
			expand='lg'
			className='bg-body-tertiary'>
			<Container fluid>
				<Header className='header'>Compra Fácil</Header>
				<Nav
					className='me-auto my-2 my-lg-0'
					style={{ maxHeight: '100px' }}
					navbarScroll></Nav>
				<Navbar.Collapse
					style={{ justifyContent: 'space-between' }}
					id='navbarScroll'>
					<LinkContainer to='/'>
						<button id='Btn'>Home</button>
					</LinkContainer>
					<SearchBar />
					<BtnRefresh />
				</Navbar.Collapse>
				<ShoppingCart itemCount={cantEnCarrito ? cantEnCarrito.products.length : 0} />
				<button id='BtnProfile'>
					<ProfilePhoto />
				</button>
				<Navbar.Toggle aria-controls='navbarScroll' />
			</Container>
		</Navbar>
	);
};
