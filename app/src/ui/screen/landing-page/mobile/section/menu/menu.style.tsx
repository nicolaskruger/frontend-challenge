import styled from "styled-components";
import { COLOR } from "../../../../../../constants";
import { SlideScreenComponent } from "../../../../../components";


const LandingPageMenuDiv = styled(SlideScreenComponent)`
    background-color: ${COLOR.BACKGROUND_FOOTER};
`;

const LandingPageMenuHeader = styled.header`
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
`;

const LandingPageMenuMain = styled.main`
    display: flex;
    flex-direction: column;
    padding-top: 150px;

    gap: 30px;
`;

const LandignPageMenuLink = styled.p`
    text-align: center;
    cursor: pointer;
`;

export { LandingPageMenuDiv, LandingPageMenuHeader, LandingPageMenuMain, LandignPageMenuLink }