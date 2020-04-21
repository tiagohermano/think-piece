import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDH0FQquEkbXqhy8-2MhOt0T5SY08pa7Ps",
  authDomain: "think-piece-c8500.firebaseapp.com",
  databaseURL: "https://think-piece-c8500.firebaseio.com",
  projectId: "think-piece-c8500",
  storageBucket: "think-piece-c8500.appspot.com",
  messagingSenderId: "1044433194676",
  appId: "1:1044433194676:web:6bf6edb9492b652b0b91e1",
  measurementId: "G-ML9XL6NLY7"
};

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()

export const provider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()

window.firebase = firebase

export default firebase