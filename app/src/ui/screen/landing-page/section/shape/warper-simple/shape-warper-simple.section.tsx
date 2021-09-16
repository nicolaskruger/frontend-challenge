import { FC } from "react";
import styled from "styled-components";
import { ShapeDark } from "../dark/shape-dark.section";
import { ShapeLigth } from "../ligth/shape-ligth.section";
import { SHAPE_HEIGHT } from "../simple/shape-simple.section";

const SWSDiv = styled.div`
    position: relative;
    overflow: hidden;
    height: ${SHAPE_HEIGHT};
`;


const ShapeWarperSimple: FC = () => {
    return (
        <SWSDiv>
            <ShapeLigth />
            <ShapeDark />
        </SWSDiv>
    )
}

export { ShapeWarperSimple }