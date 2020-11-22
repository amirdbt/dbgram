import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSZwgPxXWDipHl1w_zoHzsCR4RsebHlBk",
  authDomain: "dbgram-4c7e5.firebaseapp.com",
  databaseURL: "https://dbgram-4c7e5.firebaseio.com",
  projectId: "dbgram-4c7e5",
  storageBucket: "dbgram-4c7e5.appspot.com",
  messagingSenderId: "274740005088",
  appId: "1:274740005088:web:37b9633b3ba83f07bfa885",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
