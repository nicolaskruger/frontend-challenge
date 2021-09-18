import { InputHTMLAttributes } from "react";
import { Input } from "../../../../../components";
import { LandingPageInputInput } from "./landing-page-input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (val: any) => void,
};

const LandingPageInput = (props: InputProps) => {

    return (
        <Input Style={LandingPageInputInput} {...props} />
    );
}

export { LandingPageInput }