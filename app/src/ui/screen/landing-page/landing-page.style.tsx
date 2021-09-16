import styled from "styled-components";
import { MAX_WIDTH_NUMBER, MAX_WIDTH_STRING } from "../../../constants";

const LandingPageDivBase = styled.div`
    display: grid;
    grid-template-rows: 1fr;
`;

const cutWidth = `${Math.trunc(MAX_WIDTH_NUMBER / 0.9)}px`;


const LandingPageDiv = styled(LandingPageDivBase)`
    grid-template-columns: 5% 90% 5%;
    @media (min-width: ${cutWidth}){
        grid-template-columns: 1fr ${MAX_WIDTH_STRING} 1fr;
    }
`;


export { LandingPageDiv }