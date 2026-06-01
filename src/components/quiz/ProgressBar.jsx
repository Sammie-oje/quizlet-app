import { motion } from "motion/react";

function ProgressBar({ percent }) {
    return (
        <div
            role="progressbar"
            aria-label="Question-progress"
            className="p-1 bg-white rounded-full h-4 w-full dark:bg-steel-blue"
        >
            <motion.div
                className="rounded-[102px] bg-vivid-violet h-2"
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ ease: "linear", duration: 0.3 }}
            ></motion.div>
        </div>
    );
}

export default ProgressBar;
