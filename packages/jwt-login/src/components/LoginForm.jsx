import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password}),
            });

            const data = await response.json();

            if (response.ok){
                localStorage.setItem('token', data.token);
                console.log("Stored token: ", data.token);
                setMessage('OK: ' + data.message);
                navigate('/');
            }
            else{
                setMessage('Fail: ' + data.message);
            }
            
        } catch (error) {
            setMessage("Something went wrong");
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Email <input type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                required />
                <br />
                Password <input type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                required />
                <button type='submit'>Login</button>
                {message && <p>{message}</p>}
            </form>
            
        </div>
    )
}

export default LoginForm;