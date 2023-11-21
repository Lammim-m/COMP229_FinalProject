// HomePage.js
import React, { useEffect, useState } from 'react';
import { firestore, auth } from '../services/firebase'; 



const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from Firestore
    const unsubscribe = firestore.collection('products').onSnapshot((snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Welcome to our Online Market Store!</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
            {auth.currentUser && auth.currentUser.uid === product.owner && (
              <>
                <button>Edit Product</button>
                <button>Delete Product</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
