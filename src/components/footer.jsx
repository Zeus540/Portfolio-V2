  import React, {Component} from 'react';
  import styled from 'styled-components';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import Trident from '../images/trident.png';
  import Dota from '../images/dota.png'

  const Container = styled.div`
  //  background:url(${Dota});
  background:#125eac;
  text-align: center;
  color:#20273b;
 font-family:Pixel;

 margin-top: 80px;
 padding: 40px;

      @media (min-width: 1px) and (max-width: 426px) {
        
        }
  `

 
  
    const Copyright = styled.p`
        
          font-weight:bold;
          color: #dfdfdf;
          text-align: center;
          padding: 40px 0px;
    padding-bottom: 0px;
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
        
        <Container  >
          <img src={Trident} width="70px"/>
      <Copyright >ALL RIGHT RESERVED COPYRIGHT &copy; 2020</Copyright>
     
        </Container>
    );
    }
  }

  export default Form;
