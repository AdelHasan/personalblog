// *------ I M P O R T S ------*
import { getByTitle } from "@testing-library/react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Preview = ({title, imgLink, subtitle, excerpt, link }) => {
  return (
    <Card
      style={{ width: "auto" }}
      className="postPreview text-center d-flex justify-content-center"
      id="featured"
    >
      <Card.Header>
        <h2>{title}</h2>
      </Card.Header>
      <Card.Img variant="top" src={imgLink} />
      <Card.Body>
        <Card.Title>{subtitle}</Card.Title>
        <Card.Text className="excerpt">
          {excerpt}
        </Card.Text>

       <Link to={link}><Button variant="outline-dark">Read</Button></Link> 
      </Card.Body>
    </Card>
  );
};

export default Preview;
