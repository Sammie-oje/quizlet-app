import SubjectList from "./SubjectList.jsx";

function StartMenu() {
    return (
        <section className="pt-8 px-6 grid gap-10 md:gap-16">
            <div className="flex gap-4 flex-col">
                <h2 className="font-rubik text-[2.5rem] text-dark-slate flex flex-col gap-2 md:text-heading-large">
                    <span className="font-light"> Welcome to the</span>
                    <span className="font-medium">Frontend Quiz!</span>
                </h2>
                <p className="text-slate-gray italic md:text-body-small">
                    Pick a subject to get started.
                </p>
            </div>
            <SubjectList />
        </section>
    );
}
export default StartMenu;
