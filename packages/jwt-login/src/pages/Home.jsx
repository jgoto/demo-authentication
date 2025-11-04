import Dashboard from "../components/Dashboard";
import NavBar from "../components/NavBar";

function Home(){
    return(
        <div>
            <h3>JWT Dashboard</h3>            
            <Dashboard />
            <NavBar />
        </div>
    )
}

export default Home;