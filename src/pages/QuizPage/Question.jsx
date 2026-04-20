import { useState } from "react";
import Button from "../../components/Button.jsx";
import Alert from "../../components/Alert.jsx";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar.jsx";
import AnswerList from "../../components/AnswerList.jsx";
import quizData from "../../assets/data.json";

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
    const [subjectQuestions] = useLoaderData();

    const currentQuestionObj = subjectQuestions.questions[questionIndex];

    const { subject } = useParams();

    function handleQuestion() {
        setQuestionIndex(questionIndex + 1);
    }
    const isLastQuestion = questionIndex >= 9;
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
                    <ProgressBar />
                </div>

                <div className="flex flex-col gap-3 md:gap-8">
                    <ul className="flex flex-col gap-3 md:gap-6">
                        {currentQuestionObj.options.map((option, index) => (
                            <AnswerList
                                answer={option}
                                letter={optionsLetter[index]}
                                key={index}
                            />
                        ))}
                    </ul>

                    {isLastQuestion ? (
                        <Link to={`/result/${subject}`}>
                            <Button>Submit Answer</Button>
                        </Link>
                    ) : (
                        <Button onClick={handleQuestion}>Submit Answer</Button>
                    )}

                    <Alert />
                </div>
            </fieldset>
        </section>
    );
}

export default Question;
