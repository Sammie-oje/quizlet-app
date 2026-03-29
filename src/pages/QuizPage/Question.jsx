import Button from "../../components/Button.jsx";
import { Link } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar.jsx";
import AnswerList from "../../components/AnswerList.jsx";

function Question() {
    return (
        <section className="pt-8 px-6 grid gap-10 md:w-[640px] md:gap-16">
            <fieldset className="contents">
                <div className="flex flex-col gap-6 md:gap-10">
                    <legend className="flex flex-col gap-3 md:gap-[27px]">
                        <span className="text-sm/[1.5] italic text-slate-gray md:text-xl/[1.5]">
                            Question 6 of 10
                        </span>
                        <h3 className="text-xl/[1.2] font-medium text-dark-slate md:text-4xl/[1.2]">
                            Which of these color contrast ratios define the
                            minimum WCAG 2.1 Level AA requirement for normal
                            text?
                        </h3>
                    </legend>
                    <ProgressBar />
                </div>

                <div className="flex flex-col gap-3 md:gap-8">
                    <ul className="flex flex-col gap-3 md:gap-6">
                        <AnswerList answer={"4.5 : 1"} letter={"A"} />
                        <AnswerList answer={"3 : 1"} letter={"B"} />
                        <AnswerList answer={"2.5 : 1"} letter={"C"} />
                        <AnswerList answer={"5 : 1"} letter={"D"} />
                    </ul>

                    <Link to="/result">
                        <Button>Submit Answer</Button>
                    </Link>
                </div>
            </fieldset>
        </section>
    );
}

export default Question;
