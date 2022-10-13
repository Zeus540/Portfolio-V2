import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`

display:flex;
justify-content: space-between;
padding:5vw;
padding-top:0vw;
padding-bottom:2vw;

`

const Holder = styled.div`
overflow:hidden
font: italic
#2c3d65font-family:Pixel;
text-transform:uppercase;
letter-spacing:5px;

`

const Heading = styled.h1`
color:#d2d2d2;
font: italic
#2c3d65font-family:Pixel;
text-transform:uppercase;
letter-spacing:5px;
font-size:1.5vw;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:3.4vw;
 }
`

const Heading2 = styled.h1`
color:#2c3d65;
font: italic
#2c3d65font-family:Pixel;
text-transform:uppercase;
letter-spacing:5px;
font-size:1.5vw;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:3.4vw;
 }
`



class Nav extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
render() {
 
    return (
      
      <Container id="Home">

          <Holder  >
          <Link 
        activeClass="active"
        to="Projects"
        spy={true}
        smooth={true}
        offset={-30}
        duration= {1000}
        ><Heading data-aos='slide-right'>Projects</Heading>
        
      </Link>
          </Holder>
        
          <Holder  data-aos='fade-down'>
          <Heading> </Heading>
          </Holder>

          <Holder >

         
      <a href="mailto:hello@odinsgate.co.za"> <Heading2 data-aos='slide-left'> Work with me</Heading2></a>
       
    
          
        
          </Holder>

      </Container>
  );
  }
}

export default Nav;
