import { FC } from "react";
import styled from "styled-components";
import { ShapeWarperSimple } from "../warper-simple/shape-warper-simple.section";


const WSFDiv = styled.div`
    position: fixed;
    top: 0;
    left: calc(1200px);
    width: 300px;
    height: 300px;
`;

const ShapeWarperSimpleFixed: FC = () => {
    return (
        <WSFDiv>
            <ShapeWarperSimple />
        </WSFDiv>
    );
}

export { ShapeWarperSimpleFixed }