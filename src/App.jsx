import Header from "./components/Header.jsx";
import StartMenu from "./pages/StartMenu/StartMenu.jsx";
import Question from "./pages/QuizPage/Question.jsx";
import accessIcon from "./assets/images/icon-accessibility.svg";

function App() {
    return (
        <>
            <Header
                src={accessIcon}
                text={"Accessibility"}
                bgColor={"#F6E7FF"}
            />
            {/*  <Question />*/}
            <StartMenu />
        </>
    );
}

export default App;
