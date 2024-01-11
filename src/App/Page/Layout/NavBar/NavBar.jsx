import { Header } from './Estilos';
import { ProfilePhoto } from './Components/Profile/Index';
import SearchBar from './Components/SearchBar/Index';
import { ShoppingCart } from './Components/ShopingCart';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import './Estilos.css';
import { BtnRefresh } from './Components/BtnRefresh';
import { GetDataLogin } from '../../Components/getDataLogin';
import { useSelector } from 'react-redux';
import { selectCartsByUserID } from '../../../../Data/Store/Features/Carts/CartsSlice';

export const NavBar = () => {
	const { local, lenght } = GetDataLogin();
	const cartUser = useSelector((state) => selectCartsByUserID(state, local?.id || null));

	return (
		<Navbar
			expand='lg'
			className='bg-body-tertiary'>
			<Container fluid>
				<LinkContainer to='/'>
					<Header className='header'>Compra Fácil</Header>
				</LinkContainer>
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
				<ShoppingCart itemCount={cartUser ? cartUser.products.length : 0} />
				<LinkContainer to={lenght > 0 ? '/user' : '/login'}>
					<button id='BtnProfile'>
						<ProfilePhoto />
					</button>
				</LinkContainer>
				<Navbar.Toggle aria-controls='navbarScroll' />
			</Container>
		</Navbar>
	);
};
