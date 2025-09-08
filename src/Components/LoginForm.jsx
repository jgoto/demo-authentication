export default function LoginForm(){
    const handleClick = () => {
        alert("Hello World!");
    }

    return(
        <div>
            <h3>Please enter your username and password</h3>
            <form>
                <label>Username: <input type="text" /></label>
                <label>Password: <input type="password" /></label>
                <button type="button" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}