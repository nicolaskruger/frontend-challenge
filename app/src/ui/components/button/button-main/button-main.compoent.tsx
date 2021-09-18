import styled from "styled-components"
import { COLOR } from "../../../../constants";
import { ButtonBaseComponent } from "../button-base/button-base.component";

const { BUTTON_TEXT, BUTTON_BACK_GROUND } = COLOR;

const ButtonMainComponent = styled(ButtonBaseComponent)`
    color: ${BUTTON_TEXT};
    background: ${BUTTON_BACK_GROUND};
    font-weight: 700;
`;


export { ButtonMainComponent }