import Dashboard from "../components/Dashboard";
import NavBar from "../components/NavBar";
import {useAuth} from '../hooks/useAuth'

function Home(){
    const authenticated = useAuth();
    return(
        <div>
            <h3>JWT Dashboard</h3>   
            {(!authenticated) && <p>You are not logged in</p>}         
            {(authenticated) && <Dashboard />}
            <NavBar />
        </div>
    )
}

export default Home;