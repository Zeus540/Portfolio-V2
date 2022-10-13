import React, {Component} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Container = styled.div`
overflow: hidden;
padding: 0px 0px;
cursor:pointer;
@media (min-width: 1px) and (max-width: 426px) {
 flex-direction:column
 margin: 0px;
margin:40px 0vw;
}
 @media (min-width: 427px) and (max-width: 768px) {
 
  margin: 18vw 0vw;

  }
 @media (min-width: 769px) and (max-width: 1024px) {
  margin: 20vw 0vw 20vw 0vw;
  }
`


const Heading2 =styled.h1`
font-size:4vw;
color:#dfdfdf;
#2c3d65font-family:Pixel;

font-weight:bolder;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:10vw;
  }
`


const TextHolder =styled.div`
display:flex;

justify-content:center;
@media (min-width: 1px) and (max-width: 426px) {
 
 

  }
`

const Focus =styled.h1`
font-size:5vw;
color:#2c3d65;
margin:0px;
#2c3d65font-family:Pixel;
@media (min-width: 1px) and (max-width: 426px) {
  font-size: 27vw;
  }

`

const Projects = (props) => {
  return (
    <Container id="Projects" onClick={()=>{props.handleTriggerGhost()}} >
    <TextHolder>
      {/* <Focus data-aos='slide-up' data-aos-duration="1200"> 0</Focus>
      <Focus data-aos='slide-up' data-aos-duration="1400"> 2</Focus> */}
    <Heading2  >PROJECTS</Heading2>
    
    </TextHolder>
    
    
    </Container>
  )
}

export default Projects



