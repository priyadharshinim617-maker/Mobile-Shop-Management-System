import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    alert("Please Login First");
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;