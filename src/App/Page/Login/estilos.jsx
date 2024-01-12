import styled, { keyframes } from "styled-components";
import { DisplayFlex } from "../Product/Routes/ProductPage/Estilos";

const animacionAparecer = keyframes`
	100%{
		box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.75);
	}
	50%{
		box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.75);
	}
	0%{
		box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.75);
	}
`;
const animacionSombra = keyframes`
		0%{
		box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.75);
	}
	50%{
		box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.75);
	}
	100%{
		box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.75);
	}
`;
export const ContenedorLetras = styled.article`
    display: flex;

    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    & > p {
        margin-left: 10px;
        width: fit-content;
    }
`;

export const ContenedorDerecho = styled(DisplayFlex)`
    justify-content: space-around;
    z-index: 1;
    margin: 10px;
    border: 2px solid black;
    border-radius: 20px;

    &:hover {
        box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.75);
        animation: ${animacionSombra} 0.25s both;
        ${ContenedorLetras} {
            text-decoration: underline;
        }
    }
    & {
        animation: ${animacionAparecer} 0.25s both;
    }
    & > div {
        width: fit-content;
        height: 30%;
        display: contents;
        & > div {
            flex-direction: column;
            align-items: center;
            & > input {
                margin: 3px;
                width: 100%;
                border: 1px solid black;
                padding: 2px;
                border-radius: 5px;
                &::placeholder {
                    color: black;
                }
                &:active {
                    border: 1px solid red;
                    box-shadow: none;
                }
            }
        }
    }
    & p {
        font-family: "Courier New", Courier, monospace;
        font-size: 30px;
        text-transform: uppercase;
    }
`;
export const ContenedorIsquierdo = styled.div`
    display: ${(props) => (props.display ? "flex" : "none")};
    opacity: ${(props) => (props.display ? "100%" : "0%")};
    flex-direction: column;
    align-items: center;
    height: fit-content;
    z-index: 1;
    margin: 10px;
    border: 2px solid black;
    animation: ${animacionAparecer} 0.25s both;

    & > div {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    & > article {
        margin-left: 5px;
        align-self: baseline;
        & p {
            font-size: 18px;
        }
    }

    &:hover {
        box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.75);
        animation: ${animacionSombra} 0.25s both;
    }
`;
export const Contenedor = styled.div`
    display: grid;
    grid-template-columns: ${(props) => (props.display ? "1fr 1fr" : "1fr")};
    height: 79vh;
    @media screen and (min-height: 667px) and (max-height: 1200px) and (max-width: 1200px) {
        & {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
`;

export const Letras = styled.p`
    font-family: "Courier New", Courier, monospace;
    font-size: 30px;
`;
export const LetrasHint = styled.p`
    font-family: Arial, Helvetica, sans-serif;
`;

export const ContenedorSignUp = styled.div`
    display: ${(props) => (props.display ? "none" : "flex")};
`;
export const ContenedorLogin = styled.div`
    display: ${(props) => (props.display ? "flex" : "none")};
`;

export const BtnLogin = styled.button`
    border: 1px solid black;
    padding: 4px 10px;
    cursor: pointer;
    transition: 0.25s ease;
    &:hover {
    }
`;
export const BtnSwitch = styled.button`
    border: 1px solid black;
    border-radius: 30px;
    padding: 10px;
    cursor: pointer;
    transition: 0.25s ease;

    &:hover {
    }
`;
