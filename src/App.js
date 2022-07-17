import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import HomePage from "./Component/HomePage/HomePage";
import ForgotPassword from "./Component/ForgotPassword/ForgotPassword";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
