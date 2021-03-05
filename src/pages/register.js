import React, { Component, componentDidMount } from "react";
import axios from "../packages/axios";
import { Redirect } from "react-router-dom";

class Register extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      name: "",
      email: "",
      password: "",
      redirect: false,
      image: undefined,
    };
  }

  componentDidMount() {
    console.log(" register ditMount");
  }

  saveUser = async (e) => {
    e.preventDefault();
    let { redirect, ...rest } = this.state;
    let { data } = await axios.post("user", rest);

    this.setState({
      redirect: true,
    });
  };
  setValue = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  toBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  };

  selectImage = async (e) => {
    let img = document.createElement("input");
    img.type = "file";
    img.accept = "image/*";
    img.onchange = async (e) => {
      let file = e.target.files[0];
      console.log(file);
      let base64 = await this.toBase64(file);

      this.setState({ image: base64 });
    };
    img.click();
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    const { image } = this.state;

    const content = () => {
      if (image) {
        return (
          <img
            src={this.state.image}
            alt="imagen seleccionado"
            width="300"
          ></img>
        );
      } else {
        return (
          <button
            onClick={this.selectImage}
            className="btn btn-danger"
            type="button"
          >
            {" "}
            seleccionar imagen
          </button>
        );
      }
    };
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
                name="name"
                value={this.state.name}
                onChange={this.setValue}
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
                name="email"
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

export default Register;
