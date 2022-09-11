import React from "react";
import AddCss from "./CSS/Add.module.css";
import CloseIcon from "@mui/icons-material/Close";

export default function Update(props) {
  return (
    <div className={AddCss.mDiv}>
      <div className={AddCss.ConDiv}>
        <p className={AddCss.AddAddress}>Update</p>
        <br />
        <CloseIcon
          onClick={() => props.state(false)}
          fontSize="large"
          className={AddCss.CloseIcon}
        />
        <div className={AddCss.inpDiv}>
          <input
            type="text"
            name="firstName"
            className={AddCss.impTag}
            // onChange={DataInp}
            placeholder="First Name"
          />
          <input
            type="text"
            name="LastName"
            className={AddCss.impTag}
            // onChange={DataInp}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="gender"
            className={AddCss.impTag}
            // onChange={DataInp}
            placeholder="Gender"
          />
          <input
            type="text"
            name="PhoneNumber"
            className={AddCss.impTag}
            // onChange={DataInp}
            placeholder="Phone Number"
          />
          <input
            type="text"
            name="state"
            className={AddCss.impTag}
            // onChange={DataInp}
            placeholder="State"
          />
          <input
            type="text"
            name="country"
            className={AddCss.impTag}
            // onChange={DataInp}
            placeholder="Country"
          />
          <input
            type="text"
            name="phoneNumber"
            className={AddCss.impTag}
            // onChange={DataInp}
            placeholder="Phone Number"
          />
          <button
            //    onClick={PostData}
            className={AddCss.LoginBtn}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
