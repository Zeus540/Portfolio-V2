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
font-family:arial;
text-transform:uppercase;
letter-spacing:5px;

`

const Heading = styled.h1`
color:white;
font: italic
font-family:arial;
text-transform:uppercase;
letter-spacing:5px;
font-size:1.5vw;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:3.4vw;
 }
`

const Heading2 = styled.h1`
color:#8BC34A;
font: italic
font-family:arial;
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

          <Link 
        activeClass="active"
        to="Contact"
        spy={true}
        smooth={true}
        offset={20}
        duration= {2000}
        ><Heading2 data-aos='slide-left'>Work with me</Heading2>
        
      </Link>
          
        
          </Holder>

      </Container>
  );
  }
}

export default Nav;
