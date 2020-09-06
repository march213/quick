import React from 'react'
import firebase from './firebase'

const authContext = React.createContext(null)

export function ProviderAuth({ children }) {
  const auth = useProviderAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return React.useContext(authContext)
}

function useProviderAuth() {
  const [user, setUser] = React.useState(null)

  const signinWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        setUser(response.user)
        return response.user
      })
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false)
      })
  }

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((iuser) => {
      if (user) {
        setUser(user)
      } else {
        setUser(false)
      }
    })
    return () => unsubscribe()
  }, [])

  return {
    user,
    signin: signinWithGithub,
    signout,
  }
}
