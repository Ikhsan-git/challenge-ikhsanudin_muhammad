
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

function OffcanvasExample() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="p-2 nav">
          <Container>
            <Navbar.Brand className='navbar-logo'><Link to="/">BCR</Link></Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas className='half-navbar'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >

              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className=" link justify-content-end gap-4 me-5 flex-grow-1 pe-3">
                  <Nav.Link className='text-black' href="#action1"><Link>Our Service</Link></Nav.Link>
                  <Nav.Link className='text-black' href="#action2">Why US</Nav.Link>
                  <Nav.Link className='text-black' href="#action2">Testimonial</Nav.Link>
                  <Nav.Link className='text-black' href="#action2">FAQ</Nav.Link>
                </Nav>
              </Offcanvas.Body>

            </Navbar.Offcanvas>


          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;