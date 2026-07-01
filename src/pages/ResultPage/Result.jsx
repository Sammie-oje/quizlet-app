import Image from "../../components/common/Image.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useQuiz, useQuizDispatch } from "../../contexts/QuizContext.jsx";
import Button from "../../components/common/Button.jsx";

function Result() {
    const quizState = useQuiz();
    const dispatch = useQuizDispatch();

    const { quizResult, selectedSubject } = quizState;
    const navigate = useNavigate();

    const handlePlayAgain = () => {
        dispatch({ type: "RESET" });
        navigate("/", { replace: true, state: { direction: "next" } });
    };

    return (
        <section className="px-6 pt-8 w-full flex flex-col gap-10 md:gap-16 xxl:flex-row xxl:gap-[11.5rem] xxl:px-0">
            <h2 className="flex flex-col gap-2 text-dark-slate w-full text-[40px] md:text-heading-large dark:text-white">
                <span className="font-light">Quiz completed</span>
                <span className="font-medium">You scored...</span>
            </h2>

            <article className="flex flex-col gap-3 w-full md:gap-8">
                <div className="p-8 bg-white flex flex-col justify-center items-center gap-4 rounded-xl md:p-12 md:rounded-3xl md:gap-10 dark:bg-steel-blue">
                    <Image page={"/result"} subject={selectedSubject} />
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <output className="font-medium text-[88px] md:text-display dark:text-white">
                            {quizResult}
                        </output>
                        <p className="font-regular text-lg text-slate-gray md:text-body-small xxl:text-body-medium dark:text-light-blue">
                            out of 10
                        </p>
                    </div>
                </div>
                <a onClick={handlePlayAgain}>
                    <Button>Play Again</Button>
                </a>
            </article>
        </section>
    );
}

export default Result;
