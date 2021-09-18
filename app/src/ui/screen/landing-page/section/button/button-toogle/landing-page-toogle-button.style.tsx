import styled from "styled-components";
import { COLOR } from "../../../../../../constants";
import { LandingPageBaseButton } from "../button-search/landing-page-serach-button.section";

const LandingPageCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    border-radius: 50%;
`;

const LandingPageCircleActive = styled(LandingPageCircle)`
    background: ${COLOR.BUTTON_BACK_GROUND};
`;

const LandingPageCircleDisactive = styled(LandingPageCircle)`
    background: #A68EEF;
`;

const LandingPageToogleActive = styled(LandingPageBaseButton)`
    background: #7955E8;
    border: 1px solid #A68EEF;
    box-sizing: border-box;
`;
const LandingPageToogleDisactive = styled(LandingPageBaseButton)`
    background: rgba(121, 85, 232, 0.3);
`;
export { LandingPageToogleActive, LandingPageToogleDisactive, LandingPageCircleActive, LandingPageCircleDisactive }