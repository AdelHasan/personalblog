import { Col, Row, Card } from "react-bootstrap";
import Preview from "./Preview";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <Row>
      
        
          <h2 id="quote">
            Welcome to my blog! I am Adel Hasan, a full stack developer from Houston, Texas.
          </h2>
        
      
      <Col lg={6}>
        <Preview />
      </Col>
      <Col lg={6}>
        <Preview />
      </Col>
      <Col lg={6}>
        <Preview />
      </Col>
      <Col lg={6}>
        <Preview />
      </Col>
      <Col lg={6}>
        <Preview />
      </Col>
      <Col lg={6}>
        <Preview />
      </Col>
      <Col lg={6}>
        <Preview />
      </Col>

      {/* <Col lg={3}>
        <Sidebar />
      </Col> */}
    </Row>
  );
};

export default Home;
