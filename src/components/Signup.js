import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    telNo: "",
    error: "",
    success: false,
  });

  const {
    name,
    email,
    password,
    confirm_password,
    telNo,
    error,
    success,
  } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, success: true });
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirm_password", confirm_password);
    localStorage.setItem("telNo", telNo);
    localStorage.setItem("success", email && password ? true : false);
    e.target.reset();
  };

  // useEffect(() => {
  //   const name = localStorage.getItem("name");
  //   const email = localStorage.getItem("email");
  //   const password = localStorage.getItem("password");
  //   const telNo = localStorage.getItem("telNo");
  // }, []);
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/login">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="signup-form">
        <form onSubmit={handleFormSubmit}>
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account!</p>
          <hr />
          <div className="form-group">
            <div className="row">
              <div className="col-xs-6">
                <input
                  onChange={handleChange("name")}
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  required="required"
                  value={name}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("email")}
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("password")}
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("confirm_password")}
              type="password"
              className="form-control"
              name="confirm_password"
              placeholder="Confirm Password"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("telNo")}
              type="tel"
              className="form-control"
              name="telNo"
              placeholder="Phone no must be 6 to 10 digit"
              required="required"
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="checkbox-inline">
              <input type="checkbox" /> I accept the
              <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">
              Sign Up
            </button>
          </div>
          {successMessage()}
        </form>
        <div className="hint-text">
          Already have an account? <a href="/login">Login Here</a>
        </div>
      </div>
    </>
  );
};

export default Signup;

// import React, { Component } from "react";

// class Signup extends Component {
//   userData;

//   constructor(props) {
//     super(props);

//     this.onChangeName = this.onChangeName.bind(this);
//     this.onChangeEmail = this.onChangeEmail.bind(this);
//     this.onChangePassword = this.onChangePassword.bind(this);
//     this.onChangePhone = this.onChangePhone.bind(this);

//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//       phone: "",
//     };
//   }

//   // Form Events
//   onChangeName(e) {
//     this.setState({ name: e.target.value });
//   }

//   onChangeEmail(e) {
//     this.setState({ email: e.target.value });
//   }

//   onChangePassword(e) {
//     this.setState({ password: e.target.value });
//   }

//   onChangePhone(e) {
//     this.setState({ phone: e.target.value });
//   }

//   onSubmit = (e) => {
//     e.preventDefault();

//     this.setState({
//       name: "",
//       email: "",
//       password: "",
//       phone: "",
//     });
//   };

//   // React Life Cycle
//   componentDidMount() {
//     this.userData = JSON.parse(localStorage.getItem("user"));

//     if (localStorage.getItem("user")) {
//       this.setState({
//         name: this.userData.name,
//         email: this.userData.email,
//         password: this.userData.password,
//         phone: this.userData.phone,
//       });
//     } else {
//       this.setState({
//         name: "",
//         email: "",
//         password: "",
//         phone: "",
//       });
//     }
//   }

//   UNSAFE_componentWillUpdate(nextProps, nextState) {
//     localStorage.setItem("user", JSON.stringify(nextState));
//   }

//   render() {
//     return (
//       <>
//         <div className="signup-form">
//           <form onSubmit={this.onSubmit}>
//             <h2>Sign Up</h2>
//             <p>Please fill in this form to create an account!</p>
//             <hr />
//             <div className="form-group">
//               <div className="row">
//                 <div className="col-xs-6">
//                   <input
//                     value={this.state.name}
//                     onChange={this.onChangeName}
//                     type="text"
//                     className="form-control"
//                     name="name"
//                     placeholder="Your Name"
//                     required="required"
//                   />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <input
//                   value={this.state.email}
//                   onChange={this.onChangeEmail}
//                   type="email"
//                   className="form-control"
//                   name="email"
//                   placeholder="Email"
//                   required="required"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   value={this.state.password}
//                   onChange={this.onChangePassword}
//                   type="password"
//                   className="form-control"
//                   name="password"
//                   placeholder="Password"
//                   required="required"
//                 />
//               </div>
//               {/* <div className="form-group">
//                 <input
//                   type="password"
//                   className="form-control"
//                   name="confirm_password"
//                   placeholder="Confirm Password"
//                   required="required"
//                 />
//               </div> */}
//               <div className="form-group">
//                 <input
//                   value={this.state.phone}
//                   onChange={this.onChangePhone}
//                   type="tel"
//                   className="form-control"
//                   name="telNo"
//                   placeholder="Phone no must be 6 to 10 digit"
//                   required="required"
//                 />
//               </div>
//               {/* <div className="form-group">
//                 <label htmlFor="" className="checkbox-inline">
//                   <input type="checkbox" /> I accept the
//                   <a href="#">Terms of Use</a> &amp;{" "}
//                   <a href="#">Privacy Policy</a>
//                 </label>
//               </div> */}
//               <div className="form-group">
//                 <button type="submit" className="btn btn-primary btn-lg">
//                   Sign Up
//                 </button>
//               </div>
//             </div>
//           </form>
//           <div className="hint-text">
//             Already have an account? <a href="/login">Login Here</a>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Signup;
