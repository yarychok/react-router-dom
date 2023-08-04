import { Navigate, Outlet, useLocation } from "react-router-dom";
import Unauthorized from "../components/Unathorized";
import { useAuth } from "../provider/AuthProvider";

const Authorization = ({ permissions }) => {
    const { user } = useAuth();
    const location = useLocation();
    
    if (user.username) {
        const userPermission = user.permissions;
        const isAllowed = permissions.some((allowed) => userPermission.includes(allowed));

        return isAllowed ? <Outlet /> : <Unauthorized />;
    }

    return <Navigate to="/login" state={{ path: location.pathname }} replace />
};

export default Authorization;