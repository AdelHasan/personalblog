import { Col, Row, Card } from "react-bootstrap";
import Preview from "./Preview";


const Articles = () => {
  return (
    <Row>
     
      <Col lg={6}>
        <Preview 
          title="General Assembly, a retrospective"
          imgLink="https://picsum.photos/900/450"
          subtitle="The joys and struggles of attending a coding bootcamp remotely"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          link="/apost" />
      </Col>

      <Col lg={6}>
        <Preview 
          title="General Assembly, a retrospective"
          imgLink="https://picsum.photos/900/450"
          subtitle="The joys and struggles of attending a coding bootcamp remotely"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          link="/apost" />
      </Col>
    </Row>
  );
};

export default Articles;