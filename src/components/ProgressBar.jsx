function ProgressBar({ percent }) {
    return (
        <div
            role="progressbar"
            aria-label="Question-progress"
            className="p-1 bg-white rounded-full h-4 w-full dark:bg-steel-blue"
        >
            <div style={{width: `${percent}%`}} className="rounded-[102px] bg-vivid-violet h-2"></div>
        </div>
    );
}

export default ProgressBar;
