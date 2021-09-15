import { FC } from "react"
import { BgLPDiv, BgLPFooter, BgLPGradientStyle } from "./backgorund-lp.style"

const BackgroudLPSection: FC = ({ children }) => {
    return (
        <BgLPDiv>
            <BgLPGradientStyle>
                {children}
            </BgLPGradientStyle>
            <BgLPFooter />
        </BgLPDiv>

    )
}

export { BackgroudLPSection }