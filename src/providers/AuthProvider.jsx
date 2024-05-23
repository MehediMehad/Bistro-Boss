import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null)
    const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider()

    // createUser
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // signIn user || login user
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email, password)
    }

    // Google SignIn 
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // logOut User

    const logOut = () =>{
        setLoading(false);
        return signOut(auth);

    }
    const updateUserProfile = (name, photo) =>{
      return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    // Manage Users in Firebase
    useEffect( () =>{
     const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        })
        return () =>{
            return unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;