import { useState } from "react"
import { ContainerComponent } from "../../../components"
import { BackgroudLPSection } from "../section"
import { LandingPageMobileDiv } from "./landing-page-mobile.style"
import { LandingPageLoginSection, LandingPageMobileHeader, LandingPageMobileMenu } from "./section"

const LandingPageMobileSection = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    return (
        <BackgroudLPSection>
            <LandingPageMobileDiv>
                <ContainerComponent>
                    <LandingPageMobileHeader setOpen={setOpenMenu} />
                </ContainerComponent>
                <LandingPageMobileMenu open={openMenu} setOpenLogin={setOpenLogin} setOpen={setOpenMenu} />
                <LandingPageLoginSection open={openLogin} setOpen={setOpenLogin} />
            </LandingPageMobileDiv>
        </BackgroudLPSection>
    )
}

export { LandingPageMobileSection }