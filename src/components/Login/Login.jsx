import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this line
import { useAuth } from './AuthContext';
import './LoginPage.css'; // Assume you have a separate CSS file for styling

const LoginPage = () => { // Removed the unused prop { onLoginSuccess }
    const { login } = useAuth();
    const navigate = useNavigate(); // Correctly initialized useNavigate hook
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');

        // Using hardcoded credentials for demonstration purposes
        const DEFAULT_USERNAME = 'admin';
        const DEFAULT_PASSWORD = 'password';

        // Simplified login logic for demonstration
        if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
            login(); // Update authentication state
            navigate('/food'); // Redirect to the food list page upon successful login
        } else {
            setError('Invalid credentials.'); // Display error message for incorrect credentials
        }
    };
        // try {
        //     // Replace with your API endpoint
        //     const response = await axios.post('http://localhost:2000/auth/login', { username, password });
        //     // Handle the response accordingly
        //     if (response.data.success) {
        //         onLoginSuccess(response.data.token); // You could pass the token to a handler
        //     } else {
        //         setError('Invalid credentials.');
        //     }
        // } catch (err) {
        //     // Handle the error accordingly
        //     setError('Login failed.');
        //     console.error('Login error:', err);
        // }
    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2>Login</h2>
                {error && <div className="error">{error}</div>}
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Log In</button>
            </form>
        </div>
    );
};

export default LoginPage;
