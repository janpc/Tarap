import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  limit,
} from 'firebase/firestore';

import firebaseConfig from './firebaseConfig';

export default firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
const products = collection(db, 'products');

export async function getProductByEan(ean) {
  try {
    const q = query(products, where('ean', '==', ean), limit(1));

    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs[0].data();

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
