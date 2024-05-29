import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)
    const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()

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
            if (currentUser) {
                // get token and store client
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if (res.data.token) {
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false)
                    }
                })

            }
            else{
                // TODO: remove token(if token stored in the client side)
                localStorage.removeItem('access-token');
            }
            console.log(currentUser);
            setLoading(false)
        })
        return () =>{
            return unsubscribe();
        }
    },[axiosPublic])


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