import { useState } from "react";
import { Shape3Img } from "../../../../../assets";
import { Input } from "../../../../components";
import {
    MainLandingPageWebDiv,
    MainLandingPageWebForm,
    MainLandingPageWebInput,
    MainLandingPageWebText,
    MainLandingPageWebTitleDiv, MainLandingPageWebTitlePrincipa, MainLandingPageWebTitleSecundario
} from "./main-landing-page-web.style";

const MainLandingPageWeb = () => {

    const [search, setSearch] = useState("");

    return (
        <MainLandingPageWebDiv>
            <Shape3Img />
            <MainLandingPageWebForm >
                <MainLandingPageWebTitleDiv>
                    <MainLandingPageWebTitlePrincipa>
                        Find your
                    </MainLandingPageWebTitlePrincipa>
                    <MainLandingPageWebTitleSecundario>
                        BEST TEACHER
                    </MainLandingPageWebTitleSecundario>
                </MainLandingPageWebTitleDiv>

                <MainLandingPageWebText>
                    Whether you are a student trying to find your ideal private language teachers/tutors or a teacher trying to find great students for your customised private lessons!
                </MainLandingPageWebText>

                <div>
                    <Input Style={MainLandingPageWebInput} value={search} onChange={setSearch} />

                    <div>
                        <div>
                            <button>
                                I'M A TEACHER
                            </button>
                            <button>
                                I'M A STUDENT
                            </button>
                        </div>
                        <button>
                            SEARCH
                        </button>
                    </div>

                </div>

            </MainLandingPageWebForm>
        </MainLandingPageWebDiv>
    );
}

export { MainLandingPageWeb }