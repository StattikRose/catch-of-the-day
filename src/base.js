import Rebase from "re-base"
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCQ5Qkn2r1kLvq9jPH_7OrV7FTop5P-pCU",
  authDomain: "catch-of-the-day-6f247.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-6f247.firebaseio.com",
  appId: "1:589610852054:web:4567a5e156d70c1a62b377"
})

const base = Rebase.createClass(firebaseApp.database());

// Named Export
export { firebaseApp };

// Default Export
export default base;

