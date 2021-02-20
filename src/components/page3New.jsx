import React, {useEffect} from 'react';
import styled from 'styled-components';
import Body from '../images/me3.png'
import Head from '../images/forhead.png'
import Brain from '../images/brain.png'
import {gsap} from 'gsap';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Typical from 'react-typical'
import Typical2 from 'react-typical'
gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`

position:relative;
@media (min-width: 1px) and (max-width: 426px) {
  flex-direction:column
  padding-left: 0vw;
 }
`

const Holder = styled.div`
width: 40vw;
overflow:hidden;
margin:0px;
position: relative;
margin: 5vw 0% 5vw 5vw;

@media (min-width: 1px) and (max-width: 426px) {
  width: 84%;
  padding: 5vw;
  margin: 0vw;
  top: 0vw;
   }
   
`

const TypicalHolder = styled.div`
overflow:hidden;
margin:0px;
position: relative;
font-family: arial;
margin: 5vw 0% 5vw 0%;
font-size: 2vw;
color:white;
margin: 5vw 0% 5vw 5vw;
@media (min-width: 1px) and (max-width: 426px) {
  padding-left: 5vw;
  font-size: 6vw;
  margin: 20vw 0% 20vw 0%;
   }
   
`

const Holder2 = styled.div`
height:100%
width:100vw; 
margin:0px;
position: relative;

@media (min-width: 1px) and (max-width: 426px) {
  padding-left: 5vw;
   }
`

const Flex = styled.div`
display:flex;

@media (min-width: 1px) and (max-width: 426px) {
  width: 100%; 
   }
`

const HeadingAnimated =styled.div`
color:white;
font-family:arial;
margin:0px;
font-size:2vw;
margin: 5vw 0% 0vw 5vw;
width:50vw
z-index: 50;
position: relative;
@media (min-width: 1px) and (max-width: 426px) {
font-size:4vw; 


 }
`

const Heading =styled.h1`
color:white;
font-family:arial;
margin:0px;
font-size:2vw;
font-weight:bolder;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:6vw; 
   }
`

const Heading2 =styled.div`
font-size:7vw;
color:white;
font-family:arial;
margin:2vw 0%;
font-weight:bolder;
max-height:200px;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:11vw; 
   }
`

const Heading3 =styled.h1`
font-size:2vw;
color:white;
font-family:arial;
margin:5vw 0% 0% 0%;
font-weight:bolder;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:7vw; 
   }
`

const Para =styled.p`
font-size:1vw;
color:white;
letter-spacing: 1px;
line-height:1.7vw;
font-family:arial;
margin:2vw 0% 0% 0%;
@media (min-width: 1px) and (max-width: 426px) {
  font-size: 4vw;
  line-height: 7vw;
   }

   @media (min-width: 426px) and (max-width: 1024px) {
    font-size: 1.5vw;
    line-height: 3vw;
     }
     @media (min-width: 769px) and (max-width: 1440px) {
      font-size: 1.2vw;
      line-height: 2vw;
       }
`
const Focus =styled.span`
font-size:9vw;
color:white;
font-weight:bolder;
margin:1vw 0px 0px 0px;
font-family:arial;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:13vw; 
   }
`

const LeftContainer = styled.div`
height:100%;

`

const RightContainer = styled.div`

display:flex;

position:absolute;
top:30vw;
right:4vw;
@media (min-width: 1px) and (max-width: 426px) {

 }
`

const RightContainerImg = styled.img`
height: 30vw;
    width: 30vw;
   position:relative;
   z-index:5;
@media (min-width: 1px) and (max-width: 426px) {
  width: 49vw;

  height: 82vw;
  display:none;
 }
 @media (min-width: 768px) and (max-width: 1024px)   {


 }
`
const BrainImg = styled.img`
position: absolute;
right: 9.5vw;
top: -4vw;
width: 11vw;
height: 9vw;
   
@media (min-width: 1px) and (max-width: 426px) {
  width: 49vw;

  height: 82vw;
  display:none;
 }
 @media (min-width: 768px) and (max-width: 1024px)   {


 }
`
const HeadImg = styled.img`
position: absolute;
right: 9.4vw;
top: -5.2vw;
width: 11.6vw;
height: revert;
z-index: 2;
}
   
@media (min-width: 1px) and (max-width: 426px) {
  width: 49vw;

  height: 82vw;
  display:none;
 }
 @media (min-width: 768px) and (max-width: 1024px)   {


 }
`
const RightContainerImgMobile = styled.img`
height: 100%;
width: 100%;
padding-top: 2vw;
margin-bottom: 2vw;
position: relative;
    z-index: 3;
@media (min-width: 426px)  {
  display:none;
 }
`
const BrainImgMobile = styled.img`
position: absolute;
left: 34.5vw;
top: -11vw;
z-index: 1;
width: 37vw;
@media (min-width: 426px)  {
  display:none;
 }
`
const HeadImgMobile = styled.img`
position: absolute;
left: 33.5vw;
top: -14.2vw;
z-index: 2;
width: 37vw;
@media (min-width: 426px)  {
  display:none;
 }

`
function Page3New() {


useEffect(() =>{

gsap.to('.Head',{
  x:'0',
  duration: 20,
  y:'-150',

  scrollTrigger: {
    trigger:'#Home',
    start: 'top',
    end: 'bottom 60%',
    toggleActions: 'restart complete reverse reset'
  }

})

},[]);
 
    return (
      
      <Container id="Home">
        <TypicalHolder>
        <Typical
              steps={['Hello!', 1500,'Hola!',1500,'Bonjour!',1500,'Konnichiwa!',1500,'God dag!',1500,'Shalom!',1500,]}
              loop={Infinity}
              wrapper={"h1"}
            />
             <Heading data-aos='slide-up'> my name is Zaheer.</Heading>
        </TypicalHolder>

         <HeadingAnimated >
        
             <Heading3 > I am a</Heading3>
        <Heading2  >  <Typical2
              steps={['WEB DEVELOPER', 2500,'UI / UX DESIGNER',2500,'ANIMAL LOVER',2500,'3D MODELER / ARTIST',2500,]}
              loop={Infinity}
              wrapper={"h2"}
            /><br/></Heading2>
        
        </HeadingAnimated>

        <Flex>
     <LeftContainer>
      <Holder2>
      <HeadImgMobile src={Head} className="Head" alt="" />
      <BrainImgMobile src={Brain} alt="" />
        <RightContainerImgMobile src={Body} alt="" />
        </Holder2>

        <Holder>
          <Para data-aos='slide-up'>I have always had a passion for learning and trying new things. I consider myself a hardworking and reliable person. I like applying new methods and ideas to traditional problem solving. I Also enjoy working on new and exciting projects that allow me to express my creativity and opinions </Para>


          <Para data-aos='slide-up'>I am a professional who worked for a Cape Town based Media Agency called Digitas Liquorice where I worked on names such as purity Unilever and Ola to name a few.
I am very skilled in my craft</Para>
        </Holder>
     </LeftContainer>

     
     
      <RightContainer >
      <HeadImg src={Head} className="Head" alt="" />
      <BrainImg src={Brain} alt="" />
      <RightContainerImg src={Body} alt="" />
      
      </RightContainer>
      </Flex>

      </Container>
  );
  
}

export default Page3New;
