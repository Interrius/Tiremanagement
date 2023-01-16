import Container from 'react-bootstrap/Container';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';

function BasicExample() {
    return (
      <>
      <Navbar bg="light" variant="light">
        <Container c>
          <Navbar.Brand href="#home">SpedR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
  }
  
  export default BasicExample;