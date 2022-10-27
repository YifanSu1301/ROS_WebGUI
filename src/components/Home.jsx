import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Connection from "./Connection";

class Home extends Component {
  state = {};

  render() {
    return (
      <main>
        <h1 className="text-center mt-3">Robot Control Page</h1>

        <Connection />
      </main>
    );
  }
}

export default Home;
