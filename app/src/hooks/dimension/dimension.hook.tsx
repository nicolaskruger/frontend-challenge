import { useState } from "react";

const getWindorDimensions = () => {
    const { innerHeight: heigth, innerWidth: width } = window;

    return ({
        heigth,
        width
    })
}

const useDimensionHook = () => {
    const [dimension, setDimension] = useState(getWindorDimensions);

    const refresh = () => {
        setDimension(getWindorDimensions());
    }

    return {
        dimension,
        refresh
    }
}

export { useDimensionHook }