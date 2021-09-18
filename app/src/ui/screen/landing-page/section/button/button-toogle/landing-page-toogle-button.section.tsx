import { ButtonHTMLAttributes, FC } from "react"
import { OkIcon } from "../../../../../../assets";
import { LandingPageCircleActive, LandingPageCircleDisactive, LandingPageToogleActive, LandingPageToogleDisactive } from "./landing-page-toogle-button.style";

interface ToogleButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    active: boolean
};

const LandingPageToogleButton: FC<ToogleButton> = (props) => {

    const { children, active } = props;

    if (active)
        return (
            <LandingPageToogleActive {...props}>
                <LandingPageCircleActive >
                    <OkIcon />
                </LandingPageCircleActive>
                {children}
            </LandingPageToogleActive>
        );
    return (
        <LandingPageToogleDisactive {...props}>
            <LandingPageCircleDisactive />
            {children}
        </LandingPageToogleDisactive>
    );
}

export { LandingPageToogleButton }