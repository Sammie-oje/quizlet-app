import Header from "../components/common/Header.jsx";
import Image from "../components/common/Image.jsx";
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
