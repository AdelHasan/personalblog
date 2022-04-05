import { Col, Row, Card } from "react-bootstrap";
import Preview from "./Preview";
import Sidebar from "./Sidebar";

const Articles = () => {
  return (
    <Row>
      
        
        
      {/* <div id="featured">
      <Col lg={12}>
        <Preview />
      </Col>
      </div> */}
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

export default Articles;