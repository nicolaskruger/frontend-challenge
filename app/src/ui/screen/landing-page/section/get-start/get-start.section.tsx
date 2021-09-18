import { useState } from "react";
import styled from "styled-components"
import { LandingPageInput, LandingPageInputPassword } from "..";

import { CloseIcon } from "../../../../../assets";
import { COLOR } from "../../../../../constants";
import { GetStartLabel } from "./ section";
import { GetStartCloseButton, GetStartSubDiv, GetStartTitlePrincipal, GetStartTitleSecundary } from "./get-start.style";

type GetStartProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const GetStartDiv = styled.div`
        display: ${true ? "flex" : "none"};
        position: fixed;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: ${COLOR.BACK_GROUND_GET_STARTER};
    `;

const GetStartSection = (props: GetStartProps) => {

    const { open, setOpen } = props;

    const [user, setUser] = useState("");

    const [password, setPassword] = useState("");

    const render = () => (
        <GetStartDiv>
            <GetStartSubDiv>
                <GetStartTitlePrincipal>
                    Get Started
                </GetStartTitlePrincipal>
                <GetStartTitleSecundary>
                    JUST LOGIN
                </GetStartTitleSecundary>
                <div>
                    <GetStartLabel label="Username:" >
                        <LandingPageInput value={user} onChange={setUser} />
                    </GetStartLabel>
                    <GetStartLabel label="Password:" >
                        <LandingPageInputPassword value={password} onChange={setPassword} />
                    </GetStartLabel>

                </div>
                <GetStartCloseButton onClick={() => setOpen(false)}>
                    <CloseIcon />
                </GetStartCloseButton>
            </GetStartSubDiv>
        </GetStartDiv>
    )
    if (open)
        return (
            render()
        )
    return (
        <>
        </>
    );
}

export { GetStartSection }