import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className=" text-decoration-none">
          <h2 className="text-white" style={{fontSize:24}}>CookBook</h2>
        </NavLink>
        <Nav className="ml-auto">
          <NavLink to="/create" className="text-decoration-none text-white">
            <Button variant="outline-light">Add recipe</Button>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
