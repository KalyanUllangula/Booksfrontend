import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Authors extends React.Component {
  state = {
    authors: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/lms/viewAuthor")
      .then((response) => {
        console.log(response);
        this.setState({ authors: response.data });
      })
      .catch((error) => console.log(error));
  }
  handleDelete = (id) => {
    axios.delete(`http://localhost:8080/lms/deleteAuthor/${id}`).then((res) => {
      const authors = this.state.authors.filter((au) => au.authorId != id);
      this.setState({ authors: authors });
    });
  };
  render() {
    return (
      <div className = "container">
        <Link to="/lms/viewAuthor/add" className="btn btn-secondary btn-large mt-3 float-end">
          Add
        </Link>
        <h1>Author Page</h1>
        <table className="table w-75 mx-auto mt-5">
          <thead>
            <tr>
              <th>AuthorId</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>ContactNo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.authors.map((author) => (
              <tr>
                <td>{author.authorId}</td>
                <td>{author.firstName}</td>
                <td>{author.lastName}</td>
                <td>{author.email}</td>
                <td>{author.contactno}</td>
                <td>
                  <Link to={`/authors/update/${author.authorId}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-secondary me-2"
                    />
                  </Link>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-outline-danger"
                    onClick={() => this.handleDelete(author.authorId)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Authors;
