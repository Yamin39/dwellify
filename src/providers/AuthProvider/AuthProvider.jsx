import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [profileLoader, setProfileLoader] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user using email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login using email and password
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login using google
  const googleProvider = new GoogleAuthProvider();
  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // login using github
  const githubProvider = new GithubAuthProvider();
  const logInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // update user profile
  const updateNameAndPhoto = (currentUser, name, photoUrl) => {
    return updateProfile(currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  // log out a user using email and password
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current User: ", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, [profileLoader]);

  const authInfo = {
    user,
    setProfileLoader,
    loading,
    logIn,
    createUser,
    logInWithGoogle,
    logInWithGithub,
    updateNameAndPhoto,
    logOut,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
