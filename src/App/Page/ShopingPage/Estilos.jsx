import styled from 'styled-components';

export const Receipt = styled.div`
	display: flex;
	background-color: #f5f5f5;
	padding: 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	@media screen and (min-height: 667px) and (max-height: 1200px) and (max-width: 1200px) {
		& {
			display: flex;
			height: 100%;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
		}
	}
`;
export const ContenedorReceta = styled.div`
	font-weight: bold;
	margin-top: 10px;
`;
export const Lista = styled.div`
	padding: 0;
	width: 80%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	font-family: 'Courier New', Courier, monospace;
	& span {
		width: 80%;
	}
	& small {
		font-size: medium;
	}
`;

export const ListaPlecas = styled.li`
	display: flex;
	margin-bottom: 10px;
	flex-direction: row;
	align-items: baseline;
	border-bottom: 2px solid black;
	& > span {
		margin: 5px;
	}
`;

export const BtnComprar = styled.button`
	padding: 10px 20px;
	background-color: #4b4b50;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	margin-top: 15px;

	&:hover {
		background-color: #7f858c;
	}
`;

export const ContenedorHeader = styled.header`
	display: flex;
	flex-direction: row-reverse;
	align-items: flex-start;
	& > button {
		border: none;
		cursor: pointer;
		position: absolute;
		left: 90%;
		background-color: transparent;
		padding: 0;
	}
`;
