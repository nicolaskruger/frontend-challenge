import { useState } from "react";
import { LogoImg } from "../../../../../assets"
import { GetStartSection } from "../../section";
import { HeaderLandigPageButton, HeaderLandingPageWebDiv, HeaderLandingPageWebLink, HeaderLandingPageWebSubDiv } from "./header-landing-page.web.style"

const HeaderLandingPageWeb = () => {

    const [open, setOpen] = useState(false);

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
            <HeaderLandigPageButton onClick={() => setOpen(true)}>
                Get Started
            </HeaderLandigPageButton>
            <GetStartSection open={open} setOpen={setOpen} />
        </HeaderLandingPageWebDiv>
    )
}

export { HeaderLandingPageWeb }