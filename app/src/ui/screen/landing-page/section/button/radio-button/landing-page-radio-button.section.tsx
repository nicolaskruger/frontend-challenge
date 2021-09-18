import { FC } from "react"
import { LandingPageToogleButton } from "..";
import { KIND_USER } from "../../../../../../util"
import { LandingPageRadioButtonDiv } from "./landing-page-radio-button.style";

type RadioButtonProps = {
    kind: KIND_USER,
    changeIt: (kind: KIND_USER) => void
}

const LandingPageRadioButton: FC<RadioButtonProps> = (props) => {

    const { kind, changeIt } = props;
    const { STUDENT, TEACHER } = KIND_USER;

    const changeToTeachear = () => {
        changeIt(TEACHER)
    }

    const changeToStudent = () => {
        changeIt(STUDENT)
    }

    return (
        <LandingPageRadioButtonDiv>
            <LandingPageToogleButton onClick={changeToStudent} active={kind === STUDENT} >
                I'M STUDENT
            </LandingPageToogleButton>
            <LandingPageToogleButton onClick={changeToTeachear} active={kind === TEACHER}>
                I'M TEACHEAR
            </LandingPageToogleButton>
        </LandingPageRadioButtonDiv>
    );

}

export {
    LandingPageRadioButton
}