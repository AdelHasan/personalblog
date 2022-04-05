// I M P O R T S
import { Container, Col, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Nav";
import Home from "./components/Home";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="App">
      <div id="contentBox">
        <Navigation />
        

        <Container fluid="md" className="main">
        {/* <Hero/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/apost" element={<Post />} />
          </Routes>
        </Container>

        <Footer />
      </div>
    </div>
  );
}

export default App;
