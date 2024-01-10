import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0%, 100% {
    color: rgb(7, 73, 73);
    text-shadow: 0 0 20px rgb(20, 200, 200), 0 0 20px rgb(12, 168, 168), 2px -2px 2px #888888;
  }
  50% {
    color: rgb(20, 200, 200);
    filter:  brightness(150%);
  }
`;
const animateRed = keyframes`
  0%, 100% {
    color: rgb(73, 7, 7);
    text-shadow: 0 0 20px rgb(200, 20, 20), 0 0 20px rgb(168, 12, 12), 2px -2px 2px #722828;
  }
  50% {
    color: rgb(200, 20, 20);
    filter: brightness(150%);
  }
;`;

const Texto = styled.h2`
	position: relative;
	font-size: 6em;
	letter-spacing: 15px;
	color: #12cdcd;
	text-transform: uppercase;
	width: 100%;
	text-align: center;
	-webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
	line-height: 0.7em;
	outline: none;
	animation: ${animate} 1.5s linear infinite;
`;

const SubText = styled(Texto)`
	color: red;
	font-size: 3em;
	animation: ${animateRed} 1.5s linear infinite;
`;

const DIV = styled.div`
	background-color: black;
	width: 100%;
	height: 72vh;
`;

export const NotFound = () => {
	return (
		<DIV>
			<Texto>Not Found</Texto>
			<SubText>Error 404</SubText>
		</DIV>
	);
};
