import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
    const hasStarted = sessionStorage.getItem("hasStarted") === "true";
    if (!hasStarted) return <Navigate to="/" replace />;
    return children;
}