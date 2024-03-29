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
import Alert from 'react-bootstrap';
import {ethers} from 'ethers';
import Web3Modal from 'web3modal';
import Card from 'react-bootstrap/Card';
import { hasRestParameter, setCommentRange } from 'typescript';
import {Text, Input} from "@mantine/core";
import { walletconnect } from 'web3modal/dist/providers/connectors';
import abi from './abi.json';
import dotenv from  'dotenv'
import { Field, Form, Formik } from "formik";

function App() {
  const providerUrl = process.env.REACT_APP_ALCHEMY_PROVIDER_URL || "http://localhost/3000";
  const provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com/");
  let [web3Provider, setWeb3Provider] = useState<ethers.providers.Web3Provider>();
  const [contractWrite, setContractWrite] = useState<any>();
  const [contractRead, setContractRead] = useState<any>();
  const [alert, setAlert] = useState<any>();
  const [message, setMessage] = useState<any>();
  const [address, setAddress] = useState<any>();
  const [residentTokensInCirculation, setResidentTokensInCirculation] = useState<any>();
  const [crewTokensInCirculation, setCrewTokensInCirculation]= useState<any>();
  const [teamTokensInCirculation, setTeamTokensInCirculation]= useState<any>();
  const [currentSeason, setCurrentSeason]= useState<any>();
  const [nextSeason, setNextSeason]= useState<any>();
  const [signer, setSigner]= useState<any>();
  const [network, setNetwork]= useState<any>();
  const [tokenId, setTokenId] = useState<any>();
  const [tokenUriInput, setTokenUriInput] = useState<any>();
//   const network = {
//     name: "main",
//     chainId: 137,
//     ensAddress: "0x7021f99161e24d42712a6a572ab7315c8da190f2"
// };

const alchemy = new ethers.providers.AlchemyProvider('matic', process.env.REACT_APP_ALCHEMY_API_KEY)

  async function connectWallet(){
    try{
      const providerOptions = {
        options: {
          package: null,
          alchemy: process.env.REACT_APP_ALCHEMY_API_KEY,
          infuraId: process.env.REACT_APP_INFURA_ID // required
        }
      };

      let web3Modal = new Web3Modal({
        network: "mainnet",
        cacheProvider: true,
        providerOptions
      });

      const web3ModalInstance = await web3Modal.connect();
      console.log(web3ModalInstance);
      
      const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);
      if(web3ModalProvider){
        setWeb3Provider(web3ModalProvider);
      }
      //console.log(web3ModalProvider.provider);
      setSigner(web3ModalProvider.getSigner());

      setContractWrite(new ethers.Contract("0x7021f99161e24d42712a6a572ab7315c8da190f2", abi as ethers.ContractInterface, web3ModalProvider.getSigner()));
      setContractRead(new ethers.Contract("0x7021f99161e24d42712a6a572ab7315c8da190f2", abi as ethers.ContractInterface, web3ModalProvider));

      const address = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if(address){
        //console.log(address);
        setAddress(address);
      }

      const network = await web3ModalProvider.getNetwork();
      setNetwork(network);
      console.log('Current network:', network);

    }catch(error){
        console.log(error);
    }
  }


  //read contract

  const getResidentTokensInCirculation = async () => {
    //console.log('get team tokens');
    var response = await contractRead.residentTokensInCirculation();
   // console.log(response);
    setResidentTokensInCirculation(response);
  }

  const getCrewTokensInCirculation = async () => {
    //console.log('get crew tokens in circulation');
    var response = await contractRead.commemorativeTokensInCirculation();
    //console.log(response);
    setCrewTokensInCirculation(response);
  }

  const getTeamTokensInCirculation = async () => {
    // console.log('get team tokens');
    var response = await contractRead.teamTokensInCirculation();
    //console.log(response);
    setTeamTokensInCirculation(response);
  }

  const getCurrentSeason = async() => {
      var res = await contractRead.currentSeason();
      setCurrentSeason(res.toString());
  }


  //write contract

  const mintSeason = async() => {
    try{
      getSigner();
      var res = await contractWrite.mintSeason(address, 50, [], {gasLimit: 5000000});
      console.log(res);
      setMessage(res);
    }catch(error) {
      console.error(error);
      setAlert('error, see console');
    }
  }

  const mintTeamTokens = async() => {
    try{
      var res = await contractWrite.mintSeason(address, 25, [], {gasLimit: 20000000});
      console.log(res);
      setMessage(res);
    }catch(error) {
      console.error(error);
      setAlert('error, see console');
    }
  }

  const mintCommemorativeTokens = async() => {
    try{
      var res = await contractWrite.mintSeason(address, 50, [], {gasLimit: 20000000});
      console.log(res);
      setMessage(res);
    }catch(error) {
      console.error(error);
      setAlert('error, see console');
    }
  }

  const performUpKeep = async() => {
    try{
      contractWrite.connect(signer);
      var tx = await contractWrite.performUpkeep([], {gasLimit: 20000000});
      console.log(tx);

      console.log('Transaction hash:', tx.hash);

      // Wait for the transaction to be mined
      const receipt = await tx.wait();
      console.log('Transaction mined:', receipt);
     
      setMessage('Season burnt and new season started!');
    }catch(error) {
      console.error(error);
      setAlert('error, see console');
    }
  }

  const setTokenUri = async() => {
    try{
    var res = await contractWrite.setTokenUri(tokenId, tokenUriInput, {gasLimit: 20000000});
    setMessage(res);
    
    }catch(error) {
      console.error(error);
      setAlert('error, see console');
    }
  }


  const getSigner = async() => {
    if(address){
      const signer = web3Provider?.getSigner(address.toString());
      if(signer){
        const address = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if(address){
          //console.log(address);
          setAddress(address);
        }
        setSigner(signer);
      }
    }else{
      //window.alert('Not signed in.')
    }
  }

  
  const getContractURI = async() => {
   return await contractRead.contractURI();
  }


  useEffect( () => {
    // if(address && !signer){
    //   getSigner();
    // }

    if(signer){
      console.log(signer);
    }

    if(!teamTokensInCirculation){
        getTeamTokensInCirculation();
    }

    if(!residentTokensInCirculation){
      getResidentTokensInCirculation();
  }


    if(!currentSeason){
      getCurrentSeason();
    }
  }, [address, web3Provider, signer, web3Provider, nextSeason, currentSeason, teamTokensInCirculation, residentTokensInCirculation, crewTokensInCirculation]);

  
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
            <Button className="btn btn-dark mr-auto" variant="dark" onClick={connectWallet}>Connect Wallet</Button>
          }
          {address && 
            <p className="mr-auto" style={{color:"white", marginTop:"20px"}}>{address}</p>
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
        {
          network &&
            <p style={{color:"white"}}>Network: {network.name}</p>
        }
      {address &&
          <p style={{color:"white"}}><>Wallet Addy: {address.toString()}</></p>
      }
    </div>

    <Container>
      <h1 style={{color:"white"}}>Tokens</h1>
      {/* <Button style={{backgroundColor:"white"}}><a style={{ color:"black", textDecoration:"none"}} href="https://opensea.io/collection/miami-community-radio">OpenSea</a></Button> */}
      <Row>
        <Col lg="6">
          {nextSeason && <h2>Next Season Start Date:{nextSeason}</h2>}
          <h3 style={{color:"white"}}>Season 1 Member</h3>  
          <Card>
           <a href="https://opensea.io/assets/matic/0x7021f99161e24d42712a6a572ab7315c8da190f2/0"  target="_blank" style={{textDecoration:"none", color:"orange"}}>
              <img src="https://i.seadn.io/gcs/files/08d64386d2e2f6f54cfcfff2070681a6.png?auto=format&w=1920" style={{width:"300px", margin: "0 auto"}}></img>
              {residentTokensInCirculation && <p style={{color:"black"}}>Tokens In Circulation: {residentTokensInCirculation.toString()}</p>}
            <p>Season 1 MCR Resident</p>
           </a>
          </Card>

        </Col>
        <Col lg="6">
          <h3 style={{color:"white"}}>Team</h3>  
          <Card>
            <a href="https://opensea.io/assets/matic/0x7021f99161e24d42712a6a572ab7315c8da190f2/0" target="_blank" style={{textDecoration:"none", color:"orange"}}>
              <img src="https://i.seadn.io/gcs/files/08d64386d2e2f6f54cfcfff2070681a6.png?auto=format&w=1920" style={{width:"300px", margin: "0 auto"}}></img>
              {teamTokensInCirculation && <p style={{color:"black"}}>Tokens In Circulation: {teamTokensInCirculation.toString()}</p>}
              <p>MCR Team</p>
            </a>
          </Card>
        </Col>
      </Row>
      <br></br>
      {currentSeason && <h2 style={{color:"white"}}>Current Season:{currentSeason}</h2>}
      {address && 
        <Container style={{color:"white"}}>
          <h2>Contract Functions</h2>
          
            <Button onClick={performUpKeep} style={{marginRight:"2%", backgroundColor:"red", borderColor:"red"}}>Burn Season</Button>
            <Button onClick={mintSeason}  style={{marginRight:"2%"}}>Mint Season</Button>
            <Button onClick={mintCommemorativeTokens} style={{marginRight:"2%"}}>Mint Commemorative Tokens</Button>

          <h1 style={{marginTop:"5%"}}>Set Token Metadata</h1>
          <p>Token Ids: 0(Team), 1(Resident), 2,3,4,5,6,7,8...(Commemorative)</p>
          <Formik
                initialValues={{tokenId:tokenId, tokenUriInput:tokenUriInput}}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(_, actions) => {
                    setTokenUri();
                }}
            >
                {(props) => (
                <Form style={{ width: "100%" }}>
                    <Field name="tokenId">
                        {() => (
                        <>
                            <Text>Token Id</Text>
                            <Input
                            value={tokenId}
                            onChange={(e:any) => setTokenId(e.target.value)}
                            type="password"
                            placeholder="Password"
                            />
                        </>
                        )}
                    </Field>
                    <Field name="tokenUriInput">
                        {() => (
                        <>
                            <Text>Token Uri</Text>
                            <Input
                            value={tokenUriInput}
                            onChange={(e:any) => setTokenUriInput(e.target.value)}
                            type="password"
                            placeholder="Retype Password"
                            />
                        </>
                        )}
                    </Field>
                    <Button type="submit" style={{backgroundColor:"#238BE6", marginTop:'2%'}}>
                      Set Token Uri
                    </Button>
                </Form>
                )}
            </Formik>
          {alert && <div style={{marginTop:"20px"}}><p className="alert alert-danger m-auto" style={{width:"50%"}} >{alert} </p></div>}
          {message && <p style={{color:"green"}}>{message} </p>}
        </Container>
      }
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
