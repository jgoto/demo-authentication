import { NavLink } from "react-router-dom"

function NavBar(){
    return (
        <div>
            <h4><NavLink to= '/'>Home</NavLink></h4>
            <h4><NavLink to= '/Login'>Login</NavLink></h4>
        </div>        
    )
}

export default NavBar;