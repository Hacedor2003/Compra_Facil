import styled from 'styled-components';
import './estilos.css';

const Contenedor = styled.div`
	width: 100%;
	height: 80vh;
	& > div {
		position: absolute;
		left: 50%;
		top: 50%;
	}
`;

export const LoaderPage = () => {
	return (
		<Contenedor>
			<div>
				<div className={'loader'}></div>
			</div>
		</Contenedor>
	);
};
