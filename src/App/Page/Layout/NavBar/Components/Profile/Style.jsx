import styled from 'styled-components';
import { color } from '../../Estilos';

export const Anchor = styled.button`
	height: 40px;
	width: 40px;
	background-color: rgba(232, 234, 237, 0.1);
	display: contents;
	& > img {
		width: 35px;
		border-radius: 50%;
		margin: 10px;
	}
	overflow: hidden;
	cursor: pointer;
	visibility: visible;
	border-radius: 50%;
	box-sizing: border-box;
`;

export const AnchorLink = styled.a`
	padding: 10px;
	text-decoration: none;
	transition: 0.5s ease;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	color: black;
	background-color: ${color};
	border: 0px;
	border-radius: 60%;

	&:hover {
		color: white;
		background-color: #052604;
		border-radius: 20%;
		filter: drop-shadow(10px 10px 50px #132713);
	}
`;
