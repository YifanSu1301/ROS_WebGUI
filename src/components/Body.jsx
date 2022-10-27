import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter, Routes } from "react-router-dom";

class Body extends Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    );
  }
}

export default Body;
