// import React, { useState, useEffect } from "react";
// import Preloader from "../src/components/Pre";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate
// } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
// import "./style.css";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [load, upadateLoad] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       upadateLoad(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Router>
//       <Preloader load={load} />
//       <div className="App" id={load ? "no-scroll" : "scroll"}>
//         <Navbar />
//         <ScrollToTop />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/project" element={<Projects />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="*" element={<Navigate to="/"/>} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import { useState } from "react";
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [fname, setfName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Select any");
  const [address, setAddress] = useState("");
  const [pinCode, setpinCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [emptyError, setEmptyError] = useState("");
  const [nameError, setNameError] = useState("");
  const [fnameError, setfNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dobError, setDobError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [pinCodeError, setpinCodeError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("");

  const validate = () => {
    if (
      name === "" ||
      email === "" ||
      gender === "" ||
      phoneNumber === "" ||
      password === "" ||
      fname === "" ||
      dob === "" ||
      address === "" ||
      pinCode === ""
    ) {
      setEmptyError("**All fields are mandatory");
      setUsername("");
      return false;
    }
    if (!name.match(/^[a-zA-Z\s]+$/)) {
      setNameError("!!Name is not alphanumeric");
      setUsername("");
      return false;
    }
    if (!fname.match(/^[a-zA-Z\s]+$/)) {
      setfNameError("!! Father's Name is not alphanumeric");
      setUsername("");
      return false;
    }
    if (!email.includes("@")) {
      setEmailError("!!Email must contain @");
      setUsername("");
      return false;
    }
    if (!email.includes(".com" || ".in")) {
      setEmailError("!!Email is invalid");
      setUsername("");
      return false;
    }
    if (
      !dob.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)
    ) {
      setDobError("!!Invalid Date of Birth");
      setUsername("");
      return false;
    }
    if (!gender.match(/male|female|other/i)) {
      setGenderError("!!Please select gender");
      setUsername("");
      return false;
    }
    if (!address.match(/^[a-zA-Z0-9\s]+,/)) {
      setAddressError("!!Address is not alphanumeric");
      setUsername("");
      return false;
    }
    if (pinCode.length !== 6 || !pinCode.match(/^[0-9]+$/)) {
      setpinCodeError("!!Invalid Pin Code");
      setUsername("");
      return false;
    }
    if (!phoneNumber.match(/^[0-9]+$/)) {
      setPhoneNumberError("!!Phone Number must contain only digits");
      setUsername("");
      return false;
    }
    if (phoneNumber.length !== 10) {
      setPhoneNumberError("!!Phone Number must contain 10 digits");
      setUsername("");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("!!Password must contain atleast 6 digits");
      setUsername("");
      return false;
    }
    return true;
  };
  const resetErrorDefault = () => {
    setNameError("");
    setfNameError("");
    setEmptyError("");
    setEmailError("");
    setDobError("");
    setGenderError("");
    setAddressError("");
    setpinCodeError("");
    setPhoneNumberError("");
    setPasswordError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    resetErrorDefault();
    const isValid = validate();
    if (isValid) {
      setName("");
      setfName("");
      setEmail("");
      setDob("");
      setGender("Select Any");
      setPassword("");
      setAddress("");
      setpinCode("");
      setPhoneNumber("");
      resetErrorDefault();
      setUsername(name);
    }
  };
  return (
    <section className="section-center">
      <div className="App">
        <h2
          style={{ textAlign: "center", marginBottom: "2rem", color: "brown" }}
        >
          SCHOOL REGISTRATION FORM
        </h2>
        <form onSubmit={handleSubmit}>
          <strong>
            <label for="name">Name : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "1rem" }}
            type="text"
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />{" "}
          <h4
            style={{ display: "inline", float: "right", marginLeft: "1rem" }}
          >
            {nameError}
          </h4>
          <br />
          <strong>
            <label for="fname">Father's Name : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "1rem" }}
            className="space"
            type="text"
            placeholder="Father's Name"
            id="fname"
            value={fname}
            onChange={(e) => {
              setfName(e.target.value);
            }}
          />{" "}
          <h4
            style={{ display: "inline", float: "right", marginRight: "1rem" }}
          >
            {fnameError}
          </h4>
          <br />
          <strong>
            <label for="email">Email : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "1rem" }}
            className="space"
            id="email"
            placeholder="Email Address"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />{" "}
          <h4
            className="space"
            style={{ display: "inline", float: "right", marginRight: "1rem" }}
          >
            {emailError}
          </h4>
          <br />
          <strong>
            <label for="dob">Date of Birth : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "1rem" }}
            className="space"
            id="dob"
            value={dob}
            placeholder="dd-mm-yyyy"
            type="text"
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />{" "}
          <h4
            className="space"
            style={{ display: "inline", float: "right", marginLeft: "1rem" }}
          >
            {dobError}
          </h4>
          <br />
          <strong>
            <label for="gender">Gender : </label>{" "}
          </strong>
          <select
            style={{ marginLeft: "1rem" }}
            className="space"
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="Select Any" selected>
              Select
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <h4
            className="space"
          >
            {genderError}
          </h4>
          <strong>
            <label for="address">Address : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "1rem" }}
            className="space"
            type="text"
            placeholder="Residential Address"
            id="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />{" "}
          <h4
            className="space"
            style={{ display: "inline", float: "right", marginRight: "1rem" }}
          >
            {addressError}
          </h4>
          <br />
          <strong>
            <label for="pincode">Pin Code : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "1rem" }}
            className="space"
            type="text"
            placeholder="Pin Code"
            id="pincode"
            value={pinCode}
            onChange={(e) => {
              setpinCode(e.target.value);
            }}
          />{" "}
          <h4
            className="space"
            style={{ display: "inline", float: "right", marginRight: "1rem" }}
          >
            {pinCodeError}
          </h4>
          <br />
          <strong>
            <label for="number">Phone Number : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "1rem" }}
            className="space"
            id="number"
            placeholder="### ### ####"
            type="text"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <h4
            className="space"
            style={{
              display: "inline",
              float: "right",
              marginRight: "1rem",
              marginTop: "0.7rem",
            }}
          >
            {phoneNumberError}
          </h4>
          <br />
          <strong>
            <label for="passwd">Password : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "1rem" }}
            className="space"
            id="passwd"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <h4
            className="space"
            style={{
              display: "inline",
              float: "right",
              marginRight: "1rem",
              marginTop: "0.7rem",
            }}
          >
            {passwordError}
          </h4>
          <br />
          <br />
          <br />
          <div className="text-center">
            <button className="btn btn-info" type="submit">
              SUBMIT
            </button>
          </div>
          <h4 style={{ textAlign: "center" }}>{emptyError}</h4>
        </form>
        <div>
          <h2 style={{ textAlign: "center", color: "crimson" }}>
            {username? "Hello " + username:"" }
          </h2>
        </div>
      </div>
    </section>
  );
}

export default App;