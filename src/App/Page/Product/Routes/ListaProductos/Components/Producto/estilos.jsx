import styled, { keyframes } from 'styled-components';

const Deslizar = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50px);
  }
`;

const VolverNormalidad = keyframes`
  0% {
    transform: scale(1.1);
    border: 3px solid black;
    z-index: 2;
    margin: 6px;
  }
  100% {
    transform: scale(1);
    border: 1px solid black;
    z-index: 1;
    margin: 0;
  }
`;

const Appear = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Contenedor = styled.div`
	background-color: white;
	width: 200px;
  height: 335px;
	display: grid;
	align-content: center;
	justify-items: center;
	gap: 10px;
	padding: 0.4em 2em;
	border-radius: 25px;
	border: 1px solid black;
	transition: transform 0.25s ease-in-out, border 0.25s ease-in-out;
	position: relative;
	z-index: 1;
	animation: ${VolverNormalidad} 1s ease-in-out;

	&:hover {
		transform: scale(1.1);
		border: 3px solid black;
		z-index: 2;
		margin: 6px;
		& > small {
			display: flex;
			animation: ${Appear} 0.6s ease forwards;
		}
		& > a {
			& > img {
				position: relative;
				animation: ${Deslizar} 0.2s linear both;
				display: flex;
				z-index: 3;
			}
		}
	}

	& > p {
		margin: 0;
		border-bottom: 1px solid black;
		font-family: Arial, Helvetica, sans-serif;
		display: flex;
    flex-direction: row;
    align-items: center;
	}

	& > a {
		display: contents;
		text-decoration: none;
		color: black;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		text-decoration: none;
		transition: color 0.3s ease, filter 0.3s ease;
		cursor: pointer;
		border-bottom: 1px solid black;
		&:hover {
			color: #033203;
			filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 8.5));
		}
		& > p {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			width: 100%;
		}
		& > img {
			width: 100px;
			height: 100px;
			&:hover {
				filter: drop-shadow(8px 8px 20px rgba(0, 0, 0, 8.5));
			}
		}
	}
`;

export const Etiqueta = styled.small`
	background-color: white;
	position: absolute;
	left: 197px;
	top: 20px;
	background-size: 200px;
	width: clamp(50px, 100px, 15vw);
	height: 85%;
	display: none;
	border-radius: 0px 30px 30px 0px;
	border: 3px solid black;
	padding: 0.2rem;
	animation: ${Appear} 0.6s ease forwards;
	overflow: overlay;
	z-index: 3;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Anchor = styled.a``;
