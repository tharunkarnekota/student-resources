import React from 'react'
import vjit2 from "./vjit6.png"
import clubs2 from "./clubs3.png"
import { Navbar, Container } from 'react-bootstrap'
import "./App.css"


import details from "./details.json"

const App = () => {

  return ( 
    
    <div >
      
      
            <Navbar className="logoss">
                <Container>
                <Navbar.Brand href="https://vjit.ac.in" target="_blank"><img src={vjit2} className="head" width="97%" height="89%" alt="vjit" /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <img className="headerclub" src={clubs2} width="60%" height="60%" alt="clubs" />
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>

            <br /><br /><br /><br /><br /><br />

      <center>
        <h2 style={{alignItems:"center"}}><b>-: Sudents Resources :-</b></h2></center><br /><br />
      <center>
         
      <div className = "row" >
          {details.map(item =>{ 
              return(
                
                  <div className = "col-md-4 sizee col movement" >
                  <div className="card" style={{"width": "28.5rem"}} >
                  <img src={item.imgUrl} height="30%" width="20%" className="card-img-top" alt="img" />
                  <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p>{item.description}</p>
                      <a href={item.appUrl} target="_blank" rel="noreferrer"><button className="btn btn-primary">Click here for more info</button></a>

                  </div>
                  </div>
                  </div>
                 
                

              )})}
      </div>
      <br /><br /><br />
      </center>

      <div class="text-center">

        <div class="footer" >

          <p>Made with <span style={{ color: "red" }}>❤</span> by <a href="https://GitHub.com/tharunkarnekota" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}><span style={{color:"black"}}><b>Tharun</b></span></a> - IT 3rd Year - 2023 Batch <br />
            Project Designed for Technical Clubs of VJIT  - Guided by <a href="https://in.linkedin.com/in/venky-jayasurya" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}><span style={{color:"black"}}><b> Venkateshwara Rao Jayasurya</b> </span></a></p>
          {/* https://in.linkedin.com/in/venky-jayasurya */}

        </div>

      </div>

    </div>
  )
}

export default App

















