import "./App.css";

// import SignInPage from "./pages/SignInPage";
// import SignUpPage from "./pages/SignUpPage";
import { useState } from "react";
import { useFirebase } from "./context/Firebase";

function App() {
  const firebase = useFirebase();
  console.log("firebase methods using reactContext", firebase);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSignUp = async () => {
    setError(null);
    try {
      // Sign up the user with email and password
      const userCredential = await firebase.signUpUserWithEmailAndPassword(
        email,
        password
      );
      console.log(userCredential, "userCredential");

      const userId = userCredential.uid; // Use the unique UID from Firebase Auth
      console.log(userId, "userId");

      // Store user data in Firebase Database
      await firebase.putData("users/" + userId, { email, password });
      console.log("User signed up and data saved successfully");
    } catch (error) {
      console.error("Error during sign up:", error);
      setError(error.message); // Display error to the user
    }
  };
  return (
    <>
      <h1>Firebase React App</h1>
      {/* <h2>SignUp</h2>
      <SignUpPage />
      <br></br>
      <h2>SignIn</h2>
      <SignInPage />
      <br /> */}
      <h2>SignUp using react useContext</h2>

      <div className="signup-page">
        <div>
          <label>Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSignUp}>Sign Up</button>

        {/* Display error message if login fails */}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
}

export default App;
