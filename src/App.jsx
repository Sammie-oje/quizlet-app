import Header from "./components/Header.jsx";
import Image from "./components/Image.jsx";
import StartMenu from "./pages/StartMenu/StartMenu.jsx";
import Question from "./pages/QuizPage/Question.jsx";
import Result from "./pages/ResultPage/Result.jsx";
import accessIcon from "./assets/images/icon-accessibility.svg";

function App() {
    return (
        <>
            <Header>
                <Image                 src={accessIcon}
                text={"Accessibility"}
                bgColor={"#F6E7FF"}/>
            </Header>
            {/*<Question />*/}
            {/*<StartMenu />*/}
            <Result />
        </>
    );
}

export default App;
