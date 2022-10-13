  import React, {Component} from 'react';
  import styled from 'styled-components';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import Liqourice from '../images/liquorice.png';
  import Kkwe from '../images/kkwel.png';
  import Hyperboliq from '../images/hyperboliq.png';
  import Ola from '../images/ola.png';
  import Tribeca from '../images/tribeca.png';
  import Usn from '../images/usn.png';
  import Vts from '../images/Vts.png';
  import Purity from '../images/purity.png';
  import Unilever from '../images/unilever.png';
  import Renault from '../images/renault.png';
  
  const Container = styled.div`
  overflow: hidden;
  display:flex;
  justify-content: space-between;
  padding-bottom:10vw;
      @media (min-width: 1px) and (max-width: 426px) {
    
        
        }
  `

  const Para =styled.p`
  font-size:0.8vw;
  color:black;
  letter-spacing: 1px;
  line-height:1.5vw;
  #2c3d65font-family:Pixel;
  margin:1vw 0% 1vw 0%;
  @media (min-width: 1px) and (max-width: 426px) {
    font-size: 4vw;
    line-height: 5vw;

    }
    
   @media (min-width: 426px) and (max-width: 768px) {
    font-size: 1.5vw;
    line-height: 3vw;
     }

     @media (min-width: 769px) and (max-width: 1440px) {
      font-size: 1.2vw;
      line-height: 2vw;
       }
  `

  const Heading =styled.h1`
font-size:2vw;
color:black;
#2c3d65font-family:Pixel;

font-weight:bolder;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:7vw; 
   }
`

const MainHeading =styled.h1`
font-size: 8vw;
color:#e3e2e2;
#2c3d65font-family:Pixel;
text-align:center;
font-weight:bolder;
overflow:hidden
    margin: 15vw 0% 15vw 0%;
@media (min-width: 1px) and (max-width: 426px) {
  font-size: 10vw;
  margin: 15vw 0% 15vw 0%;
   }
`

const MainHeadingContainer = styled.div`
  overflow: hidden;

      @media (min-width: 1px) and (max-width: 426px) {
    
        
        }
  `

  class TimeLine extends Component {
    componentDidMount(){
      AOS.init({
        duration : 1000
      })
    }
  render() {
  
      return (
        <>
        <MainHeadingContainer>
          <MainHeading data-aos='slide-up'>HIGHLIGHTS</MainHeading>
          </MainHeadingContainer>
        <Container >
          
        <div className="timeline" >

        <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
        <Heading>2021</Heading>
      </div>
    </div>
    <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
      <img src={Renault} alt="" width="50px"/>
        <Para>WORKED ON RENAULT</Para>
      </div>
    </div>

    <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
      <img src={Usn} alt="" width="100px"/>
        <Para>WORKED ON USN</Para>
      </div>
    </div>

    <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
      <img src={Vts} alt="" width="80px"/>
        <Para>WORKED ON VTS</Para>
      </div>
    </div>

    <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
      <img src={Tribeca} alt="" width="80px"/>
        <Para>WORKED ON TRIBECA</Para>
      </div>
    </div>

    <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
      <img src={Hyperboliq} alt="" width="150px"/>
        <Para>STARTED WORKING AT HYPERBOLIQ</Para>
      </div>
    </div>

    <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
     
        <Para>STARTED A JAVASCRIPT ALGORITHMS AND DATA STRUCTURES COURSE @ FREE CODECAMP</Para>
      </div>
    </div>

    <div className="container right"  data-aos='slide-up'>
      <div className="content">
        <Heading>2020</Heading>
      </div>
    </div>

    <div className="container right"  data-aos='slide-up'>
      <div className="content">
        <Para>FOUNDED ODINSGATE MEDIA</Para>
      </div>
    </div>

   
    <div className="container right"  data-aos='slide-up'>
      <div className="content">
      <img src={Kkwe} alt="" width="150px"/>
        <Para>BUILT A WEBSITE FOR KKWE EVENTS</Para>
      
      </div>
    </div>
    <div className="container right"  data-aos='slide-up'>
      <div className="content">
        <Para>STARTED FREELANCING</Para>
      </div>
    </div>
       
    <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
        <Heading>2019</Heading>
     
      </div>
    </div>

    <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
      <img src={Liqourice} alt="" width="100px"/>
        <Para>STARTED WORKING AT DIGITAS LIQUORICE</Para>
   
      </div>
    </div>
    <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
      <img src={Purity} alt="" width="100px"/>
        <Para>WORKED ON PURITY</Para>
      </div>
    </div>
    <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
      <img src={Unilever} alt="" width="80px"/>
        <Para>WORKED ON UNILEVER </Para>
      </div>
    </div>
    <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
      <img src={Ola} alt="" width="100px"/>
        <Para>WORKED ON THE OLA BARBIE CAMPAIGN</Para>
        
      </div>
    </div>
    <div className="container right"  data-aos='slide-up'>
      <div className="content ">
        <Heading>2018</Heading>
      </div>
    </div>
    <div className="container right"  data-aos='slide-up'>
      <div className="content ">
        <Para>GRADUATED COLLEGE</Para>
      </div>
    </div>
  </div>

        </Container>

       </> 
    );
    }
  }

  export default TimeLine;
