import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase.config.js";

// Create Contex Authentication
export const AuthContex = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // make Github Provider
  const githubProvider = new GithubAuthProvider();

  // Create User Function
  const createUser = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // User logout
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      // get token and store client
      //   const userInfo = { email: currentUser?.email };
      //   axiosPublic.post("/auth", userInfo).then((res) => {
      //     if (res.data.token) {
      //       localStorage.setItem("access-token", res.data?.token);
      //       setLoading(false);
      //     } else {
      //       // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
      //       localStorage.removeItem("access-token");
      //       setLoading(false);
      //     }
      //   });
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = { createUser, logOut, user, loading };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
