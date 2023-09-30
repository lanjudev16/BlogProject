import React, { createContext, useEffect, useState } from 'react';
export const AuthContext=createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
const AuthProvider = ({children}) => {  
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    //create user
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //sign in user
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // sign out user
    const logOut=()=>{
        return signOut(auth)
    }
    //update user profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    const authInfo={
        createUser,
        user,
        logIn,
        logOut,
        updateUserProfile,
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);  
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;