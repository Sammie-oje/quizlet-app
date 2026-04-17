import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import lightModeMoonIcon from "../assets/images/icon-moon-dark.svg";
import lightModeSunIcon from "../assets/images/icon-sun-dark.svg";
import darkModeMoonIcon from "../assets/images/icon-moon-light.svg";
import darkModeSunIcon from "../assets/images/icon-sun-light.svg";

function Header({ children }) {
    //The theme of the header icons should match the user's OS theme preference and/or the current app theme
    const [isDarkMode, setisDarkMode] = useState(true);
    //The user should be able to tiggle state manually
    const onToggleTheme = () => {
        setisDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };
    /*
    The app should be responsive to the OS theme i.e when the OS theme changes the app should also change with it
    */
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const applyTheme = e => {
            setisDarkMode(e.matches);
            document.documentElement.classList.toggle("dark", e.matches);
        };

        applyTheme(mediaQuery);
        mediaQuery.addEventListener("change", applyTheme);

        return () => mediaQuery.removeEventListener("change", applyTheme); 
    }, []);

    return (
        <header className="py-4 px-6 flex items-center justify-between w-full xxl:my-21">
            {children}

            <div className="flex gap-2 items-center justify-between md:gap-4 ">
                <img
                    src={isDarkMode ? darkModeSunIcon : lightModeSunIcon}
                    alt="icon-sun-light"
                    className="md:size-6"
                />
                <button
                    aria-label="Toggle dark mode"
                    className="w-8 h-5 p-1 bg-vivid-violet rounded-full md:w-12 md:h-7"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-" + (isDarkMode ? "end" : "start")
                    }}
                    onClick={onToggleTheme}
                >
                    <motion.div
                        layout
                        className="size-3 bg-white rounded-full md:size-5"
                        transition={{
                            type: "spring",
                            visualDuration: 0.2,
                            bounce: 0.2
                        }}
                    />
                </button>
                <img
                    src={isDarkMode ? darkModeMoonIcon : lightModeMoonIcon}
                    alt="icon-moon-light"
                    className="md:size-6"
                />
            </div>
        </header>
    );
}

export default Header;
