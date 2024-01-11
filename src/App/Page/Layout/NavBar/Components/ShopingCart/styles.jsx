import styled from 'styled-components';
import { color } from '../../Estilos';

export const Contenedor = styled.button`
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	padding: 10px;
	text-decoration: none;
	transition: 0.5s ease;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	color: black;
	background: none;
	border: 0px;
	border-radius: 60%;

	&:hover {
		color: ${color};
		background-color: #052604;
		border-radius: 20%;
		filter: drop-shadow(10px 10px 50px #132713);
	}
	& > span {
		margin-left: 10px;
		margin-bottom: 0px;
	}
`;
