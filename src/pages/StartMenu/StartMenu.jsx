import SubjectList from "./SubjectList.jsx";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

function StartMenu() {
    //To prevent flash of result being reset when state is reset in the Result page
    const [quizResult, setQuizResult] = useOutletContext();
    
    useEffect(() => {
        setQuizResult(0);
    }, []);

    return (
        <section className="w-full pt-8 px-6 grid gap-10 md:gap-16 xxl:grid-cols-2 xxl:gap-[131px]">
            <div className="flex gap-4 flex-col xxl:gap-12">
                <h2 className="font-rubik text-[2.5rem] text-dark-slate flex flex-col gap-2 md:text-heading-large dark:text-white">
                    <span className="font-light"> Welcome to the</span>
                    <span className="font-medium">Frontend Quiz!</span>
                </h2>
                <p className="text-slate-gray italic md:text-body-small dark:text-light-blue">
                    Pick a subject to get started.
                </p>
            </div>
            <SubjectList />
        </section>
    );
}
export default StartMenu;
