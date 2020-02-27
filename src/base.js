import Rebase from "re-base"
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  appId: ""
})

const base = Rebase.createClass(firebaseApp.database());

// Named Export
export { firebaseApp };

// Default Export
export default base;

