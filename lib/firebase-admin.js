import admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.NEXT_CLIENT_EMAIL,
      privateKey: process.env.NEXT_PRIVATE_KEY,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: 'https://quick-abcdd.firebaseio.com',
  })
}

export default admin.firestore()
