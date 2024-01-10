import styled from 'styled-components';

export const DisplayFlex = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Contenedor = styled.div`
	display: grid;
	grid-template-columns: 40% 40% 25%;
	justify-items: center;
	align-items: center;

	& > img {
		width: 50%;
		height: max-content;
	}
`;

export const Main = styled(DisplayFlex)`
`;

export const ContenedorTitulo = styled.article`
	height: fit-content;
	width: fit-content;
	& > p {
		font-family: Arial, Helvetica, sans-serif;
	}
`;

export const ContenedorPrecio = styled(DisplayFlex)`
	height: fit-content;
	width: fit-content;
	& > p {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		margin: 20px;
	}
`;

export const ContenedorSubPrecio = styled.div`
	display: flex;
	flex-direction: row;
	& > p {
		margin-left: 2px;
		margin-right: 2px;
	}
	& > button {
		height: fit-content;
		border: none;
		background:transparent;
		cursor: pointer;
	}
`;

export const ContenedorCaracteristicas = styled.article`
	height: fit-content;
	width: fit-content;
	font-family: Arial, Helvetica, sans-serif;
`;

export const ContenedorAside = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
export const Anchor = styled.p``;
export const Etiqueta = styled.p``;
