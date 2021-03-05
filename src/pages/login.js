import React, { Component, componentDidMount } from "react";
import axios from "../packages/axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      username: "",
      password: "",
      redirect: false,
      state: "hide",
    };
  }

  componentDidMount() {
    console.log(" register ditMount");
  }

  Login = async (e) => {
    try {
      e.preventDefault();
      let { redirect, ...rest } = this.state;
      this.setState({ state: "pending" });
      let { data } = await axios.post("auth/login", rest);

      this.setState({
        redirect: true,
      });
    } catch (error) {
      this.setState({ state: "error" });
    }
  };
  setValue = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    const { state } = this.state;

    const content = () => {
      if (state === "hide") {
      } else if (state === "pending") {
        return <h4>Espere entrando al sistema</h4>;
      } else if (state === "error") {
        return (
          <h5 style={{ color: "red" }}>Usuario o contraseña incorrecta</h5>
        );
      }
    };

    return (
      <div className="container">
        <br></br>
        {this.renderRedirect()}
        <form onSubmit={this.Login}>
          <div className="mb-3 row">
            <label for="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="staticEmail"
                name="username"
                value={this.state.email}
                onChange={this.setValue}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={this.state.password}
                onChange={this.setValue}
              />
            </div>
          </div>
          {content()}
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
