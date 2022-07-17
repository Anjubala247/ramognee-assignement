import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./ForgotPassword.css";

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <>
      <div className="forgotpassword_container">
        <div className="forgotpassword_dropbox">
          <div className="forgotpassword_dropbox_content">
            <div className="forgotpassword_dropbox_title">
              Please Provide your Registered Email id to reset Password
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: "Please input your email",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors["email"] && (
                <div className="content-left error-message">
                  {errors["email"].message}
                </div>
              )}
              <div className="forgotpassword_dropbox_btns">
                <button
                  type="submit"
                  className="forgotpassword_btn forgotpassword_dropbox_resetbtn"
                >
                  Reset password
                </button>
                <button className="forgotpassword_btn forgotpassword_dropbox_login-btn">
                  <Link
                    to="/login"
                    className="forgotpassword_dropbox_login-page-Link"
                  >
                    Login/Signup
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
