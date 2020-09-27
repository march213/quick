import db from '@/lib/firebase-admin'

const getSites = async (_, res) => {
  let sites = []
  try {
    const snapshot = await db.collection('sites').get()
    if (snapshot) {
      snapshot.forEach((doc) =>
        sites.push({
          id: doc.id,
          ...doc.data(),
        })
      )
    }
    res.status(200).json({ sites })
  } catch (e) {
    console.log('An error occured', e)
    res.status(500).json({ message: 'Bad request' })
  }
}

export default getSites
