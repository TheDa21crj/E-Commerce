import React, { useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Common from "./Css/Common.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { adduser } from "./../../../redux/user";

export default function MyAddress(props) {
  return (
    <div className={Common.mdiv}>
      <div>
        <KeyboardBackspaceIcon
          fontSize="large"
          onClick={() => props.state("")}
        />
      </div>
      <p className={Common.MyPTag}>My Address</p>
    </div>
  );
}
