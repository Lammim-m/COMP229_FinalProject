// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import ProfileForm from './components/ProfileForm';
import NewProductForm from './components/NewProductForm';
import NavBar from './components/NavBar';
import { auth } from './services/firebase';
import './styles/NavBar.css';
import HomePage from './pages/HomePage';

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    // Check user authentication status
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        {userAuthenticated ? (
          <>
            <button onClick={() => auth.signOut()}>Logout</button>
            <ProfileForm />
            <NewProductForm />
           
            <HomePage />
          </>
        ) : (
          <>
            
            <LoginForm />
            <RegistrationForm />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;