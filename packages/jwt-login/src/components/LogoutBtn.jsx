import {logout} from '../utils/auth'

function LogoutBtn(){
    const handleLogout = () => {
        logout();
        window.location.reload();
    }
    return (
        <button type="submit" onClick={handleLogout}>Logout</button>
    )
}

export default LogoutBtn;