  import React, {Component} from 'react';
  import styled from 'styled-components';
  import AOS from 'aos';
  import 'aos/dist/aos.css';


  const Container = styled.div`
  overflow: hidden;

  justify-content: space-between;
  padding-bottom:10vw;;
      @media (min-width: 1px) and (max-width: 426px) {
    
        
        }
  `

  const Para =styled.p`
  font-size:0.8vw;
  color:black;
  letter-spacing: 1px;
  line-height:1.5vw;
  font-family:arial;
  margin:1vw 0% 0% 0%;
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
font-family:arial;

font-weight:bolder;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:7vw; 
  margin:0vw 0% 5vw 0%;
   }
`

const MainHeading =styled.h1`
font-size: 8vw;
color:white;
font-family:arial;
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
        
        <Container >
          <MainHeadingContainer>
          <MainHeading data-aos='slide-up'>HIGHLIGHTS</MainHeading>
          </MainHeadingContainer>
        <div className="timeline" >
  
    <div className="container left"  data-aos='slide-up'>
      <div className="content">
        <Heading>2021</Heading>
        <Para>BECAME A FREELANCER</Para>
      </div>
    </div>

    <div className="container right"  data-aos='slide-up'>
      <div className="content">
        <Heading>2020</Heading>
        <Para>BUILT A WEBSITE FOR A SMALL BUSINESS</Para>
      </div>
    </div>
    <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
        <Heading>2019</Heading>
        <Para>STARTED WORKING AT DIGITAS LIQUORICE</Para>
      </div>
    </div>
    <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
        <Para>WORKED ON PURITY</Para>
      </div>
    </div>
    <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
        <Para>WORKED ON UNILEVER </Para>
      </div>
    </div>
    <div className="container leftContainer leftImp" data-aos='slide-up'>
      <div className="content Green">
        <Para>WORKED ON THE OLA BARBIE CAMPAIGN LANDING PAGE</Para>
      </div>
    </div>
    <div className="container right"  data-aos='slide-up'>
      <div className="content ">
        <Heading>2018</Heading>
        <Para>GRADUATED COLLEGE</Para>
      </div>
    </div>
  </div>

        </Container>
    );
    }
  }

  export default TimeLine;
