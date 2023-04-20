//Controlled Components

import React from "react";

class Controlled extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      usernameerror: "",
      passworderror: "",
      checkbox: false,
      Loginstatus: false,
      success: false,
      failed: false,
      invalid: false,
      errors: {},
    };
  }
  submit = (event) => {
    event.preventDefault();

    console.log("UserEmail :", this.state.username);
    console.log("password:", this.state.password);

    this.setState({
      Loginstatus: true,
    });
    if (
      this.state.username === "dhilip123@gmail.com" &&
      this.state.password === "12345"
    ) {
      this.setState({
        success: true,
        failed: false,
      });
      this.props.useparam("/home" / this.state.username);
    } else {
      this.setState({
        failed: true,
        success: false,
      });
    }
    this.validate();
  };

  onChangeusername = (event) => {
    // console.log("OnChangeUsername");
    this.setState({
      username: event.target.value,
    });
  };
  onChangepassword = (event) => {
    // console.log("OnChanegePassword");
    this.setState({
      password: event.target.value,
    });
  };
  onChangecheckbox = (event) => {
    // console.log(event);
    this.setState({
      checkbox: event.target.value,
    });
  };
  validate() {
    // let nameError = "";
    // let emailError = "";
    // let passwordError = "";
    // if (!this.state.name) {
    //   nameError = "Name field is required";
    // }
    // const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if (!this.state.email || reg.test(this.state.email) === false) {
    //   emailError = "Email Field is Invalid ";
    // }
    // if (!this.state.password) {
    //   passwordError = "Password field is required";
    // }
    // if (emailError || nameError || passwordError) {
    //   this.setState({ nameError, emailError, passwordError });
    //   return false;
    // }
    // return true;
  }

  render() {
    return (
      <div className="Thirdcomponent">
        <div className="row d-flex justify-content-center align-items-center h-100 mt-100">
          <div
            id="loginform"
            // style={{ width: 350, marginTop: 100, height: 500 }}
          >
            <div className="card-body justify-content-center">
              {/* <h5 className="card-title">Login Form</h5> */}
              <h3 className="card-subtitle mt-5 ">Login Form</h3>
              <form>
                <div className="form-group">
                  <br />
                  {/* <label for="exampleInputEmail1">Email address</label> */}
                  <input
                    type="email"
                    // ref={this.username}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={this.state.username}
                    onChange={this.onChangeusername}
                    required
                  />
                </div>
                <Loginformstatus />
                <div className="form-group">
                  <br />
                  {/* <label for="exampleInputPassword1">Password</label> */}
                  <input
                    type="password"
                    ref={this.password}
                    autoComplete="newpassword"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChangepassword}
                  />
                  <span className="text-danger">
                    {this.state.passworderror}
                  </span>
                </div>
                <div>
                  <div className="form-check">
                    {/* <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                      value={this.state.checkbox}
                      onChange={this.onChangecheckbox}
                    />
                    <label className="form-check-label">Check me out</label> */}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-success justify-content-center"
                  onClick={this.submit}
                  style={{ marginTop: 10 }}
                >
                  Submit
                </button>
                <br />
                <br />
                <Loginformstatus
                  Loginstatus={this.state.Loginstatus}
                  failed={this.state.failed}
                  success={this.state.success}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Loginformstatus(props) {
  if (props.Loginstatus) {
    return (
      <div className="loginstatus mt-3">
        {props.failed && <div className="alert alert">Login Failed</div>}
        {props.success && <div className="alert alert">Login Success</div>}
      </div>
    );
  }
}

export default Controlled;
