import React, { useState } from 'react';
import { auth, firestore } from '../services/firebase'; 


const NewProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleCreateProduct = async () => {
    try {
      // Create a new product in Firestore
      await firestore.collection('products').add({
        name: productName,
        description: productDescription,
        price: productPrice,
        owner: auth.currentUser.uid,
        // Additional fields can be added
      });

      // Handle successful product creation
    } catch (error) {
      // Handle product creation error
      console.error(error);
    }
  };

  return (
    <div className="new-product-form">
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <textarea
        placeholder="Product Description"
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button onClick={handleCreateProduct}>Create Product</button>
    </div>
  );
};

export default NewProductForm;
