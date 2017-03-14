import * as firebase from "firebase"
export class firebaseService {
    static githubLogin = () => {
        return new Promise((res, rej) => {
         var provider = new firebase.auth.GithubAuthProvider()
            firebase.auth().signInWithPopup(provider).then((user) => {
              
                res(user)
            }).catch((err) => {
                rej(err)
            })
        })
    }
}
