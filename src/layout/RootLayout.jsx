import Header from "../components/common/Header.jsx";
import Image from "../components/common/Image.jsx";
import { getSubjectFromUrl } from "../utils/getSubjectFromUrl.js";
import { useLocation, Outlet } from "react-router-dom";
import { QuizProvider } from "../contexts/QuizContext.jsx";

function RootLayout() {
    const { pathname } = useLocation();
    const subject = getSubjectFromUrl(pathname);

    return (
        <QuizProvider>
            <Header>
                <Image subject={subject} page={pathname} />
            </Header>
            <Outlet />
        </QuizProvider>
    );
}

export default RootLayout;
