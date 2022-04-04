import { Row } from "react-bootstrap";

const Hero = () => {
  return (
    <Row id="heroContainer">
      <img className="heroImg" src="https://tile.loc.gov/image-services/iiif/service:pnp:highsm:28300:28341/full/pct:25/0/default.jpg"></img>

      <div className="heroLogo">
        <h2 id="heroCap">Adel Hasan</h2>
        <p id="heroP">Full Stack Developer</p>
        <button>Give me job</button>
      </div>
    </Row>
  );
};

export default Hero;
