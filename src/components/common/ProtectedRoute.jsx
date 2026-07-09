import { useEffect } from "react";
import { useQuiz } from "../../contexts/QuizContext.jsx";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const { selectedQuestions } = useQuiz();

    useEffect(() => {
        if (selectedQuestions.length === 0) {
            navigate("/");
        }
    }, [selectedQuestions, navigate]);

    return selectedQuestions.length === 0 ? null : children;
}
