import firebase from 'firebase';
require("@firebase/firestore")
import "firebase/auth";

var firebaseConfig = {
 //Add configuration here 
  apiKey: "AIzaSyCHTwHk-a-BDsFde8OLnkStxPbnyTu495E",
  authDomain: "complaint-forum-9183e.firebaseapp.com",
  projectId: "complaint-forum-9183e",
  storageBucket: "complaint-forum-9183e.appspot.com",
  messagingSenderId: "559333068963",
  appId: "1:559333068963:web:772dd2a63742f4993d2f16"
 
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
  export default firebase.firestore()

