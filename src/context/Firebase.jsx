import { createContext, useContext } from "react";
import { app } from "../firebase";
// import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

// // Initialize Firebase only once
// const firebaseApp = initializeApp(app);
// console.log(firebaseApp, "firebaseApp");

//instance for fireabase app for auth
const firebaseAuth = getAuth(app);
console.log(firebaseAuth, "firebaseAuth");

//instance for database
const database = getDatabase(app);
console.log(database, "database");

const FirebaseContext = createContext(null);

//create custom firebase hook
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signUpUserWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      return userCredential.user; // Return user info on successful sign-up
    } catch (error) {
      console.error("Error signing up:", error.message);
      throw error; // Throw error to be handled by the component
    }
  };
  const putData = async (key, data) => {
    try {
      await set(ref(database, key), data); // Use 'key' as the path and 'data' as the value
      console.log("Data successfully saved to Firebase Database");
    } catch (error) {
      console.error("Error saving data:", error.message);
      throw error; // Re-throw for handling in the component if needed
    }
  };
  return (
    <FirebaseContext.Provider
      value={{ signUpUserWithEmailAndPassword, putData }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
