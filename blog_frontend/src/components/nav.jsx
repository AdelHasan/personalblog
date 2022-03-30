//  I M P O R T S
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" id="navbar">
        <Container>
          <Navbar.Brand>Adel Hasan</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="head-link">
              <Nav.Link  href="#" >Home</Nav.Link>
            </Link>
            <Link to="/archive" className="head-link">
              <Nav.Link href="#">Archive</Nav.Link>
            </Link>
            <Link to="/about" className="head-link">
              <Nav.Link href="#">About Me</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default Navigation;
