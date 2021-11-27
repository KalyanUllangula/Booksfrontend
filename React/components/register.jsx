import React, { Component } from "react";

class Register extends React.Component {
  render() {
    return (
      <div>
        <h1> Register</h1>
        <form className="w-50 mx-auto border border-primary border-2 rounded-end p-3">
          <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">
              FirstName
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">
              LastName
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputPassword3" className="col-sm-2 col-form-label">
              Re-Enter Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check"></div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
