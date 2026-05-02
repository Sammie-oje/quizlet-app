import { useState } from "react";
import Button from "../../components/Button.jsx";
import Alert from "../../components/Alert.jsx";

import {
    Link,
    useLoaderData,
    useParams,
    useOutletContext
} from "react-router-dom";

import ProgressBar from "../../components/ProgressBar.jsx";
import AnswerList from "../../components/AnswerList.jsx";
import quizData from "../../assets/data.json";
import { evaluateSelectedOption } from "../../utils/evaluateSelectedOption.js";

export async function quizLoader({ params }) {
    const subjectName = params.subject;

    const subjectQuestions = quizData.quizzes.filter(
        quiz => quiz.title.toLowerCase() === subjectName.toLowerCase()
    );

    return subjectQuestions;
}

const optionsLetter = ["A", "B", "C", "D"];

function Question() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedId, setSelectedId] = useState(null);
    const [isOptionCorrect, setIsOptionCorrect] = useState(null);

    const [showAlert, setShowAlert] = useState(false);
    const [quizResult, setQuizResult] = useOutletContext();

    const [subjectQuestions] = useLoaderData();
    const currentQuestionObj = subjectQuestions.questions[questionIndex];
    const { subject } = useParams();

    const isLastQuestion = questionIndex >= 9;
    const hasSubmitted = isOptionCorrect !== null;
    const correctOption = currentQuestionObj.answer;

    //When users go to the next question, they should start blank i.e correct and incorrect option styles should be removed
    function handleNextQuestion() {
        setIsOptionCorrect(null);
        setSelectedId(null);
        setQuestionIndex(questionIndex + 1);
        countPoints();
    }
    function countPoints() {
        if (correctOption && isOptionCorrect) {
            setQuizResult(prev => prev + 1);
        }
    }
    function handleSelectedOption(e) {
        if (hasSubmitted) return; //Users should not be able to select options after submitting
        const clickedOptionId = e.target.closest("li").id;
        if (clickedOptionId) {
            setSelectedId(Number(clickedOptionId));
        }
    }
    function handleSubmit() {
        if (selectedId === null) {
            setShowAlert(true);
            return;
        }
        setShowAlert(false);
        setIsOptionCorrect(
            evaluateSelectedOption(currentQuestionObj, selectedId)
        );
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
                                letter={optionsLetter[index]}
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
                        <Link to={`/result/${subject}`}>
                            <Button onClick={countPoints}>Submit Quiz</Button>
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
