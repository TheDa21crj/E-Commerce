import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import DropDown2 from "./DropDown2";
import "./CSS/NavBar.css";

import PersonSharpIcon from "@material-ui/icons/PersonSharp";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

import ImgNav1 from "../Img/Nav/model-2911322.jpg";
import ImgNav2 from "../Img/Nav/ladies-dress-wear-6097570.jpg";
import ImgNav3 from "../Img/Nav/model-3016384.jpg";

export default function NavBar() {
  const [show, setShow] = useState(true);
  return (
    <nav className="NavBar">
      <div className="Logo">
        <Link to="/" className="Link">
          <h1 className="TitleTheDa"> The Da </h1>
        </Link>
        <ul id="Dd">
          <li>
            Men
            <div className="dropDownDiv">
              <DropDown
                H21="TOPWEAR"
                H22="BOTTOMWEAR"
                H23="Accessories"
                imgNav={ImgNav1}
                li1="T-Shirts"
                li2="Co-ord Sets New"
                li3="Drop-Cut T-Shirts"
                li4="Full Sleeve T-Shirts"
                li5="Oversized T-Shirts New"
                li6="Polos"
                li7="Shirts"
                li8="Tank Tops & Vests"
                li9="Hoodies & Sweatshirts"
                li10="Jackets"
                li11="Sweaters"
                li12="Cotton Pants New"
                li22="Joggers"
                li32="Shorts"
                li42="Pajamas"
                li52="Boxers"
                li13="Cotton Masks"
                li23="Socks"
                li33="Backpacks"
              />
            </div>
          </li>
          <li>
            Women
            <div className="dropDownDiv">
              <DropDown
                H21="TOPWEAR"
                H22="BOTTOMWEAR"
                H23="Accessories"
                imgNav={ImgNav2}
                li1="Women's T-Shirts"
                li2="Dresses"
                li3="Unisex T-Shirts"
                li4="Shirts"
                li5="Tank Tops"
                li6="Shirts"
                li7="Hoodies & Sweatshirts"
                li8="Jackets"
                li9="Winterwear"
                li12="Joggers"
                li22="Pajamas"
                li32="All Day Pants"
                li42="Shorts"
                li52="Urban Leggings"
                li13="Cotton Masks"
                li23="Socks"
                li33="Backpacks"
              />
            </div>
          </li>
          <li>
            Kids
            <div className="dropDownDiv">
              <DropDown
                H21="TOPWEAR"
                H22="BOTTOMWEAR"
                H23="Accessories"
                imgNav={ImgNav3}
                li1="T-Shirts"
                li2="Shirts"
                li3="Dresses"
                li4="Clothing Sets"
                li5="Ethnic Wear"
                li6="Shirts"
                li7="Hoodies & Sweatshirts"
                li8="Jackets"
                li9="Winterwear"
                li10="Jumpsuits"
                li11="Tops"
                li12m="Frok"
                li12="Shorts"
                li22="Jeans"
                li32="Trousers"
                li42="Skirts"
                li52="Tights & Leggings"
                li62="Capris"
                li13="Bags & Backpacks"
                li23="Watches"
                li33="Jewellery & Hair accessory"
                li43="Sunglasses"
                li53="Masks & Protective Gears"
                li63="Caps & Hats"
                li73="Cotton Masks"
                li83="Socks"
                li93="Backpacks"
              />
            </div>
          </li>
          <li> New </li> <li> Beauty </li> <li> Membership </li>
        </ul>
      </div>
      <div className="burger" onClick={() => setShow(!show)}>
        <div> </div> <div> </div> <div> </div>
      </div>
      <div id={show ? "s1" : "s2"}>
        <DropDown2 />
      </div>
      <div className="List2">
        <Link to="/login">
          <PersonSharpIcon fontSize="large" />
        </Link>
        <ShoppingBasketOutlinedIcon fontSize="large" />
        <FavoriteBorderOutlinedIcon fontSize="large" />
      </div>
    </nav>
  );
}
