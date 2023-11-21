//ProfileForm.js
import React, { useState } from 'react';
import { auth, firestore } from '../services/firebase';

const ProfileForm = () => {
  const [newEmail, setNewEmail] = useState('');

  const handleProfileUpdate = async () => {
    try {
      // Update user email in Firebase authentication
      await auth.currentUser.updateEmail(newEmail);

      // Update user email in Firestore
      await firestore.collection('users').doc(auth.currentUser.uid).update({
        email: newEmail,
      });

      // Handle successful profile update
    } catch (error) {
      // Handle profile update error
      console.error(error);
    }
  };

  return (
    <div className="profile-form">
      <input
        type="text"
        placeholder="New Email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <button onClick={handleProfileUpdate}>Update Profile</button>
    </div>
  );
};

export default ProfileForm;
