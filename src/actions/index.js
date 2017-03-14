import { firebaseService } from "../service/firebase"




export var startLogin = (() => {
  return (dispatch) => {
    firebaseService.githubLogin().then()
  }
})
export var startLogout = (() => {
  return (dispatch) => {
    firebaseService.githubLogout().then()
  }
})
export var Login = (uid) => {
  return {
    type: "LOGIN",
    uid
  }
}
export var Logout = ()=>{
  return {
    type:"LOGOUT"
  }
}
