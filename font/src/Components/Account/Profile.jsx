import React from "react";
import ProfileCss from "./CSS/Profile.module.css";

export default function Profile(props) {
  return (
    <div className={ProfileCss.mdiv}>
      <h1 className={ProfileCss.h1}>Profile</h1>
      <div className={ProfileCss.conMDiv}>
        <div className={ProfileCss.EmailDiv}>
          <p>Email ID:</p>
          <input
            type="email"
            className={ProfileCss.impEmail}
            name=""
            id=""
            readonly="readonly"
            disabled="disabled"
            value={props.email}
          />
        </div>
        <div className={ProfileCss.FormDiv}>
          <p id={ProfileCss.GeneralI}>General Information</p>
          <form action="" method="POST" className={ProfileCss.FormTag}>
            <div className={ProfileCss.LeftDiv}>
              <div className={ProfileCss.LabelDivTag1}>
                <label htmlFor="firstName" className={ProfileCss.LabelTag1}>
                  First Name:{" "}
                </label>
                <input
                  type="text"
                  name="firstName"
                  id=""
                  value={props.firstName}
                  className={ProfileCss.NameInp}
                />
              </div>
              <div className={ProfileCss.LabelDivTag2}>
                <label htmlFor="lastName">Last Name: </label>
                <input
                  type="text"
                  name="lastName"
                  id=""
                  value={props.lastName}
                  className={ProfileCss.NameInp}
                />
              </div>
            </div>
            <div className={ProfileCss.RightDiv}>
              <div className={ProfileCss.Gender}>
                <p>Gender</p>
                <div className={ProfileCss.GenderTDiv}>
                  <div>
                    {props.gender == "Male" ? (
                      <input type="radio" name="" id="" checked />
                    ) : (
                      <input type="radio" name="" id="" />
                    )}
                    <label htmlFor="Male" className={ProfileCss.MaleLabel}>
                      Male
                    </label>
                  </div>
                  <div>
                    {props.gender == "Female" ? (
                      <input type="radio" name="" id="" checked />
                    ) : (
                      <input type="radio" name="" id="" />
                    )}
                    <label htmlFor="Female" className={ProfileCss.FemaleLabel}>
                      Female
                    </label>
                  </div>
                  <div>
                    {props.gender == "Other" ? (
                      <input type="radio" name="" id="" checked />
                    ) : (
                      <input type="radio" name="" id="" />
                    )}
                    <label htmlFor="Other" className={ProfileCss.OtherLabel}>
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label
                  className={ProfileCss.PhoneNumberLabel}
                  htmlFor="PhoneNumber"
                >
                  Mobile Number:{" "}
                </label>
                <br />
                <input
                  type="number"
                  name=""
                  id=""
                  value={props.phone}
                  className={ProfileCss.PhoneNumberInp}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
