//RegistrationForm.js
import React, { useState } from 'react';
import { auth, firestore } from '../services/firebase';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = async () => {
        try {
            // Create user account using Firebase authentication
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);

            // Store additional user information in Firestore
            await firestore.collection('users').doc(userCredential.user.uid).set({
                email,
                // Additional fields can be added
            });

            // Handle successful registration
        } catch (error) {
            // Handle registration error
            console.error(error);
        }
    };

    return (
        <div className="registration-form">
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
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
};

export default RegistrationForm;
