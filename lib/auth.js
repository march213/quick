import React from 'react'
import firebase from './firebase'

const authContext = React.createContext(null)

export function AuthProvider({ children }) {
  const auth = useProviderAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return React.useContext(authContext)
}

function useProviderAuth() {
  const [user, setUser] = React.useState(null)

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser)
      setUser(user)
      return user
    } else {
      setUser(false)
      return false
    }
  }

  const signinWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => handleUser(response.user))
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(undefined))
  }

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser)
    return () => unsubscribe()
  }, [])

  return {
    user,
    signin: signinWithGithub,
    signout,
  }
}

function formatUser(user) {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
  }
}
