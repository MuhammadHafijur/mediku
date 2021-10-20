import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  //   Google Sign in
  const signInUsingGoogle = () => {
    setIsLoading(true);

    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };

// //   handle Login

// const handleLogin = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//   .then((result) => {

//     const {email, displayName, photoURL} = result.user;
//         const userInfo = {
//           name: displayName,
//           email: email,
//           photo: photoURL
//         };
//         setUser(userInfo)
//         setError("");
//   })
//   .catch((error) => {
//     // const errorCode = error.code;
//     const errorMessage = error.message;
//     setError(errorMessage);
//   });
//   }

  //handle Login

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  return {
    user,
    isLoading,
    signInUsingGoogle,
    handleLogin,
    logOut,
    createUser,
    auth
  };
};

export default useFirebase;
