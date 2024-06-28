// Frontend code
// Filename - Register.js

import { useState } from 'react';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch('http://localhost:5000/register', {
                method: "POST",
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let result = await response.json();
            console.warn(result);
            if (response.ok) {
                alert("Registration successful");
                setName("");
                setEmail("");
                setPassword("");
            } else {
                alert(result.error || "Registration failed");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    }

    return (
        <>
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={handleOnSubmit}>Register</button>
            </form>
        </>
    );
}

export default Register;
