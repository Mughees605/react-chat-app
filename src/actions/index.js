import { firebaseService } from "../service/firebase"
import firebase from "../config/index.js"
export var startLogin = (() => {
  return (dispatch, getState) => {
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
export var Logout = () => {
  return {
    type: "LOGOUT"
  }
}
export var FetchData = (data) => {
  return {
    type: "FETCH_DATA",
    data
  }
}
export var handleMessage = (message) => {
  return (dispatch, getState) => {
    var uid = firebase.auth().currentUser;
    firebase.database().ref().child("message").push({ message: message, img: uid.photoURL }).then(() => {
      return firebase.database().ref().child("user/" + uid.uid + "").push({ text: message, img: uid.photoURL })
    })
  }
}
export var fetchMessage = () => {
  return (dispatch, getState) => {
    firebase.database().ref().child("message").on("value", (snapshot) => {
      var userData = snapshot.val();
      var arr = []
      for(var key in userData){
        arr.push({
          ...userData[key]
        })
      }
      dispatch(FetchData(arr));
    })
  }
}

