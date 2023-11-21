// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ProfileForm from './components/ProfileForm';
import NewProductForm from './components/NewProductForm';

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/new-product" element={<NewProductForm />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
