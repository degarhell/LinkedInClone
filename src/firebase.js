// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {} from "dotenv/config";


const firebaseConfig = {
    apiKey: `${API_KEY}`,
    authDomain: `${AUTH_DOMAIN}`,
    projectId: `${PROJECT_ID}`,
    storageBucket: `${STORAGE_BUCKET}`,
    messagingSenderId: `${MESSAGING_SENDER_ID}`,
    appId: `${APP_ID}`,
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};