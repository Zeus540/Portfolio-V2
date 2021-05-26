  import React, {Component} from 'react';
  import styled from 'styled-components';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import me from '../images/me.png';

  const Container = styled.div`
  overflow: hidden;
 
  justify-content: space-between;
  color:white;
  font-family:arial;
  margin: 10vw 0% 0vw 0%;
      @media (min-width: 1px) and (max-width: 426px) {
        
        }
  `

  const ContentContainer = styled.div`
      color:white;
      font-family:arial;
      display:flex;
      @media (min-width: 1px) and (max-width: 426px) {
        }
  `

  const LeftContainer = styled.div`
  background: #8bc34a;
      color:white;
      font-family:arial;
      min-width:70vw;
      position:relative
      @media (min-width: 1px) and (max-width: 425px) {
        min-height: 50vw;
        min-width:50vw;
        }
        @media (min-width: 426px) and (max-width: 768px) {
          min-height: 40vw;
          min-width:50vw;
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            min-height: 30vw;
            }
            @media (min-width: 1025px) and (max-width: 1440px) {
              min-height: 30vw;
              }
  `
  
  const RightContainer = styled.div`
    color:white;
    font-family:arial;
      @media (min-width: 1px) and (max-width: 426px) {
        }
  `
  
  const MainHeading =styled.h1`
      font-size: 8vw;
      text-align:center;
      font-weight:bolder;
      overflow:hidden;
   color:#1a1a1a;
  @media (min-width: 1px) and (max-width: 426px) {
      font-size: 10vw;
     }
  `
  const MainHeadingHolder =styled.div`
      position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
  @media (min-width: 1px) and (max-width: 426px) {
     }
  `
  const RightImgContainer = styled.img`
    overflow: hidden;
    height:100%;
    width:100%;
        @media (min-width: 1px) and (max-width: 426px) {
      
          }
    `

  
    const Copyright = styled.p`
          position:absolute;
          bottom:2vw;
          right:2vw;
          font-weight:bold;
          color:#1a1a1a;
        @media (min-width: 1px) and (max-width: 426px) {
          font-size:2.2vw;
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
        
        <Container  data-aos='slide-up'>
        <ContentContainer>

            <LeftContainer>
             <MainHeadingHolder>
             <a href="mailto:hello@odinsgate.co.za"><MainHeading >SAY HI</MainHeading></a>
             </MainHeadingHolder>
             <Copyright >ALL RIGHT RESERVED COPYRIGHT &copy; 2020</Copyright>
            </LeftContainer>

            <RightContainer >
             <RightImgContainer src={me} alt=""/>
            </RightContainer>
        </ContentContainer>
     
        </Container>
    );
    }
  }

  export default Form;
