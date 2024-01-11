import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartsByUserID } from '../../../../Data/Store/Features/Carts/CartsSlice';
import { Header } from './Estilos';
import { ProfilePhoto } from './Components/Profile/Index';
import SearchBar from './Components/SearchBar/Index';
import { ShoppingCart } from './Components/ShopingCart';
import { BtnRefresh } from './Components/BtnRefresh';
import { GetDataLogin } from '../../Components/getDataLogin';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ChangeTheme } from './Components/ChangeTheme';

export const NavBar = () => {
	const { local, length } = GetDataLogin();
	const cartUser = useSelector((state) => selectCartsByUserID(state, local?.id || null));
	const [shoppingCart, setShoppingCart] = useState(null);

	useEffect(() => {
		if (local) {
			setShoppingCart(<ShoppingCart itemCount={cartUser ? cartUser.products.length : 0} />);
		}
	}, [local, cartUser]);

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
				{shoppingCart}
				<LinkContainer to={length > 0 ? '/user' : '/login'}>
					<button id='BtnProfile'>
						<ProfilePhoto />
					</button>
				</LinkContainer>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<ChangeTheme />
			</Container>
		</Navbar>
	);
};
