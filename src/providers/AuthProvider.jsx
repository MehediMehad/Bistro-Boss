import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null)
    const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

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
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;