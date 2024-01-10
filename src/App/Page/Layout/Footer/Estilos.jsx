import styled from 'styled-components';
import { color } from '../NavBar/Estilos';
import { DisplayFlex } from '../../Product/Routes/ProductPage/Estilos';

export const Contenedor = styled(DisplayFlex)`
	height: fit-content;
	width: 100%;
	background-color: ${color};
	color: black;
	position: relative;
	z-index: 1;
`;
