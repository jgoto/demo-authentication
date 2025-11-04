function Dashboard(){
    const testPing = async (e) => {
        try {
            const response = await fetch('http://localhost:5000/ping', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            });

            const data = await response.json;

            if (response.ok){
                alert("Ping Pong")
            }
            else{
                console.log("ping failed")
            }

        } catch (error) {
            setMessage("Something went wrong");
            console.error(error);
        }
    }

    const testProtectedPing = async (e) => {
        try {
            const token = localStorage.getItem('token');
            console.log(token);
            const response = await fetch('http://localhost:5000/protectedping', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`}
            });

            const data = await response.json;

            if (response.ok){
                alert("Protected Ping Pong")
            }
            else{
                console.log("protected ping failed")
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <button type="button" onClick={testPing}>Test Ping</button>
            <button type="button" onClick={testProtectedPing}>Test Protected Ping</button>
        </div>
    )
}

export default Dashboard;