import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] = useState("");

    const signInUsingGoogle = () => {
        setIsLoading(true);
        

        return signInWithPopup(auth, googleProvider)
        
        .finally(() => setIsLoading(false));
    };

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {})
        .finally(() => setIsLoading(false));
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }

      const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        createUser
    }
}

export default useFirebase;