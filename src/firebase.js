import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCMR4Fo11EQxc9hUDuRCqWYTabnHKLRfKo",
  authDomain: "fitbuddy-6e228.firebaseapp.com",
  projectId: "fitbuddy-6e228",
  storageBucket: "fitbuddy-6e228.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
