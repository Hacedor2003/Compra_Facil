import styled from 'styled-components';
import { color } from '../../../Layout/NavBar/Estilos';

export const Contenedor = styled.div`
	height: 72vh;
	width: 100%;
	background-color: ${color};
	display: grid;
	@media screen and (min-width: 412px) {
		width: fit-content;
		height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
`;
