
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 p-4">
          <Container>
            <Navbar.Brand className='navbar-logo' href="#"></Navbar.Brand>

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
                  <Nav.Link className='text-black' href="#our">Our Service</Nav.Link>
                  <Nav.Link className='text-black' href="#whyus">Why US</Nav.Link>
                  <Nav.Link className='text-black' href="#testimonial">Testimonial</Nav.Link>
                  <Nav.Link className='text-black' href="#faq">FAQ</Nav.Link>
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