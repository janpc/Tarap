import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import firebaseConfig from './firebaseConfig';

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();

export async function loginWithEmail(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    return { success: true, user };
  } catch (error) {
    return { success: false, error };
  }
}

export async function signinWithEmail(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    return { success: true, user };
  } catch (error) {
    return { success: false, error };
  }
}

export async function signinWithGoogle() {
  try {
    console.log('google');

    const result = await signInWithPopup(auth, googleAuthProvider);
    console.log(result);
    const user = result.user;
    return { success: true, user };
  } catch (error) {
    return { success: false, error };
  }
}

export function signOutUser() {
  signOut(auth)
    .then(() => {
      return null;
    })
    .catch(error => {
      return error;
    });
}

export default auth;
