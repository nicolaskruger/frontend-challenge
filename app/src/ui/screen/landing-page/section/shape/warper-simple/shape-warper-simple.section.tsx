import { FC } from "react";
import styled from "styled-components";
import { Shape1Img, Shape2Img } from "../../../../../../assets";
import { SHAPE_HEIGHT } from "../simple/shape-simple.section";

const SWSDiv = styled.div`
    position: relative;
    overflow: visible;
    display: flex;
    justify-content: center;
    height: ${SHAPE_HEIGHT};
`;
const ShapeDarkDiv = styled.div`
    position: absolute;
    top: 135px;
    left: -115px;
`;

const ShapeWarperSimple: FC = () => {
    return (
        <SWSDiv>
            <Shape1Img />
            <ShapeDarkDiv>
                <Shape2Img />
            </ShapeDarkDiv>
        </SWSDiv>
    )
}

export { ShapeWarperSimple }