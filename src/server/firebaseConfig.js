import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCKzAh4C4iS2tIOl4nt0QMYSFioPRNOjYg",
    authDomain: "whatsappclone-16b4f.firebaseapp.com",
    projectId: "whatsappclone-16b4f",
    storageBucket: "whatsappclone-16b4f.appspot.com",
    messagingSenderId: "788908107993",
    appId: "1:788908107993:web:a6b40fa73e1161e861f6c8",
    measurementId: "G-VGJQQ7RWGV"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };