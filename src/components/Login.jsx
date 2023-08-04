import { useState } from "react";
import { useAuth } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState(null);
    const { login } = useAuth();

    const handleLogin = () => {
        login(user);
    };
    return (
        <>
            <h1>Login page</h1>
            <label>Name:</label>
            <input type="text" onChange={(e) => setUser(e.target.value)} />
            <button type="submit" onClick={handleLogin}>
                Login
            </button>
        </>
    );
};

export default Login;