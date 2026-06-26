import Header from "../components/common/Header.jsx";
import Image from "../components/common/Image.jsx";
import { useLocation, Outlet } from "react-router-dom";
import { QuizProvider } from "../contexts/QuizContext.jsx";

function RootLayout() {
    const { pathname } = useLocation();
  
    return (
        <QuizProvider>
            <Header>
                <Image page={pathname}/>
            </Header>
            <Outlet />
        </QuizProvider>
    );
}

export default RootLayout;
