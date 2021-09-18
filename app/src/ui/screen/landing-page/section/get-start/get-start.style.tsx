import styled from "styled-components";
import { COLOR } from "../../../../../constants";
import { toPx } from "../../../../../util";


const SIZE = 45;

const OF_SET = SIZE / 2;

const SIZE_PX = toPx(SIZE);

const OF_SET_PX = `-${toPx(OF_SET)}`;

const GetStartCloseButton = styled.button`
    position: absolute;
    background: ${COLOR.GET_START_CLOSE_BUTTON};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: none;
    margin: none;
    right: ${OF_SET_PX};
    top: ${OF_SET_PX};
    width: ${SIZE_PX};
    height: ${SIZE_PX};
    border-radius: 50%;
    cursor: pointer;
`;

const SIZE_DIV = 400;

const SIZE_DIV_PX = toPx(SIZE_DIV);

const GetStartSubDiv = styled.div`
    position: relative;
    background: #6A40E4;
    display: flex;
    flex-direction: column;
    width: ${SIZE_DIV_PX};
    height: ${SIZE_DIV_PX};
    border-radius: 4px;
    padding: 50px;
`;


const GetStartTitlePrincipal = styled.h1`
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 34px;
`;

const GetStartTitleSecundary = styled.h2`
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #ffed9f;
    font-size: 34px;
`;


export { GetStartSubDiv, GetStartCloseButton, GetStartTitlePrincipal, GetStartTitleSecundary }