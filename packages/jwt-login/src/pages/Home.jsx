import LoginForm from "../components/LoginForm";
import Dashboard from "../components/Dashboard";

function Home(){
    return(
        <div>
            <h3>JWT Login</h3>
            <LoginForm />
            <Dashboard />
        </div>
    )
}

export default Home;