// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOI1LcDsNjder2zatRiZKGJi7ryhr39d8",
  authDomain: "netflix-clone-36c11.firebaseapp.com",
  projectId: "netflix-clone-36c11",
  storageBucket: "netflix-clone-36c11.firebasestorage.app",
  messagingSenderId: "644653998638",
  appId: "1:644653998638:web:7091d14bbeb12fcb46b5bf",
  measurementId: "G-6ZNLQN55QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth(app);
const db=getFirestore(app);

const signUp=async(name,email,password)=>{
    try{
        const response=await createUserWithEmailAndPassword(auth,email,password);
        const user=response.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }

    
}

const login=async (email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password)
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout=()=>{
    signOut(auth);
}
export {auth,db,login,signUp,logout};