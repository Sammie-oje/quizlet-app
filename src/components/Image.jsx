import htmlIcon from "../assets/images/icon-html.svg";
import cssIcon from "../assets/images/icon-css.svg";
import jsIcon from "../assets/images/icon-js.svg";
import accessIcon from "../assets/images/icon-accessibility.svg";

function SubjectImage({ subject, page }) {
    const imageMap = {
        HTML: { url: htmlIcon, bgColor: "#FFF1E9" },
        CSS: { url: cssIcon, bgColor: "#E0FDEF" },
        Javascript: { url: jsIcon, bgColor: "#EBF0FF" },
        Accessibility: { url: accessIcon, bgColor: "#F6E7FF" }
    };

    const imageURL = imageMap[subject]?.url;
    const bgColor = imageMap[subject]?.bgColor;
    const isHomePage = page === "/";

    return (
        <div
            className={`flex items-center gap-4 md:gap-6 ${isHomePage ? "invisible" : "visible"}`}
        >
            <div
                className="size-10 flex justify-center items-center rounded-md md:size-14 md:rounded-lg"
                style={{ backgroundColor: bgColor }}
            >
                <img
                    className="size-[28.57px] md:size-10"
                    src={imageURL}
                    alt={`${subject}-icon`}
                />
            </div>
            <span className="text-lg font-medium md:text-heading-small">
                {subject}
            </span>
        </div>
    );
}
export default SubjectImage;
