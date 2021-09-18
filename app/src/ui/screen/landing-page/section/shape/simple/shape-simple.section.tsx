import styled from "styled-components";

const SHAPE_HEIGHT = "500px";
const SHAPE_WITDTH = "250px";
const ShapeSimple = styled.div`
    width: ${SHAPE_WITDTH};
    height: ${SHAPE_HEIGHT};
    border-radius: 0% 50% 0 50%;
    position: absolute;
`;

export { ShapeSimple, SHAPE_HEIGHT, SHAPE_WITDTH }