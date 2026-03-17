import htmlIcon from "../../assets/images/icon-html.svg";
import cssIcon from "../../assets/images/icon-css.svg";
import jsIcon from "../../assets/images/icon-js.svg";
import accessIcon from "../../assets/images/icon-accessibility.svg";

function SubjectList() {
    return (
        <ul className="flex flex-col gap-3 ">
            <Subject src={htmlIcon} text={"HTML"} bgColor={"#FFF1E9"} />
            <Subject src={cssIcon} text={"CSS"} bgColor={"#E0FDEF"} />
            <Subject src={jsIcon} text={"Javascript"} bgColor={"#EBF0FF"} />
            <Subject
                src={accessIcon}
                text={"Accessibility"}
                bgColor={"#F6E7FF"}
            />
        </ul>
    );
}

function Subject({ src, text, bgColor }) {
    return (
        <li className="p-3 flex gap-4 items-center bg-white rounded-xl shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] ">
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
        </li>
    );
}
export default SubjectList;
