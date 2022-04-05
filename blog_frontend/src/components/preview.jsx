// *------ I M P O R T S ------*
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Preview = ({post}) => {
  return (
    <Card
      style={{ width: "auto" }}
      className="postPreview text-center d-flex justify-content-center"
      id="featured"
    >
      <Card.Header>
        <h2>Post Title</h2>
      </Card.Header>
      <Card.Img variant="top" src="https://picsum.photos/900/450" />
      <Card.Body>
        <Card.Title>Subtitle</Card.Title>
        <Card.Text className="excerpt">
          Oh, you're gonna be in a coma, all right. Michael! I'm half machine.
          I'm a monster. There's so many poorly chosen words in that sentence.
          Get me a vodka rocks. And a piece of toast. He'll want to use your
          yacht, and I don't want this thing smelling like fish. Guy's a pro.
          But I bought a yearbook ad from you, doesn't that mean anything
          anymore? We just call it a sausage. That's why you always leave a
          note! I hear the jury's still out on science.
        </Card.Text>

       <Link to="apost"><Button variant="outline-dark">Read</Button></Link> 
      </Card.Body>
    </Card>
  );
};

export default Preview;
