import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  BrowserRouter as Router,
  Route,
  Routes,Link
} from "react-router-dom";

function Pokenavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
        <Navbar.Brand href="#home">pokeball-img</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/'>Home</Link>  
            <Link to='/cart'>Cart</Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Pokenavbar;
