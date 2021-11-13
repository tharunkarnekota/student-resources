import React, { useState,useEffect } from 'react'
import vjit2 from "./vjit2.png"
import clubs2 from "./clubs3.png"
import { Navbar, Container } from 'react-bootstrap'
import "./App.css"

import details from "./details.json"

const App = () => {

  const [titlee,setTitlee] = useState("")
  const [img,setImg] = useState("")
  const [url,setUrl] = useState("")
  const [descript,setDiscript] = useState("")
 
  // const [demo,setDemo] = useState([])

  useEffect(()=>{
    var arr = []
    for (var i = 0; i < 3; i++) {
      var temp = details[i].id
      arr.push(temp)
    }
  
    setImg(details[0].imgUrl)
    setUrl(details[0].appUrl)
    setDiscript(details[0].description)
    setTitlee(details[0].title)

    console.log("2")
    console.log(details)
    
  
  },[])
 

  return (

    <div className="app">

      <Navbar className="pf">
        <Container>
          <Navbar.Brand href="https://vjit.ac.in"><img src={vjit2} className="head" width="33%" height="33%" alt="vjit" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <img className="headerr" src={clubs2} width="60%" height="60%" alt="clubs" />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <br /><br /><br /><br /><br /><br /><br /><br />

      <center>
      <div className = "row" >
          {/* {songs.map(song =>{ 
              return( */}
                  <div className = "col-md-4 sizee"  >
                  <div className="card" style={{"width": "21.5rem"}} >
                  <img src={img} className="card-img-top" alt="img" />
                  <div className="card-body">
                      <h5 className="card-title">{titlee}</h5>
                      <p>{descript}</p>
                      <a href={url}><p>{url}</p></a>

                  </div>
                  </div>
                  </div>


                  <div className = "col-md-4 sizee">
                  <div className="card" style={{"width": "21.5rem"}} >
                  <img src={img} className="card-img-top" alt="img" />
                  <div className="card-body">
                      <h5 className="card-title">{titlee}</h5>
                      <p>{descript}</p>
                      <a href={url}><p>{url}</p></a>

                  </div>
                  </div>
                  </div>


                  <div className = "col-md-4 sizee" >
                  <div className="card" style={{"width": "21.5rem"}} >
                  <img src={img} className="card-img-top" alt="img" />
                  <div className="card-body">
                      <h5 className="card-title">{titlee}</h5>
                      <p>{descript}</p>
                      <a href={url}><p>{url}</p></a>

                  </div>
                  </div>
                  </div>


                  <div className = "col-md-4 sizee" >
                  <div className="card" style={{"width": "21.5rem"}} >
                  <img src={img} className="card-img-top" alt="img" />
                  <div className="card-body">
                      <h5 className="card-title">{titlee}</h5>
                      <p>{descript}</p>
                      <a href={url}><p>{url}</p></a>

                  </div>
                  </div>
                  </div>


                  <div className = "col-md-4 sizee" >
                  <div className="card" style={{"width": "21.5rem"}} >
                  <img src={img} className="card-img-top" alt="img" />
                  <div className="card-body">
                      <h5 className="card-title">{titlee}</h5>
                      <p>{descript}</p>
                      <a href={url}><p>{url}</p></a>

                  </div>
                  </div>
                  </div>
              {/* )})} */}
      </div>
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

















