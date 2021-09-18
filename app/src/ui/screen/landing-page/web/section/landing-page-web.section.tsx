import { FC } from "react"
import { HeaderLandingPageWeb, MainLandingPageWeb } from "..";
import { ContainerComponent } from "../../../../components";
import { BackgroudLPSection, ShapeWarperSimpleFixed } from "../../section";

const LandingPageWebSection: FC = () => {
    return (
        <BackgroudLPSection>
            <ContainerComponent >
                <HeaderLandingPageWeb />
                <MainLandingPageWeb />
            </ContainerComponent>
            <ShapeWarperSimpleFixed />
        </BackgroudLPSection>
    );
}

export { LandingPageWebSection }