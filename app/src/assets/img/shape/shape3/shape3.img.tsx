import styled from "styled-components";
import myImage from "./img.png";

const Shape3ImgImg = styled.img`
    width: 400px;
`;

const Shape3Img = () => {

    return (
        <Shape3ImgImg src={myImage} />
    )
}

export { Shape3Img }