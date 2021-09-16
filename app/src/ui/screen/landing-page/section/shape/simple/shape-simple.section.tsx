import styled from "styled-components";

const SHAPE_HEIGHT = "290px";

const ShapeSimple = styled.div`
    width: 150px;
    height: ${SHAPE_HEIGHT};
    border-radius: 0% 50% 0 50%;
    position: absolute;
`;

export { ShapeSimple, SHAPE_HEIGHT }