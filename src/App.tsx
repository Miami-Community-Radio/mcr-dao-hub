import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="navbar-pink">
      <Container fluid>
        <Navbar.Brand href="#" className="navbar-left"><img src="logo.png" style={{width:"50px"}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#action1">VISION</Nav.Link>
            <Nav.Link href="#action2">GALLERY</Nav.Link>
            <Nav.Link href="#action2">CONTACT</Nav.Link>
            <NavDropdown title="DOCS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">RESOURCE LINK 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              RESOURCE LINK 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              RESOURCE LINK 3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Button className="btn-black mr-auto" variant="dark">JOIN LEGENDARY</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Container className="titleDiv">
      <Row>
        <Col lg="2"></Col>
        <Col lg="1"><img src="logo.png" style={{width:"50px"}}></img></Col>
        <Col lg="7"><h1 className="title">L3GENDARY DAO</h1></Col>
        <Col lg="2"></Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col lg="2"></Col>
        <Col lg="4" className="about">
          <p>Decentralization has been a major foundation of queer theory since it came to fruition. Queers, who often are disenfranchised, misunderstood, repelled, and even made illegal, have been accustomed to not having a central power figure.</p>
          <p>As we continue to challenge the status quo, we believe that the rise of every movement requires not only a flame but a spark that flickers and lights every community to action.</p>
          <p>L3GENDARY DAO seeks to be that spark that bolsters hope for the underrepresented, creates opportunity for the marginalized and elevates the plight of the LGBTQ+ community from struggle to success. </p>
        </Col>
        <Col className="about" lg="4">
          <p>We onboard queer professionals through online IRL events; by providing a welcoming Web3 learning environment, we are tapping into its largely unexplored, creative potential.</p>
          <p>On top of this community outreach, our goal is to release products as a DAO, starting with <a target="_blank" href='https://www.raze.money/'>Raze.Money</a>; a decentralized fundraising platform that assists with the delivery of liquidity to those who need it most & awards Impact Certificate NFTs to contributors.</p>
          <p>We are just getting started. Join us in this web 3 queer revolution, one where equality, equity and justice are all in mind and action</p>
        </Col>
        <Col lg="2"></Col>
      </Row>
      </Container>
      <section className="footer-dark wf-section">
     
      <Container>
            <div className="footer-wrapper">
              
                <Row>
                  <Col lg="1"></Col>
                  <Col lg="2">
                    <a href="https://legendary-e12c43-d18748dfc94ce44960060c.webflow.io/#" className="footer-brand w-inline-block">
                      <img src="logo.png" loading="lazy" height="100" alt=""></img>
                    </a>
                  </Col>
                  <Col lg="2">
                    <div id="w-node-_827eadb8-9f58-750e-956b-8fe0e76cfedc-81bc5100" className="footer-block">
                      <div className="title-small">L3GENDARY</div>
                      <a href="https://legendary-e12c43-d18748dfc94ce44960060c.webflow.io/#" className="footer-link">MISSION</a>
                      <a href="https://legendary-e12c43-d18748dfc94ce44960060c.webflow.io/#" className="footer-link">GALLERY</a>
                      <a href="https://legendary-e12c43-d18748dfc94ce44960060c.webflow.io/#" className="footer-link">JOIN</a>
                      <a href="https://legendary-e12c43-d18748dfc94ce44960060c.webflow.io/#" className="footer-link">CONTACT</a>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div id="w-node-_827eadb8-9f58-750e-956b-8fe0e76cfee5-81bc5100" className="footer-block">
                      <div className="title-small">DOCS</div>
                      <a href="https://legendary-e12c43-d18748dfc94ce44960060c.webflow.io/#" className="footer-link">Blog post name list goes here</a>
                      <a href="https://legendary-e12c43-d18748dfc94ce44960060c.webflow.io/#" className="footer-link">Blog post name list goes here</a>
                      <a href="https://legendary-e12c43-d18748dfc94ce44960060c.webflow.io/#" className="footer-link">Blog post name list goes here</a>
                    </div>
                  </Col>
                  <Col lg="2">
                    <div id="w-node-_827eadb8-9f58-750e-956b-8fe0e76cfef0-81bc5100" className="footer-block">
                      <div className="title-small">About</div>
                      <a href="https://legendary-e12c43-d18748dfc94ce44960060c.webflow.io/#" className="footer-link">Terms &amp; Conditions</a>
                      <a href="https://legendary-e12c43-d18748dfc94ce44960060c.webflow.io/#" className="footer-link">Privacy policy</a>
                      <div className="footer-social-block">
                        <a href="https://legendary-e12c43-d18748dfc94ce44960060c.webflow.io/#" className="footer-social-link w-inline-block">
                          <img src="./Design_files/62434fa732124ac15112aad5_twitter small.svg" loading="lazy" alt=""></img>
                        </a>
                        <a href="https://legendary-e12c43-d18748dfc94ce44960060c.webflow.io/#" className="footer-social-link w-inline-block">
                          <img src="./Design_files/62434fa732124a389912aad8_linkedin small.svg" loading="lazy" alt=""></img>
                        </a>
                          <a href="https://legendary-e12c43-d18748dfc94ce44960060c.webflow.io/#" className="footer-social-link w-inline-block">
                            <img src="./Design_files/62434fa732124a51bf12aae9_facebook small.svg" loading="lazy" alt=""></img>
                          </a>
                        </div>
                    </div>
                  </Col>
                  <Col lg="1"></Col>
                </Row>
             
          </div>
          </Container>
          
        <div className="footer-divider"><hr></hr></div>
        <div className="footer-copyright-center">Copyright © 2022 L3GENDARY DAO</div>
        
      </section>
    </div>
  );
}

export default App;
