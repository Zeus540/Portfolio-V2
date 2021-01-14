import React, { Component } from 'react'
import styled from 'styled-components'
import 'react-alice-carousel/lib/alice-carousel.css'
import Kkwe from '../images/Kkwe.png'
import Crud from '../images/Crud.png'
import FunFox from '../images/FunFox.png'
import Port from '../images/Port.png'
import Rot from '../images/Rot.png'
import Nike from '../images/Nike.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
height: 100%;
margin:0 auto;
@media (min-width: 1px) and (max-width: 426px) {
  margin-bottom:20vw;
  width: 80%;
  }
`

const  Holder = styled.div`
display:flex;
margin: 0px auto;
padding-bottom: 0px;
flex-direction:row;
width:80vw;
height: inherit;
margin: 10vw 10vw;
@media (min-width: 1px) and (max-width: 426px) {
 width:100%;
 display: flex;
 flex-direction: column;
 margin: 0vw 0vw;
 }
`

const  HolderInner = styled.div`
display:flex;

padding-bottom: 0px;
flex-direction:column;
width:100%;

@media (min-width: 1px) and (max-width: 426px) {
  margin: 8vw 0vw 0.5vw 0vw;
  flex-direction:column;
 }
`


const ProjectHeading =styled.h1`
font-size:6vw;
color:white;
font-family:arial;
font-weight:bolder;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:9vw;
  margin-bottom:2vw;
 }
`

const Heading =styled.h1`
font-size:1vw;
color:white;
font-family:arial;
margin: 0.5vw 0vw 0.5vw 0.5vw;

@media (min-width: 1px) and (max-width: 426px) {
  font-size: 3.5vw;
 }
`
const Img =styled.img`
width:100%;
height:100%
 
@media (min-width: 1px) and (max-width: 426px) {
  margin-top:5vw; 
  width:100%;
  height:100%
 }
`
const ImgHolder =styled.div`
width:60vw;

 
@media (min-width: 1px) and (max-width: 426px) {
  width:100%;

 }
`

class Gallery1 extends Component {
 componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
  render() {

   

    return (
      
      <Container>
    
  <Holder data-aos='slide-up'> 
 
      <HolderInner>
      <a href="https://kkwe.co.za/" target="_blank" rel="noopener noreferrer">
      <ProjectHeading  >Kkwe</ProjectHeading>
  <Heading  >Website - Events Planner</Heading>
  <Heading  >REACT.JS - AOS </Heading>
  </a>
  </HolderInner>
  <ImgHolder>
  <Img src={Kkwe} alt=""/>
  </ImgHolder>
  
  
          </Holder>
         
          <Holder data-aos='slide-up'> 
 
 <HolderInner>
 <a href="https://zeus540.github.io/react-firebase-crud-app/" target="_blank" rel="noopener noreferrer">
 <ProjectHeading  >Crud App</ProjectHeading>
<Heading  >WEBSITE</Heading>
<Heading  >REACT.JS - SCSS </Heading>
</a>
<Heading  >
<a href="https://github.com/Zeus540/react-firebase-crud-app" target="_blank" rel="noopener noreferrer">
VIEW CODE
</a>
</Heading>
</HolderInner>
<ImgHolder>
<Img src={Crud} alt=""/>
</ImgHolder>


     </Holder>

     <Holder data-aos='slide-up'> 
 
 <HolderInner>
 <a href="https://FunFox.co.uk/" target="_blank" rel="noopener noreferrer">
 <ProjectHeading  >FunFox</ProjectHeading>
<Heading  >WEBSITE - E-COMMERCE</Heading>
<Heading  >WORDPRESS - WOOCOMMERCE </Heading>
</a>
</HolderInner>
<ImgHolder>
<Img src={FunFox} alt=""/>
</ImgHolder>


     </Holder>

 

<Holder data-aos='slide-up'> 

<HolderInner>
<a href="https://zaheer.netlify.com" target="_blank" rel="noopener noreferrer">
<ProjectHeading  >Portfolio V1</ProjectHeading>
<Heading  >WEBSITE</Heading>
<Heading  >REACT.JS </Heading>
</a>
<Heading  >
<a href="https://github.com/Zeus540/Portfolio-V1" target="_blank" rel="noopener noreferrer">
VIEW CODE
</a>
</Heading>
</HolderInner>
<ImgHolder>
<Img src={Port} alt=""/>
</ImgHolder>


</Holder>

     <Holder data-aos='slide-up'> 
 
 <HolderInner>
 <a href="https://rottweileraddicts.netlify.app/" target="_blank" rel="noopener noreferrer">
 <ProjectHeading  >Rottweiler Addicts</ProjectHeading>
<Heading  >WEBSITE </Heading>
<Heading  >HTML - CSS GRID - JAVASCRIPT </Heading>
</a>
<Heading  >
<a href="https://github.com/Zeus540/Rottweiler" target="_blank" rel="noopener noreferrer">
VIEW CODE
</a>
</Heading>
</HolderInner>
<ImgHolder>
<Img src={Rot} alt=""/>
</ImgHolder>


     </Holder>

     
     <Holder data-aos='slide-up'> 
 
 <HolderInner>
 <a href="https://nikegallery.netlify.app/" target="_blank" rel="noopener noreferrer">
 <ProjectHeading  >Nike AF1 Gallery</ProjectHeading>
<Heading  >WEBSITE</Heading>
<Heading  >REACT.JS</Heading>
</a>
<Heading  >
<a href="https://github.com/Zeus540/Nike" target="_blank" rel="noopener noreferrer">
VIEW CODE
</a>
</Heading>
</HolderInner>
<ImgHolder>
<Img src={Nike} alt=""/>
</ImgHolder>


     </Holder>
         
      </Container>
    );
  }
}
export default Gallery1;