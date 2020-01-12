import { GoogleSignin, statusCodes } from '@react-native-community/google-signin'
import { firebase } from '@react-native-firebase/auth'

const AuthService = {
    async login() {
        let credential = null
        let user = null

        await GoogleSignin.signIn()
            .then(response => {
                user = response.user
            })
            .catch(error => {
                console.log(error)
                return error
            })

        await GoogleSignin.getTokens()
            .then(credentials => {
                credential = firebase.auth.GoogleAuthProvider.credential(credentials.idToken, credentials.accessToken)
            })

        await firebase.auth().signInWithCredential(credential)
            .catch(error => {
                console.log(error)
                return error
            })

        return user
    },
    async logout() {
        await firebase.auth().signOut().then(() => {
            return true
          }).catch(error => {
            console.log(error)
            return false
          })
    }
    
}

export default AuthService