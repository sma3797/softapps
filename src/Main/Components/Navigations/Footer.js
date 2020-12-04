import React from "react";
import classes from "./Footer.module.css";
import FooterLogo from "../../../shared/assets/Images/FooterLogo.png";
import FacebookWhite from "../../../shared/assets/Images/FacbookWhite.png";
import LinkedinWhite from "../../../shared/assets/Images/LinkedinWhite.png";
import TwitterWhite from "../../../shared/assets/Images/TwitterWhite.png";
import YoutubeWhite from "../../../shared/assets/Images/YoutubeWhite.png";
import InstagramWhite from "../../../shared/assets/Images/InstagramWhite.png";
import Phone from "../../../shared/assets/Images/Phone.png";
import Email1 from "../../../shared/assets/Images/Email1.png";

const Footer = (props) => {
  return (
    <div className={classes.Footer}>
      <div className={classes.footerContentMainDiv}>
        <div className={[classes.footerContentColumn].join("")}>
          <div style={{ width: "280px" }}>
            <img src={FooterLogo} style={{ maxWidth: "100%" }} alt="Logo" />
          </div>
          <div>
            <div style={{ padding: "10px 0" }}>
              <div>
                <h2 style={{ color: "#ED2324", padding: "0 0 20px 0" }}>
                  About Us
                </h2>
              </div>
              <div>
                <p style={{ maxWidth: "70%", fontSize: "90%", color: "#fff" }}>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a.
                </p>
              </div>
            </div>
            <div style={{ padding: "5px 0" }}>
              <div>
                <h2 style={{ color: "#ED2324" }}>Contact Us</h2>
              </div>
            </div>
            <div style={{ padding: "10px 0" }}>
              <div
                style={{
                  display: "flex",
                  padding: "3px 0",
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: "10px" }}>
                  <img src={Phone} alt="Call" />
                </div>
                <div>
                  <p style={{ color: "#fff" }}>+1 514 550 3281</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "3px 0",
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: "10px" }}>
                  <img src={Email1} alt="Email" />
                </div>
                <div>
                  <a
                    className={classes.sendEmailButton}
                    href="mailto:ceo@softapps.io"
                  >
                    ceo@softapps.io
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "3px 0",
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: "10px" }}>
                  <img src={Email1} alt="Email" />
                </div>
                <div>
                  <a
                    className={classes.sendEmailButton}
                    href="mailto:management@softapps.io"
                  >
                    management@softapps.io
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "3px 0",
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: "10px" }}>
                  <img src={Email1} alt="Email" />
                </div>
                <div>
                  <a
                    className={classes.sendEmailButton}
                    href="mailto:carrers@softapps.io"
                  >
                    carrers@softapps.io
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={[classes.footerContentColumn1].join(" ")}>
          <div className={classes.footerContentColumn1Heading}>
            <h1>Information</h1>
          </div>
          <div className={classes.footerContentColumn1Link}>
            <p>Home</p>
          </div>
          <div className={classes.footerContentColumn1Link}>
            <p>Services</p>
          </div>
          <div className={classes.footerContentColumn1Link}>
            <p>Portfolio</p>
          </div>
          <div className={classes.footerContentColumn1Link}>
            <p>About Us</p>
          </div>
          <div className={classes.footerContentColumn1Link}>
            <p>Career</p>
          </div>
          <div className={classes.footerContentColumn1Link}>
            <p>Contact Us</p>
          </div>
        </div>
        <div className={[classes.footerContentColumn1].join(" ")}>
          <div className={classes.footerContentColumn1Heading}>
            <h1>Hyperlinks</h1>
          </div>
          <div className={classes.footerContentColumn1Link}>
            <p>Services</p>
          </div>
          <div className={classes.footerContentColumn1Link}>
            <p>Support</p>
          </div>
          <div className={classes.footerContentColumn1Link}>
            <p>Terms an Services</p>
          </div>
          <div className={classes.footerContentColumn1Link}>
            <p>Privacy</p>
          </div>
        </div>
        <div className={[classes.footerContentColumn1].join(" ")}>
          <div className={classes.footerContentColumn1Heading}>
            <h1 style={{ color: "#fff" }}>Connect with us</h1>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ margin: "0 8px 0 0", width: "20px", height: "25px" }}>
              <img
                alt="Social"
                src={FacebookWhite}
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div style={{ margin: "0 8px 0 0", width: "20px", height: "25px" }}>
              <img
                alt="Social"
                src={InstagramWhite}
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div style={{ margin: "0 8px 0 0", width: "20px", height: "25px" }}>
              <img
                alt="Social"
                src={TwitterWhite}
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div style={{ margin: "0 8px 0 0", width: "20px", height: "25px" }}>
              <img
                alt="Social"
                src={LinkedinWhite}
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div style={{ margin: "0 8px 0 0", width: "20px", height: "25px" }}>
              <img
                alt="Social"
                src={YoutubeWhite}
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className={[classes.footerContentColumn1].join(" ")}>
          <div>
            <div className={classes.footerContentColumn1Heading}>
              <h1>Subscribed</h1>
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: "#fff",
                borderRadius: "20px",
                height: "35px",
                margin: "10px 0",
              }}
            >
              <input
                placeholder="Enter Email"
                style={{
                  flex: 1,
                  backgroundColor: "transparent",
                  border: "none",
                  padding: "0 15px",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                style={{
                  backgroundColor: "#ED2324",
                  border: "none",
                  color: "#fff",
                  width: "35%",
                  padding: "5px 0",
                  borderRadius: "5px",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
