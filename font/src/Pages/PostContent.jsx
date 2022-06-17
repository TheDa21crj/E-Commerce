import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PostContent() {
  const [showProduct, setProduct] = useState({
    name: "",
    imageSrc: "",
    des: "",
    rating: "",
    NumReview: "",
    price: "",
    gender: "",
  });
  const navigate = useNavigate();
  const [showRes, SetRes] = useState("");

  const AuthMiddleware = async () => {
    try {
      const res = await fetch("/api/admin/post", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (data.errors) {
        navigate("/");
      }
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  useEffect(() => {
    AuthMiddleware();
  }, []);

  const DataInpProduct = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProduct({ ...showProduct, [name]: value });
  };

  const PostData = async () => {
    const { name, imageSrc, des, rating, NumReview, price, gender } =
      showProduct;

    const res = await fetch("/api/admin/Products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        imageSrc,
        des,
        rating,
        NumReview,
        price,
        gender,
      }),
    });
    const r = await res.json();
    SetRes(r.message);
  };

  return (
    <div>
      <Link to="/">The Da</Link>
      Logout
      <h1>Welcome Admin</h1>
      <div>
        <form action="" method="POST">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            value={showProduct.name}
            onChange={DataInpProduct}
          />
          <input
            type="text"
            name="imageSrc"
            id=""
            placeholder="Image Src"
            value={showProduct.imageSrc}
            onChange={DataInpProduct}
          />
          <textarea
            name="des"
            id=""
            cols="30"
            rows="10"
            value={showProduct.des}
            placeholder="des"
            onChange={DataInpProduct}
          ></textarea>
          <input
            type="number"
            name="rating"
            id=""
            placeholder="Rating"
            value={showProduct.rating}
            onChange={DataInpProduct}
          />
          <input
            type="number"
            name="NumReview"
            id=""
            placeholder="Number of Reviews"
            value={showProduct.NumReview}
            onChange={DataInpProduct}
          />
          <input
            type="number"
            name="price"
            id=""
            value={showProduct.price}
            placeholder="price"
            onChange={DataInpProduct}
          />
          <input
            type="text"
            name="gender"
            id=""
            value={showProduct.gender}
            placeholder="gender"
            onChange={DataInpProduct}
          />
        </form>

        <button onClick={PostData}>Post</button>
      </div>
      <p>{showRes}</p>
    </div>
  );
}