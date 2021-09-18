import styled from "styled-components";

const MainLandingPageWebDiv = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const MainLandingPageWebForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const MainLandingPageWebTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const MainLandingPageWebTitlePrincipa = styled.h1`
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    font-weight: 400;
`;
const MainLandingPageWebTitleSecundario = styled.h2`
    padding: 0;
    margin: 0;
    font-size: 48px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #ffed9f;
`;

const MainLandingPageWebText = styled.p`
    font-size: 16px;
`;

const MainLandingPageWebInput = styled.input`
    width: 100%;
    height: 56;
    background: #7955E8;
    border: 1px solid #A68EEF;
    box-sizing: border-box;
    border-radius: 4px;
`;

export {
    MainLandingPageWebDiv,
    MainLandingPageWebForm,
    MainLandingPageWebTitleDiv,
    MainLandingPageWebTitlePrincipa,
    MainLandingPageWebTitleSecundario,
    MainLandingPageWebText,
    MainLandingPageWebInput
}