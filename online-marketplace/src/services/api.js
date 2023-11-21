// src/services/api.js
import { firestore } from './firebase';

// Example function to get data
export const getData = async () => {
  const data = await firestore.collection('your_collection').get();
  return data.docs.map((doc) => doc.data());
};
