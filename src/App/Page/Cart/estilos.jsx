import styled from 'styled-components';

export const ContenedorCart = styled.div`
	display: flex;
	flex-direction: row;
	overflow: overlay;
	align-items: baseline;
	&::-webkit-scrollbar {
		display: none;
	}
`;
export const Contenedor = styled.div`
	height: 70vh;
	overflow: overlay;
	display: flex;
	z-index: 1;
	overflow: overlay;
	margin-bottom: 55px;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	&&::-webkit-scrollbar {
		display: none;
	}
	& > li {
		list-style: none;
		height: auto;
		width: auto;
		&::-webkit-scrollbar {
			display: none;
		}
	}
	@media screen and (min-height: 667px) and (max-height: 1200px) and (max-width: 1200px) {
		& {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			height: 100%;
		}
	}
`;

export const ContenedorInfoPrimary = styled.div`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Lista = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	list-style: none;
	width: 200px;
	background-color: transparent;
	margin: 10px;
	border: 2px solid black;
	border-radius: 5%;
	&::-webkit-scrollbar {
		display: none;
	}
`;
export const ContenedorBtnComprar = styled.div`
	background-color: white;
	display: ${(props) => (props.display ? 'none' : 'flex')};
	z-index: 2;
	position: absolute;
	top: 52%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50%;
	height: 50%;
	overflow: overlay;
	flex-direction: column;
	justify-content: flex-start;
	border: 2px solid black;
	&::-webkit-scrollbar {
		display: none;
	}
	@media screen and (min-height: 667px) and (max-height: 1200px) and (max-width: 1200px) {
		& {
			height: 80vh;
		}
	}
`;
