import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAoRKz7uA-yUqyFWDnDh33lDPadHgBJupU",
  authDomain: "snapchat-clone-f9ba2.firebaseapp.com",
  projectId: "snapchat-clone-f9ba2",
  storageBucket: "snapchat-clone-f9ba2.appspot.com",
  messagingSenderId: "745021550815",
  appId: "1:745021550815:web:883a7bd3aa9f839bc5796a",
  measurementId: "G-RS7204GPB9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, storage, provider}