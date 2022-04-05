// *------ I M P O R T S ------*
import { Col, Row, Image } from "react-bootstrap";

// *------ P O S T ------*
const Post = () => {
  return (
    <Row>
      <Col lg={1}>
      </Col>
      <Col>
        <div className="text-center">
          <h2>General Assembly, a retrospective</h2>
          <Image fluid="true" rounded="true" src="https://images.unsplash.com/photo-1596457596404-350378e433c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
          <h4>The joys and challenges of a remote coding bootcamp</h4>
        </div>
        <div className="postBody">
        <p className="postBody">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          atque corporis temporibus nemo illo molestiae cum rerum eum veniam!
          Necessitatibus rerum velit impedit mollitia voluptatem architecto
          accusamus facilis excepturi ipsum. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Beatae nihil tenetur, repudiandae quis
          ipsam eaque quos rerum. Qui voluptates, laudantium quasi libero
          tempore, recusandae deserunt possimus omnis, distinctio voluptatibus
          quos!
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          atque corporis temporibus nemo illo molestiae cum rerum eum veniam!
          Necessitatibus rerum velit impedit mollitia voluptatem architecto
          accusamus facilis excepturi ipsum. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Eaque illo, repellendus vel nisi, esse
          nobis similique, eius suscipit at libero nostrum! Adipisci sunt
          nostrum tempora enim laborum quam tenetur error.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          atque corporis temporibus nemo illo molestiae cum rerum eum veniam!
          Necessitatibus rerum velit impedit mollitia voluptatem architecto
          accusamus facilis excepturi ipsum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sapiente nam earum quod temporibus
          necessitatibus dolore velit dolorum tempore a quaerat unde aspernatur
          ut, amet consectetur possimus? Quisquam incidunt repellat aspernatur?
        </p>

        

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          atque corporis temporibus nemo illo molestiae cum rerum eum veniam!
          Necessitatibus rerum velit impedit mollitia voluptatem architecto
          accusamus facilis excepturi ipsum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugit quibusdam libero, deserunt
          provident hic ullam enim ad animi rem, sunt culpa temporibus facilis
          dolor eligendi accusantium officiis pariatur impedit tempore!
        </p>
        </div>
      </Col>
      <Col lg={1}>
      </Col>
    </Row>
  );
};

export default Post;
