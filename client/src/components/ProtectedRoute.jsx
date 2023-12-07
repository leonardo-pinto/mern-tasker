import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

function ProtectedRoute({ children }) {
  return !isAuthenticated() ? <Navigate to="/login" /> : children;
}

export default ProtectedRoute;
