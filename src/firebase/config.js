import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD0kBH8XBJNZQ-Q0Hl-uDps3zPKnVEhYME",
  authDomain: "huji-innovate-app.firebaseapp.com",
  projectId: "huji-innovate-app",
  storageBucket: "huji-innovate-app.appspot.com",
  messagingSenderId: "175699621397",
  appId: "1:175699621397:web:28ba3e232767daf494801c"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }