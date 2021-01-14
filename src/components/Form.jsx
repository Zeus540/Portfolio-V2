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

  class Form extends Component {
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
        <Heading>2015</Heading>
        <Para>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</Para>
      </div>
    </div>

    <div className="container right"  data-aos='slide-up'>
      <div className="content">
        <Heading>2020</Heading>
        <Para>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</Para>
      </div>
    </div>
    <div className="container left" data-aos='slide-up'>
      <div className="content">
        <Heading>2019</Heading>
        <Para>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</Para>
      </div>
    </div>
    <div className="container right"  data-aos='slide-up'>
      <div className="content">
        <Heading>2018</Heading>
        <Para>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</Para>
      </div>
    </div>
  </div>

        </Container>
    );
    }
  }

  export default Form;
