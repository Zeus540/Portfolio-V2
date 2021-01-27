import React, {Component} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Container = styled.div`
overflow: hidden;
margin: 28vw 0% 8vw 0%;

@media (min-width: 1px) and (max-width: 426px) {
 flex-direction:column
 margin: 0px;
margin:40vw 0vw;
}
 @media (min-width: 427px) and (max-width: 768px) {
 
  margin: 18vw 0vw;

  }
 @media (min-width: 769px) and (max-width: 1024px) {
  margin: 33vw 0vw 9vw 0vw;
  }
`


const Heading2 =styled.h1`
font-size:6vw;
color:white;
font-family:arial;

font-weight:bolder;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:7vw;
  }
`


const TextHolder =styled.div`
display:flex;

justify-content:center;
@media (min-width: 1px) and (max-width: 426px) {
 
 

  }
`

const Focus =styled.h1`
font-size:15vw;
color:#8BC34A;
margin:0px;
font-family:arial;
@media (min-width: 1px) and (max-width: 426px) {
  font-size: 27vw;
  }

`


class Page2 extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
render() {
 
    return (
      
      <Container id="Projects">
        <TextHolder>
          <Focus data-aos='slide-up' data-aos-duration="1200"> 0</Focus>
          <Focus data-aos='slide-up' data-aos-duration="1400"> 2</Focus>
  <Heading2  data-aos='slide-up' data-aos-duration="1000">PROJECTS</Heading2>

  </TextHolder>


      </Container>
  );
  }
}

export default Page2;
