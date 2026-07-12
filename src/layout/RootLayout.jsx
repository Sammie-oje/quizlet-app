import Header from "../components/common/Header.jsx";
import Image from "../components/common/Image.jsx";
import { useState } from "react";
import { useLocation, useOutlet, useNavigationType } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useQuiz } from "../contexts/QuizContext.jsx";

function AnimatedOutlet() {
    const o = useOutlet();
    const [outlet] = useState(o);
    return <>{outlet}</>;
}

function RootLayout() {
    const quizState = useQuiz();
    const { selectedSubject } = quizState;
    const { pathname, state } = useLocation();
    const navType = useNavigationType();

    const pageVariants = {
        initial: direction => ({
            opacity: 0,
            x: direction === "next" ? 8 : -8,
            filter: "blur(3px)"
        }),
        animate: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)"
        },
        exit: direction => ({
            opacity: 0,
            x: direction === "next" ? -8 : 8,
            filter: "blur(3px)"
        })
    };

    let direction = "next";

    if (state?.direction) {
        direction = state.direction;
    } else if (navType === "POP") {
        direction = "back";
    }

    return (
        <>
            <Header>
                <Image page={pathname} subject={selectedSubject} />
            </Header>

            <AnimatePresence
                mode="popLayout"
                custom={direction}
                initial={false}
            >
                <motion.div
                    key={pathname}
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >
                    <AnimatedOutlet key={pathname} />
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export default RootLayout;
