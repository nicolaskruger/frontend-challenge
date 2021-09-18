import styled from "styled-components";

const LandingPageTitlePrincipalBase = styled.h1`
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`;
const LandingPageTitleSecundaryBase = styled.h2`
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #ffed9f;
`;
const LandingPageTitlePrincipal = styled(LandingPageTitlePrincipalBase)`
    font-size: 48px;
`;
const LandingPageTitleSecundario = styled(LandingPageTitleSecundaryBase)`
    font-size: 48px;
`;

export {
    LandingPageTitlePrincipalBase,
    LandingPageTitleSecundaryBase,
    LandingPageTitlePrincipal,
    LandingPageTitleSecundario
}