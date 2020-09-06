import * as fs from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!fs.apps.length) {
  fs.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: 'https://quick-abcdd.firebaseio.com',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: 'quick-abcdd.appspot.com',
    messagingSenderId: '971236456952',
    appId: '1:971236456952:web:6c04ee0887dcb2fa163e0d',
  })
}

export default fs
