import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminRoute = ({ children }) => {
  const [checking, setChecking] = useState(true); // Cegah render duluan
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const role = localStorage.getItem("role");

    if (isLoggedIn && role === "admin") {
      setIsAllowed(true);
    }

    setChecking(false); // Selesai cek
  }, []);

  if (checking) {
    return null; // Bisa juga return <LoadingSpinner /> biar lebih smooth
  }

  // Redirect kalau bukan admin
  if (!isAllowed) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
