import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7WHBaMGPuNNCu7cnLKCoVOsJeYHIMb3A",
  authDomain: "facebook-clone-9f652.firebaseapp.com",
  projectId: "facebook-clone-9f652",
  storageBucket: "facebook-clone-9f652.appspot.com",
  messagingSenderId: "482177629937",
  appId: "1:482177629937:web:42013be7b900f49f84b350",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
