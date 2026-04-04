import { useState } from "react";
import Button from "../../components/Button.jsx";
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

function Question() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [subjectQuestions] = useLoaderData();

    const currentQuestionObj = subjectQuestions.questions[questionIndex];
    const optionsLetter = ["A", "B", "C", "D"];

    const { subject } = useParams();

    function handleQuestion() {
        setQuestionIndex(questionIndex + 1);
    }
    const isLastQuestion = questionIndex >= 9;
    return (
        <section className="pt-8 px-6 grid gap-10 md:w-[640px] md:gap-16">
            <fieldset className="contents">
                <div className="flex flex-col gap-6 md:gap-10">
                    <legend className="flex flex-col gap-3 md:gap-[27px]">
                        <span className="text-sm/[1.5] italic text-slate-gray md:text-xl/[1.5]">
                            Question {questionIndex + 1} of 10
                        </span>
                        <h3 className="text-xl/[1.2] font-medium text-dark-slate md:text-4xl/[1.2]">
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
                </div>
            </fieldset>
        </section>
    );
}

export default Question;
