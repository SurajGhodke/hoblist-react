import React from "react";
import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;

  const handleChange = (email) => (e) => {
    setValues({ ...values, error: false, [email]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });
    localStorage.getItem("email", email);
    localStorage.getItem("password", password);
    // console.log(localStorage.getItem("email", email));
    // console.log(localStorage.getItem("password", password));
    localStorage.getItem("loading", email && password ? false : true);
    //e.target.reset();
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h4>Login Successfully</h4>
        </div>
      )
    );
  };

  const performRedirect = () => {
    if (loading === true) {
      return <Redirect to="/home" />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  return (
    <>
      <div className="login-form">
        <form action="">
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input
              onChange={handleChange("email")}
              value={email}
              type="email"
              className="form-control control-login"
              placeholder="email"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("password")}
              value={password}
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
            />
          </div>
          <div className="form-group">
            <button
              onClick={handleFormSubmit}
              className="btn btn-primary btn-block"
            >
              Log In
            </button>
          </div>
          <div className="clearfix">
            <label htmlFor="" className="pull-left checkbox-inline">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="pull-right">
              Forgot Password?
            </a>
          </div>
          {loadingMessage()}
          {performRedirect()}
        </form>
        <p className="text-center">
          <a href="/signup">Create an Account</a>
        </p>
      </div>
    </>
  );
};

export default Login;
