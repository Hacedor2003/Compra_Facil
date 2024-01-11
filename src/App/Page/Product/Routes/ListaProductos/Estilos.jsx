import styled from 'styled-components';

export const Contenedor = styled.div`
	height: 73.5vh;
	width: 100%;
	display: contents;
`;

export const Lista = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	list-style: none;
`;

export const ContenedorLista = styled.div`
	width: 100%;
	overflow: overlay;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	z-index: 1;
	transition: 0.75s ease;
	&::-webkit-scrollbar {
		display: none;
	}
	&:hover {
		& > h2 {
			border-bottom: 2px solid black;
		}
	}
`;
