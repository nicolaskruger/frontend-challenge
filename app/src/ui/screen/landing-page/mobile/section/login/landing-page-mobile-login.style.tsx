import styled from "styled-components";
import { COLOR } from "../../../../../../constants";
import { SlideScreenComponent } from "../../../../../components";
import { LandingPageTitlePrincipalBase } from "../../../section";

const LandingPageMobileLoginDiv = styled(SlideScreenComponent)`
    background-color: ${COLOR.BACK_GROUND_POP_UP};
`;
const LandingPageMobileLoginTitlePrincipa = styled(LandingPageTitlePrincipalBase)`
    font-size: 28px;
`;

export { LandingPageMobileLoginDiv }