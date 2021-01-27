import React, {Component} from 'react';
import styled from 'styled-components';
import Port from '../images/me3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical'

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
margin: 0vw 0% 5vw 5vw;
@media (min-width: 1px) and (max-width: 426px) {
  width: 84%;
  padding: 5vw;
  margin: 0vw;
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
margin: 5vw 0% 5vw 5vw;

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

const Heading2 =styled.h1`
font-size:7vw;
color:white;
font-family:arial;
margin:2vw 0%;
font-weight:bolder;
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
overflow:hidden
display:flex;

position:absolute;
top:30vw;
right:4vw;
@media (min-width: 1px) and (max-width: 426px) {

 }
`

const RightContainerImg = styled.img`
height: 40vw;
    width: 25vw;
   
@media (min-width: 1px) and (max-width: 426px) {
  width: 49vw;

  height: 82vw;
  display:none;
 }
 @media (min-width: 768px) and (max-width: 1024px)   {
  width: 30vw;
  height: 44vw;

 }
`
const RightContainerImgMobile = styled.img`
height: 100%;
width: 100%;
padding-top: 2vw;
margin-bottom: 2vw;
@media (min-width: 426px)  {
  display:none;
 }
`

class Page3New extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
render() {
 
    return (
      
      <Container id="Home">
        <TypicalHolder>
        <Typical
              steps={['Hello!', 1000,'Hola!',1000,'Bonjour!',1000,'Konnichiwa!',1000,'God dag!',1000,'Shalom!',1000,]}
              loop={Infinity}
              wrapper={"h1"}
            />
             <Heading data-aos='slide-up'> my name is Zaheer.</Heading>
        </TypicalHolder>

         <HeadingAnimated >
        
             <Heading3 > I am a</Heading3>
        <Heading2   className="text-flicker-in-glow">CREATIVE FRONT-END<br/></Heading2>
        <Focus className="text-flicker-in-glow">DEVELOPER</Focus>
        </HeadingAnimated>

        <Flex>
     <LeftContainer>
      <Holder2>
        <RightContainerImgMobile src={Port} alt="" data-aos='slide-right'/>
        </Holder2>

        <Holder>
          <Para data-aos='slide-up'>I have always had a passion for learning and trying new things. I consider myself a hardworking and reliable person. I like applying new methods and ideas to traditional problem solving. I Also enjoy working on new and exciting projects that allow me to express my creativity and opinions </Para>


          <Para data-aos='slide-up'>I am a professional who worked for a Cape Town based Media Agency called Digitas Liquorice where I worked on names such as purity Unilever and Ola to name a few.
I am very skilled in my craft</Para>
        </Holder>
     </LeftContainer>

     
     
      <RightContainer >
      
      <RightContainerImg src={Port} alt="" data-aos='slide-right'/>
      
      </RightContainer>
      </Flex>

      </Container>
  );
  }
}

export default Page3New;
