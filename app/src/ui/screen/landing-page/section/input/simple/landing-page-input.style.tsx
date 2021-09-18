import styled from "styled-components";
import { COLOR } from "../../../../../../constants";


const LandingPageInputInput = styled.input`
    width: 100%;
    height: 40px;
    background: #7955E8;
    border: 1px solid #A68EEF;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 10px;
    color: ${COLOR.TEXT};
    ::placeholder{
        color: ${COLOR.TEXT};
    }
`;

export { LandingPageInputInput }