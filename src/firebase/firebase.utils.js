import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config =
    {
        apiKey: "AIzaSyByvjntqQdNgwuifCgHoSDSf2Ugx8DKRJ0",
        authDomain: "crwn-db-3b2ec.firebaseapp.com",
        projectId: "crwn-db-3b2ec",
        storageBucket: "crwn-db-3b2ec.appspot.com",
        messagingSenderId: "637239230498",
        appId: "1:637239230498:web:9c9d082a165c69af3a8a7b",
        measurementId: "G-PP83WC710H"
    };
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase