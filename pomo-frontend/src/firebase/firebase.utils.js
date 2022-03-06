// authenticate users
import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

// add firebase config 
export const config = {
    apiKey: "AIzaSyAC9C9Vg-eSflSwhtvN0hC2-Tv-vNpszH8",
    authDomain: "pomo-150fc.firebaseapp.com",
    projectId: "pomo-150fc",
    storageBucket: "pomo-150fc.appspot.com",
    messagingSenderId: "1066741338699",
    appId: "1:1066741338699:web:e129fafedc4691ebf733ce",
    measurementId: "G-V61KZ94D0E"
}

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return; 
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // get the collection reference 
    const collectionRef = firestore.collection('users'); 
    // use CRUD methods on a doc ref to get a snapshot 
    const snapShot = await userRef.get(); 


    // if snapshot does not exiist create an object reference
    if(!snapShot.exists) {
        const {email} = userAuth; 
        const createdAt = new Date(); 

        try {
            await userRef.set({
                email,
                createdAt, 
                ...additionalData
            }); 
        } catch(error) {
            console.log('error creating user', error.message); 
        }
    }
    return userRef; 
}

// Initialize Firebase
firebase.initializeApp(config);


export const getUserData = async (uid) => {
    const userRef = firestore.doc(`users/${uid}`); 
    const snapShot = await userRef.get();
    const data = snapShot.data(); 
    return data
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase; 



