import { Navigate } from "react-router-dom";

const UserRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userRole = localStorage.getItem("role");

  if (!isLoggedIn || userRole !== "user") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default UserRoute;
