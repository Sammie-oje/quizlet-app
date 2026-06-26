import { createContext, useContext, useReducer } from "react";
import data from "../assets/data.json";

const QuizContext = createContext(null);
const QuizDispatchContext = createContext(null);

export function QuizProvider({ children }) {
    const [quizState, dispatch] = useReducer(quizReducer, initialState);
    return (
        <QuizContext value={quizState}>
            <QuizDispatchContext value={dispatch}>
                {children}
            </QuizDispatchContext>
        </QuizContext>
    );
}

export function useQuiz() {
    return useContext(QuizContext);
}
export function useQuizDispatch() {
    return useContext(QuizDispatchContext);
}

function quizReducer(quizState, action) {
    switch (action.type) {
        //When users go to the next question, they should start blank i.e correct and incorrect option styles should be removed
        case "NEXT_QUESTION":
            return {
                ...quizState,
                isOptionCorrect: null,
                selectedId: null,
                questionIndex: quizState.questionIndex + 1,
                quizResult: quizState.isOptionCorrect
                    ? quizState.quizResult + 1
                    : quizState.quizResult
            };
        case "SELECT_OPTION":
            /*Users should not be able to select options when they have submitted*/
            if (quizState.isOptionCorrect !== null) return quizState;
            return {
                ...quizState,
                selectedId: action.payload
            };
        case "SUBMIT_ANSWER":
            if (quizState.selectedId === null)
                return { ...quizState, showAlert: true };

            return {
                ...quizState,
                showAlert: false,
                isOptionCorrect: action.payload
            };
        case "SELECT_SUBJECT":
            const chosenSubject = data.quizzes.filter(
                quiz =>
                    quiz.title.toLowerCase() === action.payload.toLowerCase()
            );

            return {
                ...quizState,
                selectedSubject: action.payload,
                selectedQuestions: chosenSubject
                    ? chosenSubject[0].questions
                    : []
            };
        case "RESET":
            return {
                ...quizState,
                quizResult: 0,
                questionIndex: 0,
                selectedId: null,
                isOptionCorrect: null,
                showAlert: false,
                selectedQuestions: [],
    selectedSubject: "",
            };
        default:
            return quizState;
    }
}

const initialState = {
    allQuestions: data,
    selectedQuestions: [],
    selectedSubject: "",
    quizResult: 0,
    questionIndex: 0,
    selectedId: null,
    isOptionCorrect: null,
    showAlert: false
};
