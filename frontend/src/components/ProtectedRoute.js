import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props }) => {
  return props.loggedIn ? <Component {...props} /> : <Navigate to="/sign-up" />;
};

export default ProtectedRoute;
