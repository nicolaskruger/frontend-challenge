import { FC } from "react";
import { CloseIcon } from "../../../../../../assets";
import { ButtonInvisibleComponent } from "../../../../../components";
import { LandingPageTitlePrincipal, LandingPageTitleSecundario } from "../../../section";
import { LandingPageMobileLoginDiv } from "./landing-page-mobile-login.style";

type LandingPageLoginProps = {
    open: boolean;
    setOpen: (open: boolean) => void
};

const LandingPageLoginSection: FC<LandingPageLoginProps> = (props) => {

    const { open, setOpen } = props;

    return (
        <LandingPageMobileLoginDiv open={open}>
            <header>
                <div>
                    <LandingPageTitlePrincipal>
                        Get Started
                    </LandingPageTitlePrincipal>
                    <LandingPageTitleSecundario>
                        JUST LOGIN
                    </LandingPageTitleSecundario>
                </div>
                <div>
                    <ButtonInvisibleComponent onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </ButtonInvisibleComponent>
                </div>
            </header>
        </LandingPageMobileLoginDiv>
    )
}

export { LandingPageLoginSection }