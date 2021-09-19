import styled from "styled-components";

type SlideScreenProps = {
    open: boolean
};

const SlideScreenComponent = styled.div<SlideScreenProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    transition: 0.5s;
    transform:${props => props.open ? `translateX(0px)` : `translateX(-100%)`};
`

export { SlideScreenComponent }