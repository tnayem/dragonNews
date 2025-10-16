import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword,signOut, updateProfile  } from "firebase/auth";
import auth from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
const [user,setUser]= useState()
const [loading,setLoading] = useState(true)
console.log(user);
// create user with email and password
const registeredUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth , email, password)
}
// LogOut
const logOutUser=()=>{
    return signOut(auth)
}
// LogIn
const logIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}
// Update user profile 
const updatedUser = (updatedData)=>{
  return updateProfile(auth.currentUser,updatedData)
}
  const authData = {
    registeredUser,
    user,
    setUser,
    logOutUser,
    logIn,
    loading,
    setLoading,
    updatedUser
  };
  // Obsurber
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unsubscribe();
    }
  },[])
//   console.log(user);
  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;