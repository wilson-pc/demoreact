import React, { Component, componentDidMount } from "react";
import Card from "../components/cart";
import axios from "../packages/axios";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }
  async componentDidMount() {
    let { data } = await axios.get("blog");
    this.setState({ posts: data });
  }

  render() {
    return (
      <div className="container">
        Home page
        {this.state.posts.map((post) => (
          <Card post={post} key={post.id}></Card>
        ))}
      </div>
    );
  }
}

export default Home;
