import React, { Component, componentDidMount } from "react";
import axios from "../packages/axios";
import { Redirect } from "react-router-dom";

class Register extends Component {
  constructor(pros) {
    super(pros);
    this.state = { name: "", email: "", password: "", redirect: false };
  }

  componentDidMount() {
    console.log(" register ditMount");
  }
  saveUser = async (e) => {
    e.preventDefault();
    console.log(this.state);
    // let {data}=await axios.post("blog",this.state)
    this.setState({
      redirect: true,
    });
  };

  setName = (e) => {
    this.setState((state, props) => ({
      name: e.target.value,
    }));
  };
  setEmail = (e) => {
    this.setState((state, props) => ({
      email: e.target.value,
    }));
  };

  setPassword = (e) => {
    this.setState((state, props) => ({
      password: e.target.value,
    }));
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div className="container">
        {this.renderRedirect()}
        <form onSubmit={this.saveUser}>
          <div className="mb-3 row">
            <label for="staticEmail" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="staticName"
                value={this.state.name}
                onChange={this.setName}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="staticEmail"
                value={this.state.email}
                onChange={this.setEmail}
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
                value={this.state.password}
                onChange={this.setPassword}
              />
            </div>
          </div>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Register;
