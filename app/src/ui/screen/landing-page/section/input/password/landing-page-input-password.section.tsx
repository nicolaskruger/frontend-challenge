import { FC, useState } from "react";
import { CloseEyeIcon, OpenEyeIcon } from "../../../../../../assets";
import { Input } from "../../../../../components";
import { LandingPageInpuPasswordDiv, LandingPageInputPasswordButton, LandingPageInputPasswordInput } from "./landing-page-input-password.style";


type Props = {
    value: string,
    onChange: (val: string) => void
}

const LandingPageInputPassword: FC<Props> = (props) => {


    const [hide, setHide] = useState(false);
    const { value, onChange } = props;

    const toogleEye = () => {
        if (hide) {
            return <OpenEyeIcon />
        }
        return <CloseEyeIcon />
    }

    const handleToggle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        event.preventDefault();
        setHide(!hide)
    }

    return (
        <LandingPageInpuPasswordDiv>
            <Input Style={LandingPageInputPasswordInput} type={hide ? "password" : "text"} value={value} onChange={onChange} />
            <LandingPageInputPasswordButton onClick={handleToggle}>
                {toogleEye()}
            </LandingPageInputPasswordButton>
        </LandingPageInpuPasswordDiv>
    )
}

export { LandingPageInputPassword }