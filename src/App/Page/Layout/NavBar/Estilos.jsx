import styled from 'styled-components';

export const color = '#ffffff';

export const Contenedor = styled.header`
	width: 100%;
	background-color: ${color};
	display: flex;
	flex-direction: row;
	align-items: center;
	&& {
		margin: 20px;
	}
`;

export const Nav = styled.nav`
	& > a {
		padding: 10px;
		text-decoration: none;
		transition: 0.5s ease;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		color: black;
		background-color: ${color};
		border: 0px;
		border-radius: 60%;

		&:hover {
			color: ${color};
			background-color: #052604;
			border-radius: 20%;
			filter: drop-shadow(10px 10px 50px #132713);
		}
	}
`;
export const Anchor = styled.a`
	padding: 5px;
	text-decoration: none;
	transition: 0.5s ease;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	color: black;

	&:hover {
		color: ${color};
		text-decoration: underline;
	}
`;
export const BarraBusqueda = styled.input``;

export const Header = styled.h1`
	margin: 20px;
`
