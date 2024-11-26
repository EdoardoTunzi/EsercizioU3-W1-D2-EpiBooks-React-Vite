import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = (props) => {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container fluid className="justify-content-between">
        <Navbar.Brand href="#home" className="">
          {props.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNav;
