import Button from "../../components/Button.jsx";
import ProgressBar from "../../components/ProgressBar.jsx";
import AnswerList from "../../components/AnswerList.jsx";

function Question() {
    return (
        <section className="pt-8 px-6 grid gap-10">
            <fieldset className="contents">
                <div className="flex flex-col gap-6">
                    <legend className="flex flex-col gap-3">
                        <span className="text-sm/[1.5] italic text-slate-gray">
                            Question 6 of 10
                        </span>

                        <h3 className="text-xl/[1.2] font-medium text-dark-slate">
                            Which of these color contrast ratios define the
                            minimum WCAG 2.1 Level AA requirement for normal
                            text?
                        </h3>
                    </legend>
                    <ProgressBar />
                </div>

                <div className="flex flex-col gap-3">
                    <ul className="contents">
                        <AnswerList answer={"4.5 : 1"} letter={"A"}/>
                        <AnswerList answer={"3 : 1"} letter={"B"}/><AnswerList answer={"2.5 : 1"} letter={"C"}/>
                        <AnswerList answer={"5 : 1"} letter={"D"}/>
                    </ul>
                    <Button>Submit Answer</Button>
                </div>
            </fieldset>
        </section>
    );
}

export default Question;
