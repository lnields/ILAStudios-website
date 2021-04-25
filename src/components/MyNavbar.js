import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

/*
Current bug: cannot resolve 'react-bootstrap/Nav'
Tried changing Navbar.js --> MyNavbar.js
Tried installing bootstrap and popper
Tried adding './' to start of import
*/

function NavbarComponent() {
  return (
    <div className="NavbarComponent">
      <Navbar fixed="top" collapseOnSelect bg="light" expand="lg">
        <Navbar.Brand href="#home">ILA Studios</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#apparel">Apparel</Nav.Link>
            <Nav.Link href="#accessories">Accesories</Nav.Link>
            <Nav.Link href="#lookbook">Look Book</Nav.Link>
            <Nav.Link href="#artists">Artist spotlight</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavbarComponent;
