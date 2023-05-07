import React, { useState } from "react";
import "../assets/login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <div className="wrapper">
        <div className="title-text">
          <div className={`title ${isLogin ? "login" : "signup"}`}>
            {isLogin ? "Login Form" : "Signup Form"}
          </div>
          <div className={`title ${isLogin ? "signup" : "login"}`}>
            {!isLogin ? "Login Form" : "Signup Form"}
          </div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={isLogin}
              onChange={() => setIsLogin(true)}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={!isLogin}
              onChange={() => setIsLogin(false)}
            />
            <label htmlFor="login" className={`slide ${isLogin ? "login" : ""}`}>
              Login
            </label>
            <label
              htmlFor="signup"
              className={`slide ${!isLogin ? "signup" : ""}`}
            >
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            <form action="#" className={`${isLogin ? "login" : "signup"}`}>
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              {!isLogin && (
                <div className="field">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    required
                  />
                </div>
              )}
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value={isLogin ? "Login" : "Signup"} />
              </div>
              {!isLogin && (
                <div className="login-link">
                  Already a member? <a href="#!" onClick={toggleForm}>Login now</a>
                </div>
              )}
              {isLogin && (
                <div className="signup-link">
                  Not a member? <a href="#!" onClick={toggleForm}>Signup now</a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
