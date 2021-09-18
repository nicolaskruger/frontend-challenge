import { FC } from "react";
import styled from "styled-components";
import { SHAPE_HEIGHT } from "../simple/shape-simple.section";
import { ShapeWarperSimple } from "../warper-simple/shape-warper-simple.section";


const WSFDiv = styled.div`
    position: fixed;
    top: calc(40vh - ${SHAPE_HEIGHT}/2);
    right: calc(5vw - 382px);
    overflow: visible;
    z-index: -10;
`;

const ShapeWarperSimpleFixed: FC = () => {
    return (
        <WSFDiv>
            <ShapeWarperSimple />
        </WSFDiv>
    );
}

export { ShapeWarperSimpleFixed }