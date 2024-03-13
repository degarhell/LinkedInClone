// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDRgSCBzNoXWu4NDBr2KSnDnZhymH-9_dY",
    authDomain: "linkedin-clone-bca45.firebaseapp.com",
    projectId: "linkedin-clone-bca45",
    storageBucket: "linkedin-clone-bca45.appspot.com",
    messagingSenderId: "818166696324",
    appId: "1:818166696324:web:7e658853c06fd05c3c75d1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};