import React, { useContext } from "react"
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext"

export function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { setIsAuth } = useContext(AuthContext);
    const history = useHistory();
    return <>
        <h2>Login Page</h2>
        <div>
            <input type="text" placeholder="Username" value={username} onChange={(e) => {
                setUsername(e.target.value);
            }}></input>
            <input type="password" placeholder="Password" value={password} onChange={(e) => {
                setPassword(e.target.value);
            }}></input>
            <button onClick={() => {
                if (username === "Somesh" && password === "12345") {
                    setIsAuth(true);
                    setPassword("");
					setUsername("");
					history.push("/dashboard");
                } else {
                    alert("Invalid Credentials")
                }
            }}>Login</button>
    </div>
    </>
}