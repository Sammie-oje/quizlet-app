import Header from "../components/common/Header.jsx";
import Image from "../components/common/Image.jsx";
import { getSubjectFromUrl } from "../utils/getSubjectFromUrl.js";
import { useLocation, Outlet } from "react-router-dom";
import { useState } from "react";
import { QuizContext } from "../contexts/QuizContext.jsx";

function RootLayout() {
    const { pathname } = useLocation();
    const subject = getSubjectFromUrl(pathname);
    const [quizResult, setQuizResult] = useState(0);

    return (
        <QuizContext value={{quizResult, setQuizResult}}>
            <Header>
                <Image subject={subject} page={pathname} />
            </Header>
            <Outlet  />
        </QuizContext>
    );
}

export default RootLayout;
