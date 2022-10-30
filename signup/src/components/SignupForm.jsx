import React from "react";
import { useState } from "react";

export default function SignupForm() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const checkErrors = () => {
    setErrors({});
    checkEmail();
    checkPassword();
    checkEmptyInputs();
    console.log(data);
    console.log(errors);
  };

  const checkEmptyInputs = () => {
    const { firstName, lastName, email, password } = data;
    if (firstName === "") {
      setErrors((prev) => ({
        ...prev,
        firstName: "First name cannot be empty",
      }));
    }
    if (lastName === "") {
      setErrors((prev) => ({ ...prev, lastName: "Last name cannot be empty" }));
    }
    if (email === "") {
      setErrors((prev) => ({ ...prev, email: "Email cannot be empty" }));
    }
    if (password === "") {
      setErrors((prev) => ({ ...prev, password: "Password cannot be empty" }));
    }
  };

  const checkEmail = () => {
    const { email } = data;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Looks like this is not an email",
      }));
    }
  };

  const checkPassword = () => {
    const { password } = data;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password.length < 6) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters",
      }));
    } else if (!passwordRegex.test(password)) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must contain at least one letter and one number",
      }));
    }
  };

  return (
    <div className="signup-form">
      <div className="banner">
        <p>
          <b>Try it free 7 days</b> then $20/mo. thereafter
        </p>
      </div>
      <div className="form-card">
        <form action="#">
          <div className={`input ${errors.firstName && "input-error"}`}>
            <div className="input-box">
              <input
                type="text"
                placeholder="First Name"
                autoComplete="given-name"
                autoCapitalize="words"
                required
                id="first-name"
                value={data.firstName}
                onChange={(e) => {
                  setData({ ...data, firstName: e.target.value });
                  setErrors({ ...errors, firstName: "" });
                }}
              />
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#FF7979" cx="12" cy="12" r="12" />
                  <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                  <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
                </g>
              </svg>
            </div>
            <p className="input-error-message">
              {" "}
              {errors.firstName && errors.firstName}{" "}
            </p>
          </div>
          <div className={`input ${errors.lastName && "input-error"}`}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Last Name"
                autoComplete="family-name"
                required
                id="last-name"
                value={data.lastName}
                onChange={(e) => {
                  setData({ ...data, lastName: e.target.value });
                  setErrors({ ...errors, lastName: "" });
                }}
              />
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#FF7979" cx="12" cy="12" r="12" />
                  <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                  <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
                </g>
              </svg>
            </div>
            <p className="input-error-message">
              {" "}
              {errors.lastName && errors.lastName}{" "}
            </p>
          </div>
          <div className={`input ${errors.email && "input-error"}`}>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                required
                id="email-address"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                  setErrors({ ...errors, email: "" });
                }}
                onClick={(e) => {
                  if (e.target.key === "Enter") {
                    checkEmail();
                  }
                }}
              />
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#FF7979" cx="12" cy="12" r="12" />
                  <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                  <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
                </g>
              </svg>
            </div>
            <p className="input-error-message">
              {errors.email && errors.email}
            </p>
          </div>
          <div className={`input ${errors.password && "input-error"}`}>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                required
                id="password"
                value={data.password}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                  setErrors({ ...errors, password: "" });
                }}
                onClick={(e) => {
                  if (e.target.key === 13) {
                    console.log(e.target);
                    checkPassword();
                  }
                }}
              />
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#FF7979" cx="12" cy="12" r="12" />
                  <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                  <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
                </g>
              </svg>
            </div>
            <p className="input-error-message">
              {errors.password && errors.password}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              checkErrors();
            }}
          >
            CLAIM YOUR FREE TRIAL
          </button>
          <p className="terms">
            By clicking the button, you are agreeing to our{" "}
            <a href="#">Terms and Services</a>
          </p>
        </form>
      </div>
    </div>
  );
}
