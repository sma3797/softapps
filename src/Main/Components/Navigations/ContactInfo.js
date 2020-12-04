import React from "react";
import classes from "./ContactInfo.module.css";
import PhoneRed from "../../../shared/assets/Images/PhoneRed.png";
import EmailRed from "../../../shared/assets/Images/EmailRed.png";

const ContactInfo = (props) => {
  return (
    <div className={classes.ContactInfo}>
      <div className={classes.contactDetailDiv}>
        <div className={classes.detailDiv}>
          <div>
            <div>
              <h1 className={classes.colHeading}>Address</h1>
            </div>
            <div style={{ margin: "10px 0" }}>
              <div>
                <h2 style={{ color: "#fff" }}>Canada</h2>
              </div>
              <div>
                <p style={{ color: "#fff" }}>
                  2192, Avenue d'O0rleans Montreal, H1W249, Canada.
                </p>
              </div>
            </div>
            <div style={{ margin: "10px 0" }}>
              <div>
                <h2 style={{ color: "#fff" }}>USA</h2>
              </div>
              <div>
                <p style={{ color: "#fff" }}>
                  87/12 Sugerland Houston, TX 7218, USA.
                </p>
              </div>
            </div>
            <div style={{ margin: "10px 0" }}>
              <div>
                <h2 style={{ color: "#fff" }}>Pakistan</h2>
              </div>
              <div>
                <p style={{ color: "#fff" }}>
                  A26, Block-6, PECHS, Karachi, Sindh, Pakistan.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <h1 className={classes.colHeading}>Phone</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ height: "20px", width: "20px" }}>
                <img alt="Call" src={PhoneRed} style={{ maxWidth: "100%" }} />
              </div>
              <div>
                <p style={{ color: "#fff" }}>+1 514 550 3281</p>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <h1 className={classes.colHeading}>Email</h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <div
                style={{ height: "20px", width: "20px", margin: "0 10px 0 0" }}
              >
                <img alt="Email" src={EmailRed} style={{ maxWidth: "100%" }} />
              </div>
              <div>
                <p style={{ color: "#fff" }}>ceo@softapps.io</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <div
                style={{ height: "20px", width: "20px", margin: "0 10px 0 0" }}
              >
                <img alt="Email" src={EmailRed} style={{ maxWidth: "100%" }} />
              </div>
              <div>
                <p style={{ color: "#fff" }}> management@softapps.io</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <div
                style={{ height: "20px", width: "20px", margin: "0 10px 0 0" }}
              >
                <img alt="Email" src={EmailRed} style={{ maxWidth: "100%" }} />
              </div>
              <div>
                <p style={{ color: "#fff" }}> carrers@softapps.io</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.mapDiv}></div>
      </div>
    </div>
  );
};

export default ContactInfo;
