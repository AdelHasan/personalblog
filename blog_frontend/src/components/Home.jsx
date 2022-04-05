// *------ I M P O R T S ------*
import { Col, Row, Card, Image } from "react-bootstrap";

// *------ H O M E ------*
const Home = () => {
  return (
    <div>
      <h1>Hi, I'm Adel Hasan</h1>
      <hr></hr>
      <Row>
        <Col lg={6}>
          <Image
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
            fluid="true"
            rounded="true"
          ></Image>
        </Col>
        <Col lg={6}>
          <h2>Welcome to my personal blog!</h2>
          <p>
            In 2021 I decided to change my professional outlook for the better
            by learning to code. What started with self-study led me to where I
            am now, a graduate of General Assembly's software engineering
            immersive program, ready to start my career as professional software
            developer. This blog is where I will document my process of learning
            and my journey of becoming and growing as a professional software
            developer.
          </p>

          <p>
            My experience with both self paced learning and the rigourous
            curriculum of General Assembly has taught me a lot about full-stack
            development with Javascript and Python, with associated frameworks.
            But more than anything, this process has taught me a lot about
            learning in the context of software developent. I understand how
            integral the continuous process of learning is to this profession.
          </p>

          <p>
            I've found one that writing about concepts I learn helps me to
            understand them more thoroughly. It gives me a clearer picture of my
            own knowledge and any gaps that exist. And that is what I hope to do
            here.
          </p>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <h2>My Interests</h2>
          <p>
            Subjects that I find compelling, and hope to explore more through the process of research and writing:
          </p>
          <ul>
            <li>Software Development</li>
            <li>Technology News</li>
            <li>Psychology</li>
            <li>History</li>
            <li>Economics</li>
          </ul>
          <p>
            I hope you find my exploration of these topics as engaging as I find the topics themselves. If you have any feedback or want to connect further, get in touch via the links below!
          </p>
        </Col>
        <Col lg={2}></Col>
      </Row>

      <hr></hr>
    </div>
  );
};

export default Home;
