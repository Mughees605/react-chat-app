import { firebaseService } from "../service/firebase"
import firebase from "../config/index.js"
export var startLogin = (() => {
  return (dispatch,getState) => {
    firebaseService.githubLogin().then()
  }
})
export var startLogout = (() => {
  return (dispatch) => {
    firebaseService.githubLogout().then((user) => {
    })
  }
})
export var Login = (uid) => {
  return {
    type: "LOGIN",
    uid
  }
}
export var handleMessage = (message) => {
  return (dispatch,getState)=>{
    var uid = firebase.auth().currentUser;
     firebase.database().ref().child("message").push({message:message,img:uid.photoURL}).then(()=>{
       return firebase.database().ref().child("user/" +uid.uid+ "").push({text:message,img:uid.photoURL})
     })
  }
}
export var fetchMessage = ()=>{
  return (dispatch,getState)=>{
    firebase.database().ref().child("message").on("value",(snapshot)=>{
      console.log(snapshot.val(), " fetch")
    })
  }
}
export var Logout = () => {
  return {
    type: "LOGOUT"
  }
}
