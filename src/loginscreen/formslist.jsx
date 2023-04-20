import React from "react";

class Tableforms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      emailid: "",
      designation: "",
      mobilenumber: "",
      Loginstatus: false,
      name: false,
      email: false,
      mobile: false,
      design: false,
      items: [],
      employees: [],
    };
  }

  adduser = (event) => {
    event.preventDefault();
    // console.log("UserName :", this.state.username);
    // console.log("Email id:", this.state.emailid);
    // console.log("designation :", this.state.designation);
    // console.log("Mobile:", this.state.mobilenumber)

    this.setState({
      Loginstatus: true,
    });

    if (this.state.username === "") {
      this.setState({
        name: true,
        failed: false,
      });
      // } else if (this.state.username != "") {
      //   this.setState({
      //     name: false,
      //     // failed: true,
      //   });
      //   {
      //     var newuser = {
      //       id:
      //         this.state.length == 0
      //           ? 1
      //           : this.state.employees[this.state.employees.length - 1].id + 1,
      //       username: this.state.username,
      //       emailid: this.state.emailid,
      //       designation: this.state.designation,
      //       mobilenumber: this.state.mobilenumber,
      //       // };
      //     };
      //     var userslist = this.state.employees;
      //     userslist.push(newuser);
      //   }
      //   this.setState({
      //     employees: userslist,
      //   });
      // } else {
      // this.setState({
      //   name: false,
      //   // failed: true,
      // });
    } else if (this.state.emailid === "") {
      this.setState({
        name: false,
        email: true,
      });
    } else if (this.state.designation === "") {
      this.setState({
        email: false,
        design: true,
      });
    } else if (this.state.mobilenumber === "") {
      this.setState({
        design: false,
        mobile: true,
      });
    } else if (
      this.state.username !== "" &&
      this.state.emailid !== "" &&
      this.state.designation !== "" &&
      this.state.mobilenumber !== ""
    ) {
      this.setState({
        mobile: false,
      });

      var newuser = {
        id:
          this.state.employees.length === 0
            ? 1
            : this.state.employees[this.state.employees.length - 1].id + 1,
        username: this.state.username,
        emailid: this.state.emailid,
        designation: this.state.designation,
        mobilenumber: this.state.mobilenumber,
        // };
      };
      var userslist = this.state.employees;
      userslist.push(newuser);

      // this.setState({

      // });
      this.setState({
        employees: userslist,
        name: false,
        email: false,
        design: false,
        mobile: false,
        username: "",
        emailid: "",
        designation: "",
        mobilenumber: "",
      });
    }
  };

  onChangeusername = (event) => {
    console.log("OnChangeUsername");
    this.setState({
      username: event.target.value,
    });
  };
  onChangeemailid = (event) => {
    console.log("OnChangeEmailId");
    this.setState({
      emailid: event.target.value,
    });
  };
  onChangedesignation = (event) => {
    console.log("OnChangeDesignation");
    this.setState({
      designation: event.target.value,
    });
  };
  onChangemobilenumber = (event) => {
    console.log("OnChangeMobile Number");
    this.setState({
      mobilenumber: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="Loginform">
          <form action="">
            <div className="forms">
              <h3 className="heading">Login Form</h3>
              <div className="label">
                <label>
                  {" "}
                  <b /> Username
                  <b />
                </label>
                <input
                  type="username"
                  value={this.state.username}
                  onChange={this.onChangeusername}
                />
                <label> E-Mail Id</label>
                <input
                  type="E-Mail"
                  value={this.state.emailid}
                  onChange={this.onChangeemailid}
                />
                <label> Designation</label>
                <input
                  type="designation"
                  value={this.state.designation}
                  onChange={this.onChangedesignation}
                />
                <label> Mobile Number</label>
                <input
                  type="mobile"
                  value={this.state.mobilenumber}
                  onChange={this.onChangemobilenumber}
                />
                <div className="adduser">
                  <button
                    type="submit "
                    className="button btn btn-success"
                    onClick={this.adduser}
                  >
                    Add User
                  </button>
                  <Loginformstatus
                    Loginstatus={this.state.Loginstatus}
                    failed={this.state.failed}
                    success={this.state.success}
                    name={this.state.name}
                    email={this.state.email}
                    design={this.state.design}
                    mobile={this.state.mobile}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>UserName</th>
                  <th>Emailid</th>
                  <th>Designation</th>
                  <th>Mobile Number</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((employee, index) => (
                  <tr key={employee.id}>
                    <th>{employee.id}</th>
                    <td>{employee.username}</td>
                    <td>{employee.emailid}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.mobilenumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  zcbgz;
}

function Loginformstatus(props) {
  if (props.Loginstatus) {
    return (
      <div className="loginstatus mt-3">
        {props.failed && <div className="alert alert">Login Failed</div>}
        {props.success && <div className="alert alert">Login Success</div>}
        {props.name && <div className="alert alert">Please Enter UserName</div>}
        {props.email && (
          <div className="alert alert">Please Enter Email Id</div>
        )}
        {props.design && (
          <div className="alert alert">Please Enter Designation</div>
        )}
        {props.mobile && (
          <div className="alert alert">Please Enter Mobile Number</div>
        )}
      </div>
    );
  }
}

export default Tableforms;
