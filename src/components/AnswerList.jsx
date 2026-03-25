function AnswerList({ answer, letter }) {
    return (
        <li className=" p-3 rounded-xl bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] text-lg font-medium text-white w-full">
            <label className="flex items-center gap-4">
                <input type="radio" name="option" className="sr-only peer" />
                <div className="size-10 rounded-md flex items-center justify-center bg-ghost-white font-medium text-xl text-slate-gray">
                    {letter}
                </div>

                <span className="font-medium text-lg text-dark-slate">
                    {answer}
                </span>
            </label>
        </li>
    );
}

export default AnswerList;
