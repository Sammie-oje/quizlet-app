import SubjectList from "./SubjectList.jsx";

function StartMenu() {
    return (
        <section className="pt-8 px-6 grid gap-10">
            <div className="flex gap-4 flex-col">
                <h2 className="font-rubik text-[2.5rem] font-light">
                    Welcome to the <br />
                    <span className="font-medium">Frontend Quiz!</span>
                </h2>
                <p className="text-slate-gray italic">
                    Pick a subject to get started.
                </p>
            </div>
            <SubjectList />
        </section>
    );
}
export default StartMenu;
