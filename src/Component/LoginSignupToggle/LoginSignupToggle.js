import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignupToggle.css";
function LoginSignupToggle({ page }) {
  let navigate = useNavigate();

  function onLoginClick() {
    navigate("/login");
  }

  function onSignupClick() {
    navigate("/signup");
  }
  return (
    <div className="login-form-header">
      <div
        onClick={onLoginClick}
        className={`login-form-tab ${page === "login" ? "active" : ""}`}
      >
        LOGIN
      </div>
      <div
        onClick={onSignupClick}
        className={`login-form-tab ${page !== "login" ? "active" : ""}`}
      >
        SIGNUP
      </div>
    </div>
  );
}

export default LoginSignupToggle;
