// I M P O R T S
import { Container, Col, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="App">
      <Navigation />
      <Container className="main">
        <Row>
          <Col lg={9}>
            <Row><Post /></Row>
            <Row><Post /></Row>
            <Row><Post /></Row>
          </Col>
          <Col lg={3}><Sidebar/></Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
