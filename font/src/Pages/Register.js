import React, { useState } from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";
import { Link } from "react-router-dom";
import RegCss from "./Css/Register.module.css";
import { useNavigate } from "react-router-dom";
// import { GoogleLogin } from "react-google-login";

export default function Register() {
  const [showUser, setUser] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...showUser, [name]: value });
  };

  const PostData = async () => {
    const { email, password } = showUser;
    console.log(email, password);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const r = await res.json();
    console.log(r);

    if (r.errors) {
      console.log("Error");
    } else if (!r.errors) {
      console.log("Registered");
      navigate("/login");
    } else {
      console.log("Unwanted Error");
    }
  };

  return (
    <div>
      <Nav />
      <NavMobo />
      Register
      <form action="" method="POST">
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email"
          value={showUser.email}
          onChange={DataInp}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          value={showUser.password}
          onChange={DataInp}
        />
      </form>
      <button onClick={PostData}>Register</button>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Footer />
    </div>
  );
}