// Frontend code
// Filename - Login.js

import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch('http://localhost:5000/login', {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let result = await response.json();
            console.warn(result);
            if (response.ok) {
                alert("Login successful");
                // handle successful login (e.g., redirect to a different page or save user info)
            } else {
                alert(result.error || "Login failed");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={handleOnSubmit}>Login</button>
            </form>
        </>
    );
}

export default Login;
