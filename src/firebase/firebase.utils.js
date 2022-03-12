import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "pi2019-react-ecommerce",
    storageBucket: "pi2019-react-ecommerce.appspot.com",
    messagingSenderId: "927796097845",
    appId: "",
    measurementId: "G-ENWBEVFG1M"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
