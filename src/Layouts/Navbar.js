import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

function NavBarr() {
    return(
        
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
         <Navbar.Brand href="#home">Tienda React</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <Nav.Link href="#home">Inicio</Nav.Link>
           <Nav.Link href="#link">Contacto</Nav.Link>
           
         </Nav>
         </Navbar.Collapse>
        </Container>
      </Navbar>
        
    )
}
export default NavBarr