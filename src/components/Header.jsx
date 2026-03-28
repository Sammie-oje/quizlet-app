import darkMoonIcon from "../assets/images/icon-moon-dark.svg";
import darkSunIcon from "../assets/images/icon-sun-dark.svg";

function Header({ children}) {
    return (
        <header className="py-4 px-6 flex items-center justify-between md:w-[640px]">
            {children}

            <div className="flex gap-2 items-center justify-between md:gap-4">
                <img
                    src={darkSunIcon}
                    alt="icon-sun-light"
                    className="md:size-6"
                />
                <button
                    aria-label="Toggle dark mode"
                    className="w-8 h-5 p-1 bg-vivid-violet rounded-full md:w-12 md:h-7"
                >
                    <div className="size-3 bg-white rounded-full md:size-5"></div>
                </button>
                <img
                    src={darkMoonIcon}
                    alt="icon-moon-light"
                    className="md:size-6"
                />
            </div>
        </header>
    );
}

export default Header;
