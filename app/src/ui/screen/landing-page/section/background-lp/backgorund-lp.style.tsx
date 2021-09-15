import styled from "styled-components";
import { COLOR } from "../../../../../constants";

const { BACKGROUND_GRADIENT, BACKGROUND_FOOTER } = COLOR;

const BgLPDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const BgLPGradientStyle = styled.div`
    background: ${BACKGROUND_GRADIENT};
    flex-grow: 10;
`;

const BgLPFooter = styled.div`
    background: ${BACKGROUND_FOOTER};
    flex-grow: 1;
`;

export { BgLPGradientStyle, BgLPDiv, BgLPFooter }