import { Col, Row, Card } from "react-bootstrap";
import Preview from "./Preview";


const Articles = () => {
  return (
    <Row>
     
      <Col lg={6}>
        <Preview 
          title="General Assembly, a retrospective"
          imgLink="https://images.unsplash.com/photo-1596457596404-350378e433c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          subtitle="The joys and struggles of attending a coding bootcamp remotely"
          excerpt="From January to April of 2022 I attended General Assembly's Software Engineering Immersive remote bootcamp. As much as I tried to prepare myself going into the program, there were some things I could only learn through experiencing the program. This article is about the ups and downs of my experience, and what I learned about myself and the world of software development through my immersive experience."
          link="/ga-retrospective" />
      </Col>

      <Col lg={6}>
        <Preview 
          title="Learning Python after JS"
          imgLink="https://upload.wikimedia.org/wikipedia/commons/2/21/Python_image.jpg"
          subtitle="My burgeoning, enlightening experience of learning Python as my second programming language"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          link="/portfolio-retrospective" />
      </Col>
      <Col lg={6}>
        <Preview 
          title="Project Retrospective: React app"
          imgLink="https://pbs.twimg.com/card_img/1508756632582328324/5mefv2pH?format=png&name=medium"
          subtitle="Learning React through (so much) trial and error"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          link="/portfolio-retrospective" />
      </Col>
      <Col lg={6}>
        <Preview 
          title="Learning a programming language vs. a foreign language"
          imgLink="https://www.iknowmyabc.com/wp-content/uploads/2020/08/Learn-Urdu-ABC.jpg"
          subtitle="My experience in both domains, differences and parallels"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          link="/portfolio-retrospective" />
      </Col>
    </Row>
  );
};

export default Articles;