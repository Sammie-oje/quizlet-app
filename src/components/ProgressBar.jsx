function ProgressBar() {
    return (
        <div
            role="progressbar"
            aria-label="Question-progress"
            className="p-1 bg-white rounded-full h-4 w-full dark:bg-steel-blue"
        >
            <div className="rounded-[102px] bg-vivid-violet h-2 w-30"></div>
        </div>
    );
}

export default ProgressBar;
