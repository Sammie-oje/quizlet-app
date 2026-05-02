import Header from "../components/Header.jsx";
import Image from "../components/Image.jsx";
import { getSubjectFromUrl } from "../utils/getSubjectFromUrl.js";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

function RootLayout() {
    const { pathname } = useLocation();
    const subject = getSubjectFromUrl(pathname);
    const [quizResult, setQuizResult] = useState(0);

    return (
        <>
            <Header>
                <Image subject={subject} page={pathname} />
            </Header>
            <Outlet context={[quizResult, setQuizResult]}/>
        </>
    );
}

export default RootLayout;
