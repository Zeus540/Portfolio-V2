import React, { Component } from 'react'
import styled from 'styled-components'
import 'react-alice-carousel/lib/alice-carousel.css'
import Kkwe from '../images/Kkwe.png'
import Crud from '../images/Crud.png'
import FunFox from '../images/FunFox.png'
import Bright from '../images/Bright.png'
import Rot from '../images/Rot.png'
import Nike from '../images/Nike.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
height: 100%;
margin:0 auto;
overflow:hidden;
width: 80vw;
@media (min-width: 1px) and (max-width: 426px) {
  margin-bottom:20vw;
  width: 80vw;
  }
`

const  Holder = styled.div`
display:flex;
margin: 0px auto;
padding-bottom: 0px;
flex-direction:row;
width:80vw;
height: inherit;
margin: 10vw 0vw;
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
      
      <Container >
    
    
    <Holder data-aos='slide-left'> 
 
 <HolderInner>
 <a href="https://rottweiler.zaheerroberts.co.za" target="_blank" rel="noopener noreferrer">
 <ProjectHeading  >Rottweiler <br/> Care</ProjectHeading>
 </a>
<Heading  >INFO WEBSITE</Heading>
<Heading  >REACT.JS</Heading>

<Heading  >
<a href="https://github.com/Zeus540/Rottweiler" target="_blank" rel="noopener noreferrer">
VIEW CODE
</a>
</Heading>
</HolderInner>
<ImgHolder>
<a href="https://rottweiler.zaheerroberts.co.za" target="_blank" rel="noopener noreferrer">
<Img src={Rot} alt=""/>
</a>
</ImgHolder>


     </Holder>

     
     <Holder data-aos='slide-right'> 
 
 <HolderInner>
 <a href="https://nike.zaheerroberts.co.za" target="_blank" rel="noopener noreferrer">
 <ProjectHeading  >Nike</ProjectHeading>
 </a>
<Heading  >GALLERY WEBSITE</Heading>
<Heading  >REACT.JS</Heading>

<Heading  >
<a href="https://github.com/Zeus540/Nike" target="_blank" rel="noopener noreferrer">
VIEW CODE
</a>
</Heading>
</HolderInner>
<ImgHolder>
<a href="https://nike.zaheerroberts.co.za" target="_blank" rel="noopener noreferrer">
<Img src={Nike} alt=""/>
</a>
</ImgHolder>


     </Holder>


     <Holder data-aos='slide-left'> 
 
 <HolderInner>
 <a href="https://brightfuture.zaheerroberts.co.za/" target="_blank" rel="noopener noreferrer">
 <ProjectHeading  >Bright Future</ProjectHeading>
 </a>
<Heading  >WEBSITE</Heading>
<Heading  >PHP - HTML - CSS </Heading>

<Heading  >
<a href="https://github.com/Zeus540/BrightFuture-php" target="_blank" rel="noopener noreferrer">
VIEW CODE
</a>
</Heading>
</HolderInner>
<ImgHolder>
<a href="https://brightfuture.zaheerroberts.co.za/" target="_blank" rel="noopener noreferrer">
<Img src={Bright} alt=""/>
</a>
</ImgHolder>


     </Holder>

  <Holder data-aos='slide-right'> 
 
      <HolderInner>
      <a href="https://kkwe.co.za/" target="_blank" rel="noopener noreferrer">
      <ProjectHeading  >Kkwe</ProjectHeading>
      </a>
  <Heading  >EVENTS PLANNER WEBSITE</Heading>
  <Heading  >REACT.JS - AOS </Heading>

  </HolderInner>
  <ImgHolder>
  <a href="https://kkwe.co.za/" target="_blank" rel="noopener noreferrer">
  <Img src={Kkwe} alt=""/>
  </a>
  </ImgHolder>
  
  
          </Holder>
         



          <Holder data-aos='slide-left'> 
 
 <HolderInner>
 <a href="https://zeus540.github.io/react-firebase-crud-app/" target="_blank" rel="noopener noreferrer">
 <ProjectHeading  >Crud App</ProjectHeading>
 </a>
<Heading  >WEBSITE</Heading>
<Heading  >REACT.JS - SCSS </Heading>

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

     <Holder data-aos='slide-right'> 
 
 <HolderInner>
 <ProjectHeading  >FunFox</ProjectHeading>
<Heading  >E-COMMERCE WEBSITE </Heading>
<Heading  >WORDPRESS - WOOCOMMERCE </Heading>
</HolderInner>
<ImgHolder>
<Img src={FunFox} alt=""/>
</ImgHolder>


     </Holder>
      </Container>
    );
  }
}
export default Gallery1;