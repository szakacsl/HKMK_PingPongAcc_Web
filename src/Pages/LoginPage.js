import React from "react";
import { useNavigate } from "react-router-dom";

import HeroImage from "../Components/HeroImage";
import CompanyLogo from "../Components/CompanyLogo";

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

    window.location = "/company";
  };

  render() {
    return (
      <>
        <div style={{ display: "flex" }}>
          <div>
            <HeroImage />
          </div>
          <div
            style={{
              width: window.innerWidth * 0.32,
              height: window.innerHeight,
              // backgroundColor: "green",
            }}
          >
            <div
              style={{
                paddingLeft: "35%",
                paddingTop: "35%",
                width: window.innerWidth * 0.32,
              }}
            >
              {/* <CompanyLogo imageSrc="../Assets/hkmk_app_logo.png" /> */}
              <CompanyLogo style={{ width: "150 px", height: "150px" }} />
              <table>
                <tbody>
                  <tr>
                    <td>
                      Company Name:
                      <input
                        type="text"
                        onChange={this.handleCompanyNameChange}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Password:
                      <input
                        type="password"
                        onChange={this.handlePasswordChange}
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <button type="button" onClick={this.handleSignIn}>
                        Sign In
                      </button>
                    </td>
                    <td>
                      <button type="button">Sign Up</button>
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
