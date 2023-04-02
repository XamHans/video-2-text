import { useEffect, useState } from "react";

function useSticky() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            const scrollPos = window.scrollY;
            if (scrollPos > 50) {
                setSticky(true);
            }

            if (scrollPos < 50) {
                setSticky(false);
            }
        };

        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [sticky]);

    return {
        sticky
    };
}

export default useSticky;