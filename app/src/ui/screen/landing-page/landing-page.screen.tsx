import { useEffect } from "react";
import { useDimensionHook } from "../../../hooks"
import { LandingPageMobileSection } from "./mobile/landing-page-mobile.section";
import { LandingPageWebSection } from "./web"

const LandingPageScreen = () => {

    const { dimension, refresh } = useDimensionHook();

    useEffect(() => {
        window.addEventListener('resize', refresh)
        return () => window.removeEventListener('resize', refresh);
    }, [])

    if (dimension.width > 1000)
        return (
            <LandingPageWebSection />
        )
    return (
        <LandingPageMobileSection />
    )
}

export { LandingPageScreen }