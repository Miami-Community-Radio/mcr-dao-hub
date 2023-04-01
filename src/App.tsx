import React, { useEffect, useState } from 'react';
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
import Web3 from 'web3';
import {ethers} from 'ethers';
import Web3Modal from 'web3modal';
import Card from 'react-bootstrap/Card';
import { hasRestParameter } from 'typescript';
const providerOptions = {
 
}

function App() {
  const providerUrl = process.env.ALCHEMY_PROVIDER_URL || "http://localhost/3000";
  let [web3Provider, setWeb3Provider] = useState<ethers.providers.Web3Provider>();
  const [address, setAddress] = useState<any>();
  const [memberTokensInCirculation, setMemberTokensInCirculation] = useState();
  const [teamTokensInCirculation, setTeamTokensInCirculation] = useState();
  const [currentSeason, setCurrentSeason] = useState();
  const [nextSeason, setNextSeason] = useState();
  
  const network = {
    name: "main",
    chainId: 137,
    ensAddress: process.env.CONTRACT_ADDRESS
};

const alchemy = new ethers.providers.AlchemyProvider('matic', process.env.ALCHEMY_API_KEY)

  async function connectWallet(){
    try{
      let web3Modal = new Web3Modal({
        cacheProvider: false
      });

      

      const web3ModalInstance = await web3Modal.connect();
      console.log(web3ModalInstance);

      
      
      const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);
      if(web3ModalProvider){
        setWeb3Provider(web3ModalProvider);
      }
      console.log(web3ModalProvider.provider);

      const network = await web3ModalProvider.getNetwork();
      console.log('Current network:', network);

      getSigner();
    }catch(error){
        console.log(error);
    }
  }

  const getTokens = () => {
    if(process.env.CONTRACT_ADDRESS){
      const contract = new ethers.Contract(
      process.env.CONTRACT_ADDRESS,
      //abi,
      address
    );
  }
}

const getResidentTokensInCirculation = () => {
  if(process.env.CONTRACT_ADDRESS){
    const contract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    //abi,
    address
  );
}
}

const getCommemorativeTokensInCirculation = () => {
  if(process.env.CONTRACT_ADDRESS){
    const contract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    //abi,
    address
  );
}
}

const getTeamTokensInCirculation = () => {
  if(process.env.CONTRACT_ADDRESS){
    const contract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    //abi,
    address
  );
}
}

const getCurrentSeason = () => {
  if(process.env.CONTRACT_ADDRESS){
    const contract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    //abi,
    address
  );
}
}


const getExpireDate = () => {
  if(process.env.CONTRACT_ADDRESS){
    const contract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    //abi,
    address
  );
}
}

  const getSigner = async() => {
    const signer = web3Provider?.getSigner();
    if(signer){
      const address = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if(address){
        console.log(address);
        setAddress(address);
      }
    }
  }

  useEffect( () => {
    if(!address){
      getSigner();
    }
    if(address){
      console.log(address);
    }
  }, [address, web3Provider]);

  
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
            {/* <Nav.Link href="#action1">VISION</Nav.Link> */}
          </Nav>

          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          {!address &&
            <Button className="btn-black mr-auto" variant="dark" onClick={connectWallet}>Connect Wallet</Button>
          }
          {address && 
            <p className="mr-auto" style={{color:"white"}}>{address}</p>
          }
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Container className="mainDiv">
      <Row>
        <Col lg="2"></Col>
        <Col lg="1"><img src="logo.png" style={{width:"50px"}}></img></Col>
        <Col lg="7"><h1 className="title">MCR DAO</h1></Col>
        <Col lg="2"></Col>
      </Row>

      <div style={{marginTop:"5%"}}>
      {web3Provider && address &&
          <p><>Addy: {address.toString()}</></p>
      }
    </div>

    <Container>
      <h1 style={{color:"white"}}>Tokens</h1>
      <Button style={{backgroundColor:"white"}}><a style={{ color:"black", textDecoration:"none"}} href="https://opensea.io/collection/miami-community-radio">OpenSea</a></Button>
      <Row>
        <Col lg="6">
          {currentSeason && <h2>Current Season:{currentSeason}</h2>}
          {nextSeason && <h2>Next Season Start Date:{nextSeason}</h2>}
          <h3 style={{color:"white"}}>Season 1 Member</h3>  
          <Card>
            <img src="https://i.seadn.io/gcs/files/08d64386d2e2f6f54cfcfff2070681a6.png?auto=format&w=1920" style={{width:"300px", margin: "0 auto"}}></img>
            {memberTokensInCirculation && <p>Tokens In Circulation: {memberTokensInCirculation}</p>}
            <a href="https://opensea.io/assets/matic/0x7021f99161e24d42712a6a572ab7315c8da190f2/0" style={{textDecoration:"none", color:"orange"}}>Season 1 MCR Resident</a>
          </Card>
        </Col>
        <Col lg="6">
          <h3 style={{color:"white"}}>Team</h3>  
          <Card>
            <img src="https://i.seadn.io/gcs/files/08d64386d2e2f6f54cfcfff2070681a6.png?auto=format&w=1920" style={{width:"300px", margin: "0 auto"}}></img>
            {teamTokensInCirculation && <p>Tokens In Circulation: {teamTokensInCirculation}</p>}
            <a href="https://opensea.io/assets/matic/0x7021f99161e24d42712a6a572ab7315c8da190f2/0" style={{textDecoration:"none", color:"orange"}}>MCR Team</a>
          </Card>
        </Col>
      </Row>

    </Container>
    
    </Container>
   
      <section className="footer-dark wf-section">
     
        <div className="footer-divider"><hr></hr></div>
        <div className="footer-copyright-center">Copyright © 2023 MCR DAO</div>
        
      </section>
    </div>
  );
}

export default App;
