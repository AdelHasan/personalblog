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
          title="Learning Python after JavaScript"
          imgLink="https://www.thewindowsclub.com/wp-content/uploads/2020/11/python-logo.png"
          subtitle="My burgeoning, enlightening experience of learning Python as my second programming language"
          excerpt="After spending most of my learning of full stack development with JavaScript and associated frameworks, pivoting to learning Python and Django was quite a mental shift. In this article I compare and contrast the two languages and their uses. And explain why I have enjoyed learning Python so much."
          link="/portfolio-retrospective" />
      </Col>
      <Col lg={6}>
        <Preview 
          title="Project Retrospective: React app"
          imgLink="https://pbs.twimg.com/card_img/1508756632582328324/5mefv2pH?format=png&name=medium"
          subtitle="Learning React through (so much) trial and error"
          excerpt="One of the biggest challenges I faced in my cohort at General Assembly was learning React. After building a solid foundational understanding of HTML, CSS and JavaScript to construct web pages, the move to React felt unintuitive and fraught with unnecessary complexity. But after spending a week building and debugging a React application for my second project, I came to appreciate the many benefits of what React has to offer."
          link="/" />
      </Col>
      {/* <Col lg={6}>
        <Preview 
          title="Learning a programming language vs. a foreign language"
          imgLink=""
          subtitle="My experience in both domains, differences and parallels"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          link="/portfolio-retrospective" />
      </Col> */}
    </Row>
  );
};

export default Articles;