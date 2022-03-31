// *------ I M P O R T S ------*
import { Card } from "react-bootstrap";
const Post = () => {
  return (
    <Card
      style={{ width: "auto" }}
      className="projectCard text-center d-flex justify-content-center"
    >
      <Card.Header>Post Title</Card.Header>
      <Card.Img variant="top" src="https://picsum.photos/900/450" />
      <Card.Body>
        <Card.Title>Subtitle</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Excerpt</Card.Subtitle>
        <Card.Text>Post Body</Card.Text>
        
      </Card.Body>
    </Card>
  )
}

export default Post