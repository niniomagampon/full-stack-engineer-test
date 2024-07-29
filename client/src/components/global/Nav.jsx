import React from "react";
import { Nav, Button, Navbar, Form, Container } from 'react-bootstrap';

const NavGlobal = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">XCommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <Nav.Link href="/seller-login">Become a Seller</Nav.Link>
              <Nav.Link href="#action2">Customer Care</Nav.Link>
            </Nav>
            <a href="/cart">
            <div className="cart-container d-flex h5 mx-lg-0 mx-lg-2 my-lg-2 my-lg-0">
              <p>Cart</p>
              <i className="bi bi-cart mx-2"></i>
            </div>
            </a>
            <a href="/login"><button className="btn btn-primary mx-0 me-lg-3 my-2 my-lg-0">Login</button></a>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Item"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}


export default NavGlobal

