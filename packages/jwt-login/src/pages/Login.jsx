import LoginForm from "../components/LoginForm"
import NavBar from "../components/NavBar"
import LogoutBtn from "../components/LogoutBtn";
import { useAuth } from "../hooks/useAuth";

function Login(){
    const authenticated = useAuth();

    return (
        <div>
            <h3>Login</h3>
            {(!authenticated) && <LoginForm />}
            {(authenticated) && <LogoutBtn />}
            <NavBar />
        </div>
    )
}

export default Login;