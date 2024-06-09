import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Loading />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/"></Navigate>;
};

export default PrivateRoute;
