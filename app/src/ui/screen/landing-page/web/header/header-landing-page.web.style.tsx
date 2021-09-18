import styled from "styled-components";
import { ButtonMainComponent } from "../../../../components/button/button-main/button-main.compoent";

const HeaderLandingPageWebDiv = styled.div`
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HeaderLandingPageWebSubDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

const HeaderLandingPageWebLink = styled.span`
    cursor: pointer;
    font-size: 16px;
`;

const HeaderLandigPageButton = styled(ButtonMainComponent)`
    width: 165px;
    height: 48px;
    box-shadow: 1px 3px 11px -3px rgba(255, 231, 150, 0.45);
`;

export { HeaderLandingPageWebDiv, HeaderLandingPageWebSubDiv, HeaderLandingPageWebLink, HeaderLandigPageButton }