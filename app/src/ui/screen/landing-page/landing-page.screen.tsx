import { ContainerComponent } from "../../components"
import { BackgroudLPSection, ShapeWarperSimpleFixed } from "./section"
import { HeaderLandingPageWeb, MainLandingPageWeb } from "./web"


const LandingPageScreen = () => {
    return (
        <BackgroudLPSection>
            <ContainerComponent >
                <HeaderLandingPageWeb />
                <MainLandingPageWeb />
            </ContainerComponent>
            <ShapeWarperSimpleFixed />
        </BackgroudLPSection>
    )
}

export { LandingPageScreen }