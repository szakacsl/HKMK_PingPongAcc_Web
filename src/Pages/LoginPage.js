import React from "react";

import HeroImage from "../Components/HeroImage";
import CompanyLogo from "../Components/CompanyLogo";

import CompanyService from "../Services/CompanyService";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.companyName = "";
    this.password = "";
  }

  handleCompanyNameChange = (event) => {
    this.companyName = event.target.value;
    this.forceUpdate();
  };

  handlePasswordChange = (event) => {
    this.password = event.target.value;
    this.forceUpdate();
  };

  handleSignIn = () => {
    console.log("send sign in request");

    // const data = CompanyService.signIn(this.companyName, this.password);

    if (this.companyName !== "" && this.password !== "") {
      window.location = "/company";
    }
  };

  handleSignUp = async () => {
    console.log("send sign up request");

    // const data = await CompanyService.signUp(this.companyName, this.password);

    if (this.companyName !== "" && this.password !== "") {
      window.location = "/company";
    }
  };

  render() {
    return (
      <>
        <div style={{ display: "flex" }}>
          <div>
            <HeroImage imageSrc="/img/hero.png" />
          </div>
          <div
            style={{
              width: window.innerWidth * 0.32,
              height: window.innerHeight,
              backgroundColor: "#EAE0CC",
            }}
          >
            <div
              style={{
                paddingLeft: "25%",
                paddingTop: "35%",
                width: window.innerWidth * 0.32,
              }}
            >
              <CompanyLogo
                imageSrc="/img/hkmk_app_logo.png"
                style={{ width: "250 px", height: "250px" }}
              />
              <table style={{ paddingLeft: "4%" }}>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        placeholder="Company Name"
                        style={{ width: "200px", height: "30px" }}
                        onChange={this.handleCompanyNameChange}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="password"
                        placeholder="Password"
                        style={{ width: "200px", height: "30px" }}
                        onChange={this.handlePasswordChange}
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table style={{ paddingLeft: "4%" }}>
                <tbody>
                  <tr>
                    <td style={{ display: "flex" }}>
                      <button
                        type="button"
                        style={{
                          float: "left",
                          textAlign: "left",
                          width: "70px",
                          height: "25px",
                          textAlign: "center",
                          backgroundColor: "#798478",
                          border: "none",
                          color: "white",
                          fontWeight: "bold",
                        }}
                        onClick={this.handleSignIn}
                      >
                        Sign In
                      </button>

                      <button
                        type="button"
                        style={{
                          marginLeft: "66px",
                          width: "70px",
                          height: "25px",
                          textAlign: "center",
                          backgroundColor: "white",
                          border: "none",
                          color: "#798478",
                          fontWeight: "bold",
                        }}
                        onClick={this.handleSignUp}
                      >
                        Sign Up
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
