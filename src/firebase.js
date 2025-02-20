import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
     getAuth,
      signInWithEmailAndPassword, 
      signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDyIKLDLkezeYKOZTWn-31Flt7AXRkU8ak",
  authDomain: "netflix-clone-2593c.firebaseapp.com",
  projectId: "netflix-clone-2593c",
  storageBucket: "netflix-clone-2593c.firebasestorage.app",
  messagingSenderId: "316926407746",
  appId: "1:316926407746:web:4692d38da2a2e2602ae9db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db = getFirestore(app);

const signup = async(name,email,password ) => {
    try{
      const res = await createUserWithEmailAndPassword(auth,email,password);
      const user=res.user;
      await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
      })
    }catch(error){
       console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(" "))
    }
} 

const login= async(email,password)=>{
   try{
     await signInWithEmailAndPassword(auth,email,password)
   }catch(error){
     console.log('error')
     toast.error(error.code.split('/')[1].split('-').join(" "))
     }
}

const logout= ()=>{
     signOut(auth)
}
export{auth,db,login,signup,logout}