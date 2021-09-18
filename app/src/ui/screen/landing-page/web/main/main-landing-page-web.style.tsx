import styled from "styled-components";

const MainLandingPageWebDiv = styled.div`
    height: 100%;
    display: flex;
    gap: 30px;
    align-items: center;
`;

const MainLandingPageWebForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 30px;
`;

const MainLandingPageWebTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const MainLandingPageWebText = styled.p`
    font-size: 16px;
`;

const MainLandingPageWebLastDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const MainLandingPageWebLastSubDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

export {
    MainLandingPageWebDiv,
    MainLandingPageWebForm,
    MainLandingPageWebTitleDiv,
    MainLandingPageWebText,
    MainLandingPageWebLastDiv,
    MainLandingPageWebLastSubDiv
}