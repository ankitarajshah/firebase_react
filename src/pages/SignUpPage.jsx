import React, { useState } from "react";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const createUser = async () => {
    try {
      console.log("Attempting to sign up with:", { email, password });
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Sign-up successful:", response);
      alert("Sign-up successful");
      setError(null);
    } catch (err) {
      console.error("Sign-up error:", err);
      setError(err.message);
    }
  };

  return (
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

      <button onClick={createUser}>Sign Up</button>

      {/* Display error message if login fails */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SignUpPage;
