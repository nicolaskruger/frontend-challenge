import { FC, useState } from "react";
import { LandingPageInput } from "../..";


type Props = {
    value: string,
    onChange: (val: string) => void
}

const LandingPageInputPassword: FC<Props> = (props) => {


    const [hide, setHide] = useState(false);
    const { value, onChange } = props;

    return (
        <div>
            <LandingPageInput type={hide ? "password" : "text"} value={value} onChange={onChange} />
            <button onClick={() => setHide(!hide)}>
                {hide ? "hide" : "show"}
            </button>
        </div>
    )
}

export { LandingPageInputPassword }