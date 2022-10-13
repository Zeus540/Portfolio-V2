import React, {Component} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cv from '../images/cv.pdf';

const Container = styled.div`
width: 100%;
display:flex;
height:100%;
justify-content: space-between;
overflow:hidden;
    @media (min-width: 1px) and (max-width: 426px) {
      flex-direction: column;
      padding:0vw 0vw;
     
      }
`

const Holder = styled.div`
color:#e3e2e2;
font: italic
#2c3d65font-family:Pixel;
text-transform:uppercase;
letter-spacing:5px;

    text-align: center;
    padding: 5vw;
    @media (min-width: 1px) and (max-width: 426px) {
      width: auto;
      padding: 15vw 0vw;
      }
`

const Heading = styled.h1`
color:#e3e2e2;
font: italic
#2c3d65font-family:Pixel;
text-transform:uppercase;
letter-spacing:5px;
font-size:1.5vw;

  @media (min-width: 1px) and (max-width: 426px) {
    font-size: 4vw;
  
     }
`
const Anchor = styled.a`
color:#e3e2e2;
font: italic
#2c3d65font-family:Pixel;
text-transform:uppercase;
letter-spacing:5px;
border:5px solid #e3e2e2;
background:#3c9a43;
width: 33.3%;
    text-align: center;
    @media (min-width: 1px) and (max-width: 426px) {
      width: auto;

      }
`


class Social extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
render() {
 
    return (
      
      <Container id="Home">

          <Anchor href="https://github.com/Zeus540" target="_blank" rel="noopener noreferrer" data-aos='slide-left'><Holder  >
          <Heading>GITHUB</Heading>
          </Holder>
          </Anchor>
          <Anchor href="https://www.linkedin.com/in/zaheerroberts/" target="_blank" rel="noopener noreferrer" data-aos='slide-up'>
          <Holder >
          <Heading>LINKEDIN</Heading>
          </Holder>
          </Anchor>
        <Anchor href={Cv} target="_blank" rel="noopener noreferrer" data-aos='slide-right'>
          <Holder  >
          <Heading>RESUME</Heading>
          </Holder>
</Anchor>
      </Container>
  );
  }
}

export default Social;
