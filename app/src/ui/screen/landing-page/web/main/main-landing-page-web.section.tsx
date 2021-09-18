import { useState } from "react";
import { Shape3Img } from "../../../../../assets";
import { KIND_USER } from "../../../../../util";
import { LandingPageInput, LandingPageRadioButton, LandingPageSearchButtonSection, LandingPageTitlePrincipal, LandingPageTitleSecundario } from "../../section";
import {
    MainLandingPageWebDiv,
    MainLandingPageWebForm,
    MainLandingPageWebLastDiv,
    MainLandingPageWebLastSubDiv,
    MainLandingPageWebText,
    MainLandingPageWebTitleDiv
} from "./main-landing-page-web.style";

const MainLandingPageWeb = () => {


    const [search, setSearch] = useState("");

    const [kind, setKind] = useState(KIND_USER.STUDENT);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
    }

    return (
        <MainLandingPageWebDiv>
            <Shape3Img />
            <MainLandingPageWebForm onSubmit={handleSubmit}>
                <MainLandingPageWebTitleDiv>
                    <LandingPageTitlePrincipal>
                        Find your
                    </LandingPageTitlePrincipal>
                    <LandingPageTitleSecundario>
                        BEST TEACHER
                    </LandingPageTitleSecundario>
                </MainLandingPageWebTitleDiv>

                <MainLandingPageWebText>
                    Whether you are a student trying to find your ideal private language teachers/tutors or a teacher trying to find great students for your customised private lessons!
                </MainLandingPageWebText>

                <MainLandingPageWebLastDiv>
                    <LandingPageInput placeholder="Type here what are you looking for" value={search} onChange={setSearch} />
                    <MainLandingPageWebLastSubDiv>
                        <LandingPageRadioButton kind={kind} changeIt={setKind} />
                        <LandingPageSearchButtonSection>
                            SEARCH
                        </LandingPageSearchButtonSection>
                    </MainLandingPageWebLastSubDiv>

                </MainLandingPageWebLastDiv>

            </MainLandingPageWebForm>
        </MainLandingPageWebDiv>
    );
}

export { MainLandingPageWeb }