import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Header from "./../Components/Home/Header";
import Footer from "./../Components/Footer";

export default function MyAccount() {
  const [showName, setName] = useState("");
  const navigate = useNavigate();

  const AuthMiddleware = async () => {
    try {
      const res = await fetch("/api/account", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (data.errors) {
        navigate("/login");
      }
      if (data) {
        setName(data.message.email);
        console.log("My Account");
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    AuthMiddleware();
  }, []);
  return (
    <div>
      <Nav />
      <NavMobo />
      MyAccount
      <br />
      <p>
        email: <span> {showName}</span>
      </p>
      <Footer />
    </div>
  );
}
