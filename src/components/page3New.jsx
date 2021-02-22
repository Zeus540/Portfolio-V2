import React, {useEffect} from 'react';
import styled from 'styled-components';
import Body from '../images/me3.png'
import Head from '../images/forhead.png'
import Brain from '../images/brain.png'
import Html from '../images/html.png'
import Git from '../images/git.png'
import Jira from '../images/jira.png'
import Css from '../images/css.png'
import Sass from '../images/sass.png'
import Javascript from '../images/javascript.png'
import Bootstrap from '../images/bootstrap.png'
import Npm from '../images/npm.png'
import Sketch from '../images/sketch.png'
import Wordpress from '../images/wordpress.png'
import ReactImgs from '../images/react.png'
import Nginx from '../images/nginx.png'
import Photoshop from '../images/photoshop.png'
import Mailchimp from '../images/mailchimp.png'
import Linux from '../images/linux.png'
import Illustrator from '../images/illustrator.png'
import Typical from 'react-typical'


import {gsap} from 'gsap';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
overflow: hidden;
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
  top: 20vw;
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
  top: 18vw;
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
width:90vw

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
margin-bottom:0;
font-weight:bolder;
min-height: 360px;
@media (min-width: 1px) and (max-width: 425px) {
  font-size:11vw;
  min-height: 104px;
   }
  
   @media (min-width: 426px) and (max-width: 768px)  {
  
   }
   @media (min-width: 769px) and (max-width: 1025px)  {
 
   }
   @media (min-width: 1026px) and (max-width: 1440px)  {
  
   }
   @media (min-width: 1441px) and (max-width: 1920px)  {
    min-height: 300px;
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
font-weight:bold;
margin:1vw 0px 0px 0px;
font-family:arial;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:13vw; 
   }
`
const Focus2Mobile =styled.span`
font-size: 8vw;
color: white;
font-weight: bold;
margin: 3vw 0px 0px 0px;
font-family: arial;
line-height: 28px;
letter-spacing: 1px;
@media (min-width: 426px){
  display:none
   }
`
const Focus2 =styled.span`
font-size: 2.5vw;
color: white;
font-weight: bold;
margin: 3vw 0px 0px 0px;
font-family: arial;
line-height: 2.5vw;
letter-spacing: 1px;
@media (max-width: 426px){
  display:none
   }
`
const LeftContainer = styled.div`
height:100%;
width: 65%;
@media (min-width: 1px) and (max-width: 426px) {
  width: 100%;
   }
`

const RightContainer = styled.div`

display:flex;

position: relative;
top: -5vw;
right: 0;
margin-right:5vw;
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

margin-bottom: 5vw;
position: relative;
    z-index: 5;
@media (min-width: 426px)  {
  display:none;
 }
`
const BrainImgMobile = styled.img`
position: absolute;
left: 34.5vw;
top: -11vw;
z-index: 5;
width: 37vw;
@media (min-width: 426px)  {
  display:none;
 }
`
const HeadImgMobile = styled.img`
position: absolute;
left: 33.5vw;
top: -16.4vw;
z-index: 6;
width: 37vw;
@media (min-width: 426px)  {
  display:none;
 }

`

const Skills = styled.div`
position: absolute;
left: 13vw;
top: -4.2vw;
z-index: 0;
width: 0.5vw;
@media (min-width: 1px) and (max-width: 425px)  {
  position: absolute;
  left: -53vw;
  top: 16.8vw;
 }
 @media (min-width: 426px) and (max-width: 768px)  {
  position: absolute;
  left: 13vw;
  top: -4.2vw;
 }
 @media (min-width: 769px) and (max-width: 1025px)  {
  position: absolute;
  left: 13vw;
  top: -4.2vw;
 }
 @media (min-width: 1026px) and (max-width: 1440px)  {
  position: absolute;
  left: 13vw;
  top: -3.2vw;
 }
 @media (min-width: 1441px) and (max-width: 1980px)  {
  position: absolute;
  left: 13vw;
  top: -4.2vw;
 }
