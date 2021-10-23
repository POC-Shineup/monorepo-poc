import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';

import "firebase/auth";

import {firebaseConfig} from "./firebase"

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const fireStore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();

GoogleProvider.setCustomParameters({propmt: "select_account"});

//for google signin popup
export const SignInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

// for saving user data in firebase
export const handleUserProfile = async(userAuth, additionalData) => {
  if(!userAuth) return;
  const {uid} = userAuth;
  const userRef = fireStore.doc(`users/${uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const timestamp = new Date();
    try {
        await userRef.set({
            displayName,
            email,
            createdData: timestamp,
            ...additionalData
        })
      }catch(err){
        console.log(err);
      }
  }
  return userRef;
}