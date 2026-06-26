import { Link } from "react-router-dom";
import Image from "../../components/common/Image.jsx";
import { useQuizDispatch, useQuiz } from "../../contexts/QuizContext.jsx";

function SubjectList() {
    const dispatch = useQuizDispatch();
    const quizState = useQuiz();
    const { allQuestions } = quizState;

    return (
        <ul className="flex flex-col gap-3 md:gap-6">
            {allQuestions.quizzes.map(quiz => (
                <Link
                    to="/quiz/"
                    replace
                    onClick={() =>
                        dispatch({
                            type: "SELECT_SUBJECT",
                            payload: quiz.title
                        })
                    }
                >
                    <Subject>
                        <Image page={""} subject={quiz.title} />
                    </Subject>
                </Link>
            ))}
        </ul>
    );
}

function Subject({ children }) {
    return (
        <li className="p-3 flex gap-4 items-center bg-white rounded-xl shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] md:rounded-3xl md:h-20 md:gap-8 xxl:p-5 dark:bg-steel-blue dark:text-white">
            {children}
        </li>
    );
}
export default SubjectList;
