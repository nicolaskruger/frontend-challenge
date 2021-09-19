import { FC } from "react"
import { HamburgerIcon, LogoImg } from "../../../../../../assets"
import { LandingPageMobileHeaderButton, LandingPageMobileHeaderHeader } from "./landing-page-mobile-header.style"

type HeaderProps = {
    setOpen: (open: boolean) => void
}

const LandingPageMobileHeader: FC<HeaderProps> = (props) => {

    const { setOpen } = props;

    return (
        <LandingPageMobileHeaderHeader>
            <LandingPageMobileHeaderButton onClick={() => setOpen(true)}>
                <HamburgerIcon />
            </LandingPageMobileHeaderButton>
            <LogoImg />
        </LandingPageMobileHeaderHeader>
    )
}

export { LandingPageMobileHeader }