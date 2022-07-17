import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Header from "../Header/Header";
import LabelledInput from "../LabelledInput/LabelledInput";
import LoginSignupToggle from "../LoginSignupToggle/LoginSignupToggle";

import "./Login.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    navigate("/");
  };
  return (
    <>
      <Header />
      <div className="login-signup-main-container">
        <div className="login-signup-main-wrapper">
          <LoginSignupToggle page="login" />
          <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <LabelledInput
              label="Email"
              isRequired
              errorLabel="email"
              errors={errors}
            >
              <div className="input-container">
                <input
                  type="email"
                  className="input-field"
                  {...register("email", {
                    required: "Please input your email",
                  })}
                  placeholder="Email"
                />
              </div>
            </LabelledInput>
            <LabelledInput
              label="Password"
              isRequired
              errorLabel="password"
              errors={errors}
            >
              <div className="input-container">
                <input
                  type="password"
                  className="input-field"
                  id="exampleInputPassword1"
                  {...register("password", {
                    required: "Please input your password",
                  })}
                  placeholder="password"
                />
              </div>
            </LabelledInput>
            <div className="forgot-password-text">
              <Link to="/forgotpassword" className="forgot-password-page-Link">
                Forgot password
              </Link>
            </div>
            <button type="submit" className="login-form-submit-btn">
              Log Me In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
