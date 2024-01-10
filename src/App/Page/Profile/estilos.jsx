import styled from 'styled-components';

export const Contenedor = styled.div`
	display: grid;
	height: 85vh;
	width: 100%;
	justify-content: center;
	justify-items: center;
	grid-template-columns: 1fr 1fr;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const ContenedorInfoPrimary = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: overlay;
	width: 100%;
	&::-webkit-scrollbar {
		display: none;
	}
	& > img {
		width: 200px;
		height: 200px;
	}
`;
export const ContenedorInfoSecondary = styled.div`
	display: flex;
	justify-items: center;
	flex-direction: column;
	&::-webkit-scrollbar {
		display: none;
	}
	@media screen and (min-height: 667px) and (max-height:1200px) {
  &{
    height: 80vh;
  }
}
`;

export const ContenedorBtn = styled.div`
	display: flex;
	&::-webkit-scrollbar {
		display: none;
	}
`;
