import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
// firestore for the data base and auth for the authentication 
const config={
    apiKey: "AIzaSyBQ7bLUp2I1vtC_yv8lptJKwFOPoXOO2oc",
    authDomain: "crwn-db-017.firebaseapp.com",
    projectId: "crwn-db-017",
    storageBucket: "crwn-db-017.appspot.com",
    messagingSenderId: "947818906631",
    appId: "1:947818906631:web:d94718ec635f4d3f1496a2",
    measurementId: "G-D2M1ZM60X1"
}
firebase.initializeApp(config)
export const auth=firebase.auth()
export const firestore=firebase.firestore()
// first we are setting up the authentication to be with google 
const provider=firebase.auth.GoogleAuthProvider();
// then we are selecting what the prompt should be 
provider.setCustomParameters({prompt:'select_account'})
// then we are exporting 'signInWithGoogle' which will be used ahead in our project to execute the authentication 
export const signInWithGoogle=auth.signInWithPopup(provider)