`
const HtmlImg = styled.img`
position: absolute;

    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`
const GitImg = styled.img`
position: absolute;


    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`

const BootstrapImg = styled.img`
position: absolute;

    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`
const CssImg = styled.img`
position: absolute;


    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`
const SassImg = styled.img`
position: absolute;
 
    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`
const LinuxImg = styled.img`
position: absolute;
  
    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`
const WordpressImg = styled.img`
position: absolute;
 
    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`
const NginxImg = styled.img`
position: absolute;

    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`
const NpmImg = styled.img`
position: absolute;

    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`
const ReactImg = styled.img`
position: absolute;
    
    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`
const JavascriptImg = styled.img`
position: absolute;
 
    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`
const MailchimpImg = styled.img`
position: absolute;
 
    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`
const PhotoshopImg = styled.img`
position: absolute;
 
    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`
const IllustratorImg = styled.img`
position: absolute;

    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`
const JiraImg = styled.img`
position: absolute;
 
    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`
const SketchImg = styled.img`
position: absolute;
  
    z-index: 2;
    width: 3.5vw;
@media (min-width: 1px) and (max-width:426px)  {
  width: 10.5vw
 }

`

const ImgHolder = styled.div`
text-align:right;
`

function Page3New() {

  useEffect(() =>{

    gsap.to('.Head',{
      xPercent:'0',
      yPercent:'-150',

      scrollTrigger: {
        trigger:'#Home',
        start: '90 top',
        scrub: 0.4,
       
        end: '90 top',
     
      }
    
    })
  
    },[]);

useEffect(() =>{

gsap.to('.Html',{
  xPercent:'-300',
  yPercent:'500',
  scrollTrigger: {
    trigger:'#Home',
     start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})

gsap.to('.Git',{
  xPercent:'400',
  yPercent:'-50',
  scrollTrigger: {
    trigger:'#Home',
    start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})

gsap.to('.Sass',{
  xPercent:'-350',
  yPercent:'-50',
  scrollTrigger: {
    trigger:'#Home',
    start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})


gsap.to('.Javascript',{
  xPercent:'-350',
  yPercent:'300',
  scrollTrigger: {
    trigger:'#Home',
    start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})

gsap.to('.Npm',{
  xPercent:'-400',
  yPercent:'100',
  scrollTrigger: {
    trigger:'#Home',
    start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})

gsap.to('.Css',{
  xPercent:'300',
  yPercent:'50',
  scrollTrigger: {
    trigger:'#Home',
    start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})

gsap.to('.Linux',{
  xPercent:'380',
  yPercent:'350',
  scrollTrigger: {
    trigger:'#Home',
    start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})

gsap.to('.Mailchimp',{
  xPercent:'-420',
  yPercent:'600',
  scrollTrigger: {
    trigger:'#Home',
    start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})

gsap.to('.Photoshop',{
  xPercent:'100',
  yPercent:'-100',
  scrollTrigger: {
    trigger:'#Home',
    start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})

gsap.to('.ReactImgs',{
  xPercent:'-250',
  yPercent:'50',
  scrollTrigger: {
    trigger:'#Home',
    start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})

gsap.to('.Jira',{
  xPercent:'-150',
  yPercent:'500',
  scrollTrigger: {
    trigger:'#Home',
    start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})

gsap.to('.Sketch',{
  xPercent:'250',
  yPercent:'380',
  scrollTrigger: {
    trigger:'#Home',
    start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})

gsap.to('.Bootstrap',{
  xPercent:'350',
  yPercent:'150',
  scrollTrigger: {
    trigger:'#Home',
    start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})

gsap.to('.Wordpress',{
  xPercent:'300',
  yPercent:'270',
  scrollTrigger: {
    trigger:'#Home',
    start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})

gsap.to('.Nginx',{
  xPercent:'-200',
  yPercent:'300',
  scrollTrigger: {
    trigger:'#Home',
    start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})

gsap.to('.Illustrator',{
  xPercent:'-150',
  yPercent:'-120',
  scrollTrigger: {
    trigger:'#Home',
    start: '90 top',
    scrub: 0.4,
    end: 'bottom 60%',
     
  }

})

},[]);
 
    return (
      
      <Container id="Home">
        <TypicalHolder>
        <Typical
              steps={['God dag!', 1500,'Bonjour!',1500,'Konnichiwa!',1500,'Hello!',1500,]}
              loop={1}
              wrapper={"h1"}
            />
             <Heading data-aos='slide-up'> my name is Zaheer.</Heading>
        </TypicalHolder>

         <HeadingAnimated >
        
             <Heading3 > I am a</Heading3>
        <Heading2  > 
        <Typical
              steps={['CREATIVE DEVELOPER', 1500,'UI / UX DESINGER',1500,'3D ARTIST / MODELER',1500,]}
              loop={Infinity}
              wrapper={"h1"}
            />
          <Focus ></Focus></Heading2>
        
        </HeadingAnimated>

        <Flex>
     <LeftContainer>
      <Holder2>
      <HeadImgMobile src={Head} className="Head" alt="" />
      <BrainImgMobile src={Brain} alt="" />
        <RightContainerImgMobile src={Body} alt="" />
        <Focus2Mobile>BASED IN</Focus2Mobile><br/>
      <Focus2Mobile>CAPETOWN <br/> SOUTHAFRICA</Focus2Mobile>
        </Holder2>

        <Holder>
          <Para data-aos='slide-up'>
          I have always had a passion for learning and trying new things. I consider myself a hardworking and reliable person. I like applying new methods and ideas to traditional problem solving. I Also enjoy working on new and exciting projects that allow me to express my creativity and opinions 
            </Para>


          <Para data-aos='slide-up'>
            I am a professional who worked for a Cape Town based Media Agency called Digitas Liquorice where I worked on names such as purity Unilever and Ola to name a few.
I am very skilled in my craft</Para>
        </Holder>
      
     </LeftContainer>

     
     
      <RightContainer >
   <Skills>
   <HtmlImg src={Html}  alt="" className="Html" />
      <GitImg src={Git}  alt="" className="Git" />
      <BootstrapImg src={Bootstrap}  alt="" className="Bootstrap" />
      <CssImg src={Css}  alt="" className="Css" />
      <SassImg src={Sass}  alt="" className="Sass" />
      <LinuxImg src={Linux}  alt="" className="Linux" />
      <WordpressImg src={Wordpress}  alt="" className="Wordpress" />
      <NginxImg src={Nginx}  alt="" className="Nginx" />
      <NpmImg src={Npm}  alt="" className="Npm" />
      <ReactImg src={ReactImgs}  alt="" className="ReactImgs" />
      <JavascriptImg src={Javascript}  alt="" className="Javascript" />
      <MailchimpImg src={Mailchimp}  alt="" className="Mailchimp" />
      <PhotoshopImg src={Photoshop}  alt="" className="Photoshop" />
      <IllustratorImg src={Illustrator}  alt="" className="Illustrator" />
      <JiraImg src={Jira}  alt="" className="Jira" />
      <SketchImg src={Sketch}  alt="" className="Sketch" />
    </Skills>
    
      <ImgHolder >
      <HeadImg src={Head} className="Head" alt="" />
      <BrainImg src={Brain} alt="" />
      <RightContainerImg src={Body} alt="" />
      <Focus2>BASED IN</Focus2><br/>
      <Focus2>CAPETOWN <br/> SOUTHAFRICA</Focus2>
      </ImgHolder>
      </RightContainer>

      </Flex>

      </Container>
  );
  
}

export default Page3New;
