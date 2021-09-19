import styled from "styled-components";
import { COLOR } from "../../../../../../constants";

const LandingPageInpuPasswordDiv = styled.div`
    width: 100%;
    height: 40px;
    background: #7955E8;
    border: 1px solid #A68EEF;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    color: ${COLOR.TEXT};
    ::placeholder{
        color: ${COLOR.TEXT};
    }
`;

const LandingPageInputPasswordInput = styled.input`
    height: 100%;
    margin: 0;
    border: 0;
    background: rgb(0,0,0, 0);
    padding-left: 10px;
    border-radius: 4px;
    flex-grow: 1fr;
    width: 85%;
`;

const LandingPageInputPasswordButton = styled.button`
    background-color: rgb(0,0,0, 0);
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export { LandingPageInpuPasswordDiv, LandingPageInputPasswordInput, LandingPageInputPasswordButton }