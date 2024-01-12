import styled, { keyframes } from "styled-components";

const sombrear = keyframes`
  0% {
		filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 8.5));
	}
  100% {
		filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 8.5));
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

export const Contenedor = styled.div`
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
    grid-template-rows: 1fr 1fr 1fr 1fr 20px;

    &:hover {
        transform: scale(1.1);
        border: 3px solid black;
        z-index: 2;
        margin: 6px;
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
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
        text-decoration: none;
        transition: color 0.3s ease, filter 0.3s ease;
        cursor: pointer;
        border-bottom: 1px solid black;
        &:hover {
            filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 8.5));
            & > img {
                animation: ${sombrear} 0.2s linear both;
            }
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

const Appear = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
;`;

const Desappear = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-20px);
  }
;`;

export const Etiqueta = styled.small`
    background-color: black;
    border-radius: 20px;
    color: white;
    width: 100%;
    height: 90%;
    position: ${(props) => (props.display ? "absolute" : "static")};
    display: ${(props) => (props.display ? "block" : "none")};
    overflow: auto;
    animation: ${(props) => (props.display ? Appear : Desappear)} 0.6s ease
        forwards;
    z-index: 3;
    padding: 10px;

    &::-webkit-scrollbar {
        display: none;
    }

    &::after {
        animation: ${Desappear} 0.6s ease forwards;
    }

    &::before {
        animation: ${Desappear} 0.6s ease forwards;
    }
`;

export const Anchor = styled.a``;
