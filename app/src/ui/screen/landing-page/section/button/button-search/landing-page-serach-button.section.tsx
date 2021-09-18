import styled from "styled-components";
import { COLOR } from "../../../../../../constants";
import { ButtonBaseComponent } from "../../../../../components";
import { ButtonMainComponent } from "../../../../../components/button/button-main/button-main.compoent";

const LandingPageBaseButton = styled(ButtonBaseComponent)`
    height: 45px;
    padding: 10px;
    gap: 5px;
`;

const LandingPageSearchButtonSection = styled(ButtonMainComponent)`
    height: 45px;
    padding: 10px;
    background: ${COLOR.BUTTON_BACK_GROUND};
    width: 100%;
`;

export { LandingPageSearchButtonSection, LandingPageBaseButton }