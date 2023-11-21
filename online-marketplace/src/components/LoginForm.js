// LoginForm.js
import React, { useState } from 'react';
import { auth } from '../services/firebase';
import '../styles/LoginForm.css';



const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Handle successful login
    } catch (error) {
      // Handle login error
      console.error(error);
    }
  };

  const handleLogout = () => {
    auth.signOut();
    // Handle successful logout
  };

  return (
    <div className="login-form">
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LoginForm;
