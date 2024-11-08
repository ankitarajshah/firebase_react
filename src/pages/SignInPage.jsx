import React, { useState } from "react";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInUser = async () => {
    try {
      console.log("Attempting SignIn");
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response, "signIn successful");
      alert("Sign-In successful");
      setError(null);
    } catch (err) {
      console.error("Sign-In error:", err);
      setError(err.message);
    }
  };
  return (
    <div className="signin-page">
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

      <button onClick={signInUser}>Sign In</button>

      {/* Display error message if login fails */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SignInPage;
