import styled from 'styled-components';
import { color } from '../../../Layout/NavBar/Estilos';

export const Contenedor = styled.div`
	height: 72vh;
	width: 100%;
	background-color: ${color};
	display: grid;
	@media screen and (min-width: 412px) {
		width: 100%;
    height: 76vh;
    display: grid;
    align-content: center;
    justify-content: center;
    align-items: center;
	}
`;
