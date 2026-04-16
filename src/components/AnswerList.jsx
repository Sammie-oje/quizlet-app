function AnswerList({ answer, letter }) {
    return (
        <li className="flex items-center p-3 rounded-xl bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] text-lg font-medium text-white w-full md:rounded-3xl md:h-20 xxl:px-5 xxl:py-[18px] xxl:h-[92px] dark:bg-steel-blue">
            <label className="flex items-center gap-4 md:gap-8">
                <input type="radio" name="option" className="sr-only peer" />
                <div className="size-10 rounded-md flex items-center justify-center bg-ghost-white font-medium text-xl text-slate-gray md:text-heading-small md:rounded-xl md:size-14 xxl:rounded-lg">
                    {letter}
                </div>

                <span className="font-medium text-lg text-dark-slate md:text-heading-small dark:text-white">
                    {answer}
                </span>
            </label>
        </li>
    );
}

export default AnswerList;
