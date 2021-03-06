import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import SCCss from "./Css/ShopCart.module.css";
import img from "./../Img/delivery_truck.svg";
import { Link } from "react-router-dom";

export default function ShopCart() {
  const [showTPrice, setTPrice] = useState();
  const [showTProducts, setTProducts] = useState();
  const [show, set] = useState();

  useEffect(() => {
    document.title = "The Da: Shopping Cart";
    seeList();
  }, []);

  const seeList = async () => {
    try {
      const res = await fetch("/api/Shoping", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (data.errors) {
        return;
      }
      if (data) {
        if (data.message === "zero") {
          console.log("Zero = Data");
        } else {
          let TotalPrice = 0;
          data.message.forEach((e) => {
            TotalPrice += e.price * e.qunatity;
          });
          setTPrice(TotalPrice);
          setTProducts(data.message.length);
          set(data.message);
          return;
        }
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const deleteWish = async (deleteID) => {
    let id = deleteID;
    if (id === "") {
      return;
    } else {
      try {
        const res = await fetch("/api/Shoping/delete/product", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
          }),
        });

        await res.json();

        seeList();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Nav />
      {showTProducts !== 0 ? (
        <div>
          <p className={SCCss.MainPTag}>Shop Cart</p>
          <div className={SCCss.RoWDiv}>
            <div className={SCCss.LeftDiv}>
              {show ? (
                <div id={SCCss.checkShowDiv}>
                  {show.map((value, key) => {
                    return (
                      <div key={value.id} className={SCCss.MapMDiv}>
                        <Link
                          to={`/products/${value.id}`}
                          className="LinkStyle"
                          id={SCCss.Link}
                        >
                          <div className={SCCss.MapLeftDiv}>
                            <img src={value.imageSrc} alt="" />
                          </div>
                          <div className={SCCss.MapRightDiv}>
                            <p className={SCCss.name}>{value.name}</p>
                            <p className={SCCss.Qunatity}>
                              Qunatity: <b>{value.qunatity}</b>
                            </p>
                            <div className={SCCss.MapRowDivBottom}>
                              <p>
                                Size: <b>{value.size}</b>
                              </p>
                              <p className={SCCss.price}>
                                <b>??? {value.price}</b>
                              </p>
                            </div>
                            <div className={SCCss.DeliveryDiv}>
                              <img src={img} alt="" />
                              <p>Da Assured Delivered</p>
                            </div>
                          </div>
                        </Link>
                        <div
                          className={SCCss.DeleteDiv}
                          onClick={() => deleteWish(value.id)}
                        >
                          Delete
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className={SCCss.RightDiv}>
              <p>Your order qualifies for FREE Delivery.</p>
              <p className={SCCss.SubtotalPTag}>
                Subtotal ({showTProducts} item): {showTPrice}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={SCCss.FalseDiv}>
          <p className={SCCss.MainPTag}>Shopping Cart Is Empty</p>
        </div>
      )}
      <Footer />
    </div>
  );
}
