import { LogoImg } from "../../../../../assets"
import { HeaderLandigPageButton, HeaderLandingPageWebDiv, HeaderLandingPageWebLink, HeaderLandingPageWebSubDiv } from "./header-landing-page.web.style"

const HeaderLandingPageWeb = () => {
    return (
        <HeaderLandingPageWebDiv>
            <HeaderLandingPageWebSubDiv>
                <LogoImg />
                <HeaderLandingPageWebLink>
                    How it works
                </HeaderLandingPageWebLink>
                <HeaderLandingPageWebLink>
                    About us
                </HeaderLandingPageWebLink>
            </HeaderLandingPageWebSubDiv>
            <HeaderLandigPageButton>
                Get Started
            </HeaderLandigPageButton>
        </HeaderLandingPageWebDiv>
    )
}

export { HeaderLandingPageWeb }