
import StartMenu from "./pages/StartMenu/StartMenu.jsx"
import Question from "./pages/QuizPage/Question.jsx";
import Result from "./pages/ResultPage/Result.jsx";
import RootLayout from "./layout/RootLayout.jsx";
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<StartMenu />} />
                <Route path="questions" element={<Question />} />
                <Route path="result" element={<Result />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
