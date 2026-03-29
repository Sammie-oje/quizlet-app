import { Link } from "react-router-dom";
import Image from "../../components/Image.jsx";

function SubjectList() {
    return (
        <ul className="flex flex-col gap-3 md:gap-6">
            <Subject>
                <Image page={""} subject={"HTML"} />
            </Subject>
            <Subject>
                <Image page={""} subject={"CSS"} />
            </Subject>
            <Subject>
                <Image page={""} subject={"Javascript"} />
            </Subject>
            <Link to="/questions">
                <Subject>
                    <Image page={""} subject={"Accessibility"} />
                </Subject>
            </Link>
        </ul>
    );
}

function Subject({ children }) {
    return (
        <li className="p-3 flex gap-4 items-center bg-white rounded-xl shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] md:rounded-3xl md:h-20 md:gap-8">
            {children}
        </li>
    );
}
export default SubjectList;
