import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Col, Row } from "antd";
import Header from "../Header/Header";
import LabelledInput from "../LabelledInput/LabelledInput";
import LoginSignupToggle from "../LoginSignupToggle/LoginSignupToggle";
import { useNavigate } from "react-router-dom";
import { getCountries, getStates, getCities } from "../../Utility/Utility";
import "./SignUp.css";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  let navigate = useNavigate();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    navigate("/login");
  };

  useEffect(() => {
    reset({
      ...getValues(),
      state_id: "",
      city_id: "",
    });
  }, [watch("country_id")]);

  useEffect(() => {
    reset({
      ...getValues(),
      city_id: "",
    });
  }, [watch("state_id")]);
  return (
    <>
      <Header />
      <div className="login-signup-main-container">
        <div className="login-signup-main-wrapper">
          <LoginSignupToggle page="signup" />
          <div className="signup_userdetails">
            <form
              className="signup-form-container"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={24}>
                  <LabelledInput
                    label="Individual/Enterprise/Government"
                    isRequired
                    errorLabel="identity"
                    errors={errors}
                  >
                    <div className="radio-container-btns">
                      <span>
                        <input
                          className="radio-field"
                          type="radio"
                          value="1"
                          {...register("identity", {
                            required: "Please input your valid id",
                          })}
                        />
                        <label for="individual" className="radio-label">
                          Individual
                        </label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          className="radio-field"
                          value="2"
                          {...register("identity", {
                            required: "Please input your valid identity",
                          })}
                        />
                        <label for="enterprise" className="radio-label">
                          Enterprise
                        </label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          className="radio-field"
                          value="3"
                          {...register("identity", {
                            required: "Please input your valid identity",
                          })}
                        />
                        <label for="Government" className="radio-label">
                          Government
                        </label>
                      </span>
                    </div>
                  </LabelledInput>
                </Col>
                <Col span={12}>
                  <LabelledInput
                    label="First name"
                    isRequired
                    errorLabel="first_name"
                    errors={errors}
                  >
                    <input
                      className="full-width"
                      type="text"
                      placeholder="First name"
                      {...register("first_name", {
                        required: "Please input your valid First Name",
                      })}
                    />
                  </LabelledInput>
                </Col>
                <Col span={12}>
                  <LabelledInput label="Last name">
                    <input
                      className="full-width"
                      type="text"
                      Placeholder="Last name"
                      {...register("last_name")}
                    />
                  </LabelledInput>
                </Col>
                <Col span={24}>
                  <LabelledInput
                    label="Email"
                    isRequired
                    errorLabel="email"
                    errors={errors}
                  >
                    <input
                      className="full-width"
                      type="email"
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
                  </LabelledInput>
                </Col>
                <Col span={24}>
                  <LabelledInput
                    label="Address"
                    isRequired
                    errorLabel="address"
                    errors={errors}
                  >
                    <input
                      className="full-width"
                      type="text"
                      placeholder="Address"
                      {...register("address", {
                        required: "Please input your valid Address",
                      })}
                    />
                  </LabelledInput>
                </Col>
                <Col span={12}>
                  <LabelledInput
                    label="Country"
                    isRequired
                    errorLabel="country_id"
                    errors={errors}
                  >
                    <select
                      className="full-width"
                      {...register("country_id", {
                        required: "Please select your Country",
                      })}
                    >
                      <option value="">-select country-</option>
                      {getCountries().map(({ id, name }) => {
                        return <option value={id}>{name}</option>;
                      })}
                    </select>
                  </LabelledInput>
                </Col>
                <Col span={12}>
                  <LabelledInput
                    label="State"
                    isRequired
                    errorLabel="state_id"
                    errors={errors}
                  >
                    <select
                      className="full-width"
                      {...register("state_id", {
                        required: "Please select your State",
                      })}
                    >
                      <option value="">-select state-</option>
                      {getStates(Number(watch("country_id"))).map(
                        ({ id, name }) => {
                          return <option value={id}>{name}</option>;
                        }
                      )}
                    </select>
                  </LabelledInput>
                </Col>
                <Col span={12}>
                  <LabelledInput
                    label="City"
                    isRequired
                    errorLabel="city_id"
                    errors={errors}
                  >
                    <select
                      className="full-width"
                      type="text"
                      {...register("city_id", {
                        required: "Please select your City",
                      })}
                    >
                      <option value="">-select city-</option>
                      {getCities(
                        Number(watch("country_id")),
                        Number(watch("state_id"))
                      ).map(({ id, name }) => {
                        return <option value={id}>{name}</option>;
                      })}
                    </select>
                  </LabelledInput>
                </Col>
                <Col span={12}>
                  <LabelledInput
                    label="Pincode"
                    isRequired
                    errorLabel="pincode"
                    errors={errors}
                  >
                    <input
                      className="full-width"
                      type="number"
                      placeholder="Pincode"
                      {...register("pincode", {
                        required: "Please Enter valid Pincode",
                      })}
                    />
                  </LabelledInput>
                </Col>
                <Col span={24}>
                  <LabelledInput
                    label="Mobile number"
                    isRequired
                    errorLabel="country_code"
                    errors={errors}
                  >
                    <div className="d-flex">
                      <select
                        {...register("country_code", {
                          required: "Please select your Country code",
                        })}
                      >
                        <option value="">ISD code</option>
                        <option value="+91">+91</option>
                        <option value="+92">+92</option>
                        <option value="+1">+1</option>
                      </select>
                      <input
                        className="full-width"
                        type="number"
                        placeholder="Mobile"
                        {...register("mobile", {
                          required: "Please input your mobile number",
                        })}
                      />
                    </div>
                  </LabelledInput>
                </Col>

                <Col span={12}>
                  <LabelledInput label="Fax">
                    <input className="full-width" {...register("fax")} />
                  </LabelledInput>
                </Col>
                <Col span={12}>
                  <LabelledInput label="Phone">
                    <input
                      className="full-width"
                      type="Phone"
                      {...register("phone")}
                    />
                  </LabelledInput>
                </Col>
                <Col span={24}>
                  <LabelledInput
                    label="Password"
                    isRequired
                    errorLabel="password"
                    errors={errors}
                  >
                    <input
                      className="full-width"
                      type="password"
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Please input your Password",
                      })}
                    />
                  </LabelledInput>
                </Col>
                <Col span={24}>
                  <LabelledInput
                    label="Confirm password"
                    isRequired
                    errorLabel="confirm_password"
                    errors={errors}
                  >
                    <input
                      className="full-width"
                      type="password"
                      placeholder="Confirm your password"
                      {...register("confirm_password", {
                        validate: (value) => {
                          return value !== watch("password")
                            ? "Password doesn't match"
                            : true;
                        },
                      })}
                    />
                  </LabelledInput>
                </Col>
                <Col span={24}>
                  <div className="signup-btn-container">
                    <button type="submit" className="submit-btn">
                      SIGNUP
                    </button>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
