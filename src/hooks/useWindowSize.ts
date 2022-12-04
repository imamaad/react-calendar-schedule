import {useEffect, useState} from "react";

export const useWindowSize = (ref: any = false) => {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<any>({width: undefined, height: undefined});
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            if (ref && ref.current) {
                const {current} = ref;
                const width = current.clientWidth;
                const height = current.clientHeight;
                // Set window width/height to state
                setWindowSize({width, height});
            } else {
                // Set window width/height to state
                setWindowSize({width: window.innerWidth, height: window.innerHeight});
            }
        }

        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
        // eslint-disable-next-line
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}