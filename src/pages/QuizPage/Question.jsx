import Button from "../../components/common/Button.jsx";
import Alert from "../../components/quiz/Alert.jsx";
import ProgressBar from "../../components/quiz/ProgressBar.jsx";
import AnswerList from "./AnswerList.jsx";
import { Link } from "react-router-dom";
import { useQuizDispatch, useQuiz } from "../../contexts/QuizContext.jsx";
import { evaluateSelectedOption } from "../../utils/evaluateSelectedOption.js";

function Question() {
    const dispatch = useQuizDispatch();
    const quizState = useQuiz();
    const {
        quizResult,
        allQuestions,
        selectedQuestions,
        questionIndex,
        selectedId,
        isOptionCorrect,
        showAlert
    } = quizState;

    const currentQuestionObj = selectedQuestions[questionIndex];
    const isLastQuestion = questionIndex >= 9;
    const hasSubmitted = isOptionCorrect !== null;
    const correctOption = currentQuestionObj.answer;

    function handleNextQuestion() {
        dispatch({ type: "NEXT_QUESTION" });
    }

    function handleSelectedOption(e) {
        const clickedOptionId = e.target.closest("li")?.id;
        if (clickedOptionId) {
            dispatch({
                type: "SELECT_OPTION",
                payload: Number(clickedOptionId)
            });
        }
    }
    function handleSubmit() {
        if (selectedId === null) {
            dispatch({ type: "SUBMIT_ANSWER" });
            return;
        }
        const isCorrect = evaluateSelectedOption(
            currentQuestionObj,
            selectedId
        );

        dispatch({
            type: "SUBMIT_ANSWER",
            payload: isCorrect
        });
    }

    return (
        <section className="pt-8 px-6 grid gap-10 w-full md:gap-16 xxl:grid-cols-2 xxl:gap-[131px]">
            <fieldset className="contents">
                <div className="flex flex-col gap-6 md:gap-10 xxl:gap-[123px]">
                    <legend className="flex flex-col gap-3 md:gap-[27px]">
                        <span className="text-sm/[1.5] italic text-slate-gray md:text-xl/[1.5] xxl:text-body-small dark:text-light-blue">
                            Question {questionIndex + 1} of 10
                        </span>
                        <h3 className="text-xl/[1.2] font-medium text-dark-slate md:text-4xl/[1.2] xxl:text-heading-medium dark:text-white">
                            {currentQuestionObj.question}
                        </h3>
                    </legend>
                    <ProgressBar percent={(questionIndex + 1) * 10} />
                </div>

                <div className="flex flex-col gap-3 md:gap-8">
                    <ul
                        className="flex flex-col gap-3 md:gap-6"
                        onClick={e => handleSelectedOption(e)}
                    >
                        {currentQuestionObj.options.map((option, index) => (
                            <AnswerList
                                answer={option}
                                key={index}
                                id={index}
                                selectedId={selectedId}
                                correctOption={correctOption}
                                hasSubmitted={hasSubmitted}
                                isOptionCorrect={isOptionCorrect}
                            />
                        ))}
                    </ul>

                    {hasSubmitted && isLastQuestion ? (
                        <Link to="/result" state={{ direction: "next" }}>
                            <Button>Submit Quiz</Button>
                        </Link>
                    ) : hasSubmitted ? (
                        <Button onClick={handleNextQuestion}>
                            Next Question
                        </Button>
                    ) : (
                        <Button onClick={handleSubmit}>Submit Answer</Button>
                    )}

                    {showAlert && <Alert />}
                </div>
            </fieldset>
        </section>
    );
}

export default Question;
