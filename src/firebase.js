import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCMR4Fo11EQxc9hUDuRCqWYTabnHKLRfKo',
  authDomain: 'fitbuddy-6e228.firebaseapp.com',
  projectId: 'fitbuddy-6e228',
  storageBucket: 'fitbuddy-6e228.firebasestorage.app',
  messagingSenderId: '673243880543',
  appId: '1:673243880543:web:ed4bf24bd478f90d850fea',
  measurementId: 'G-SL8BX9L136',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
