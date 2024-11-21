/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import AuthContext from "./context";
import { auth } from "./Firebase";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthProvider = ({ children }) => {
  // state for user
  const [user, setUser] = useState([]);

  // register
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google
  const google = (provider) => {
    return signInWithPopup(auth, provider);
  }

  //observer
  useEffect(() => {
    const observer = onAuthStateChanged(auth, (userData) => {
      setUser(userData);
    });

    return () => {
      observer();
    };
  }, []);

  console.log(user);

  // Context Value
  const contextValue = {
    user,
    setUser,
    login,
    register,
    google,
  };

  return (
    <div>
      <AuthContext.Provider value={contextValue}>
        {children}

        <ToastContainer
          position="top-center"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
