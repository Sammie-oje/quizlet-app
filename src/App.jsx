import StartMenu from "./pages/StartMenu/StartMenu.jsx";
import Question, { quizLoader } from "./pages/QuizPage/Question.jsx";
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
                <Route
                    path="quiz/:subject"
                    element={<Question />}
                    loader={quizLoader}
                />
                <Route path="result/:subject" element={<Result />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
