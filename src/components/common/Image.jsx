import htmlIcon from "../../assets/images/icon-html.svg";
import cssIcon from "../../assets/images/icon-css.svg";
import jsIcon from "../../assets/images/icon-js.svg";
import accessIcon from "../../assets/images/icon-accessibility.svg";
import { useQuiz } from "../../contexts/QuizContext.jsx";

const imageMap = {
    HTML: { url: htmlIcon, bgColor: "#FFF1E9" },
    CSS: { url: cssIcon, bgColor: "#E0FDEF" },
    JavaScript: { url: jsIcon, bgColor: "#EBF0FF" },
    Accessibility: { url: accessIcon, bgColor: "#F6E7FF" }
};

function SubjectImage({ page, subject }) {
    const quizState = useQuiz();
    const { selectedSubject } = quizState;

    const imageURL = imageMap[selectedSubject ? selectedSubject : subject]?.url;
    const bgColor = imageMap[selectedSubject ? selectedSubject : subject]?.bgColor;
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
                    alt={`${selectedSubject ? selectedSubject : subject}-icon`}
                />
            </div>
            <span className="text-lg font-medium md:text-heading-small dark:text-white">
                {selectedSubject ? selectedSubject : subject}
            </span>
        </div>
    );
}
export default SubjectImage;
