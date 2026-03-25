import darkMoonIcon from "../assets/images/icon-moon-dark.svg";
import darkSunIcon from "../assets/images/icon-sun-dark.svg";

function Header({ src, text, bgColor }) {
    return (
        <header className="py-4 px-6 flex items-center justify-between">
            <div className="flex items-center justify-between w-41.75">
                <div
                    className="size-10 flex justify-center items-center rounded-md"
                    style={{ backgroundColor: bgColor }}
                >
                    <img
                        className="size-[28.57px]"
                        src={src}
                        alt={`${text}-icon`}
                    />
                </div>
                <span className="text-lg font-medium">{text}</span>
            </div>

            <div className="flex gap-2 items-center justify-between">
                <img src={darkSunIcon} alt="icon-sun-light" />
                <button
                    aria-label="Toggle dark mode"
                    className="w-8 h-5 p-1 bg-vivid-violet rounded-full"
                >
                    <div className="size-3 bg-white rounded-full"></div>
                </button>
                <img src={darkMoonIcon} alt="icon-moon-light" />
            </div>
        </header>
    );
}

export default Header;
