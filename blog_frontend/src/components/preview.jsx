// *------ I M P O R T S ------*
import { Card, Button } from "react-bootstrap";
const Preview = () => {
  return (
    <Card
      style={{ width: "auto" }}
      className="postPreview text-center d-flex justify-content-center"
    >
      <Card.Header>Post Title</Card.Header>
      <Card.Img variant="top" src="https://picsum.photos/900/450" />
      <Card.Body>
        <Card.Title>Subtitle</Card.Title>
        <Card.Text>Excerpt/Highlight from the blog post will go here, And why did 'I' have to take a cab? Why am I sticky and naked? Did I miss something fun? All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school!</Card.Text>
        
        <Button variant="primary">Read</Button>
      </Card.Body>
    </Card>
  );
};

export default Preview;
