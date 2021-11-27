import axios from "axios";
import React, { Component } from "react";
import PostsTable from "./postsTables";

class Posts extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <PostsTable posts={this.state.posts} />
      </div>
    );
  }
}

export default Posts;