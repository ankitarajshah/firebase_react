import "./App.css";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
function App() {
  return (
    <>
      <h1>Firebase React App</h1>
      <h2>SignUp</h2>
      <SignUpPage />
      <br></br>
      <h2>SignIn</h2>
      <SignInPage />
    </>
  );
}

export default App;
