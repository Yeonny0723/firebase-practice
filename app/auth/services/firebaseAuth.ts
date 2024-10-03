import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

import { auth } from '@/lib/firebase/firebaseClient';

export async function signUpWithEmail(email: string, password: string) {
  try {
    const { user: _user } = await createUserWithEmailAndPassword(auth, email, password); // TODO
  } catch (error) {
    console.error('Error signing up with email', error);
  }
}

export async function signInWithEmail(email: string, password: string) {
  try {
    const { user: _user } = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error signing in with email', error);
  }
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Error signing in with Google', error);
  }
}

export async function signOut() {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Error signing out with Google', error);
  }
}

export async function resetPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error('Error resetting password', error);
  }
}

export async function subscribeToAuthChange(cbFunc: (user: unknown) => void) {
  auth.onAuthStateChanged((user) => {
    cbFunc(user);
  });
}

const FirebaseAuthService = {
  signUpWithEmail,
  signInWithEmail,
  signInWithGoogle,
  signOut,
  resetPassword,
  subscribeToAuthChange,
};

export default FirebaseAuthService;
