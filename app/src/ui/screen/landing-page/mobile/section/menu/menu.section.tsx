import { FC } from "react";
import { CloseIcon, LogoImg } from "../../../../../../assets";
import { ButtonInvisibleComponent, ContainerComponent } from "../../../../../components";
import { LandingPageSearchButtonSection } from "../../../section";
import { LandignPageMenuLink, LandingPageMenuDiv, LandingPageMenuHeader, LandingPageMenuMain } from "./menu.style";

type MenuProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    setOpenLogin: (open: boolean) => void;
}

const LandingPageMobileMenu: FC<MenuProps> = (props) => {
    const { open, setOpen, setOpenLogin } = props;

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpenLogi = () => {
        setOpenLogin(true);
    }

    return (
        <LandingPageMenuDiv open={open}>
            <ContainerComponent>
                <LandingPageMenuHeader>
                    <LogoImg />
                    <ButtonInvisibleComponent onClick={handleClose}>
                        <CloseIcon />
                    </ButtonInvisibleComponent>
                </LandingPageMenuHeader>
                <LandingPageMenuMain>

                    <div>
                        <LandignPageMenuLink>
                            How it works
                        </LandignPageMenuLink>

                        <LandignPageMenuLink>
                            About Us
                        </LandignPageMenuLink>
                    </div>

                    <LandingPageSearchButtonSection onClick={handleOpenLogi}>
                        Get Started
                    </LandingPageSearchButtonSection>
                </LandingPageMenuMain>
            </ContainerComponent>
        </LandingPageMenuDiv>
    )
}

export { LandingPageMobileMenu }