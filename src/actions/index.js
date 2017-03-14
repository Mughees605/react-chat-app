import {firebaseService} from "../service/firebase"




export var startLogin = (()=>{
  return (dispatch)=>{
    firebaseService.githubLogin().then()
  }
})
export var Login = (uid)=>{
    return {
        type :"LOGIN",
        uid
    }
}
