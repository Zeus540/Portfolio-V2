import React,{useState} from 'react';
import Projects from './components/Projects.jsx'
import styled from 'styled-components';
import Page3New from './components/page3New.jsx'
import Nav from './components/Nav.jsx'
import Social from './components/Social.jsx'
import Gallery1 from './components/Gallery.jsx'
import TimeLine from './components/TimeLine.jsx'

import Footer from './components/footer.jsx'
import Contact from './components/contact.jsx'


const Stats = styled.div`
cursor: pointer;
    fill:#125eac ;
    padding: 10px;
    color: #e4e4e4;
    height: 50px;
    width: 50px;
    background: #eec100;
    border-radius: 5px 0px 0px 5px;
    
    border-right: 0px;
`

const StatsHeading = styled.div`
padding: 10px 20px;
    padding-bottom: 0px;
    color: #e4e4e4;
    font-family: 'Pixel';
    font-size: 28px;
`
const Check = styled.div`
width:30px;
fill: gray;
`
const CheckComplete = styled.div`
width:30px;
fill: #00d400;
`

const Ach = styled.div`
padding: 15px;
background: #20273b;
margin: 15px;
color: #e4e4e4;
border-radius: 5px;
display: flex;
justify-content: space-between;
align-items: center;

`
const StatsMenu = styled.div`

background: #125eac;

padding: 0px;
width: 300px;
border-radius: 0px 0px 0px 10px;
`
const StatsMenuHolder = styled.div`
position: fixed;
top: 198px;
right: 0px;
display: flex;
z-index: 99;
transform: translateX(${props => props.statMenu}px);
transition: 0.5s all linear;
`
function App() {

  const [easterEggsFound, setEasterEggsFound] = useState(0)
const [statMenu, setStatMenu] = useState(300)
const [emailSent, setEmailSent] = useState(false)
const [viewLinkedIn, setViewLinkedIn] = useState(false)
const [downloadResume, setDownloadResume] = useState(false)
const [viewProjects, setViewProjects] = useState(false)

  return (
    <div  >
        {/* <Nav/> */}
        <StatsMenuHolder statMenu={statMenu} >
      <Stats onClick={()=>{statMenu == 300 ? setStatMenu(0) : setStatMenu(300)}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/></svg>
      </Stats>
      <StatsMenu>

      <StatsHeading>Objectives</StatsHeading>
     
     <Ach>
     <div>Send Email</div>
  <div>
  {emailSent ?   <CheckComplete><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
      </svg></CheckComplete>:  <Check><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
      </svg></Check> }
      </div>
   
   
     </Ach>

     <Ach>
     <div>View LinkedIn</div>
     <div>
  {viewLinkedIn ?   <CheckComplete><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
      </svg></CheckComplete>:  <Check><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
      </svg></Check> }
      </div>
     </Ach>

     <Ach>
     <div>Download Resume</div>
     <div>
     {downloadResume ?   <CheckComplete><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
      </svg></CheckComplete>:  <Check><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
      </svg></Check> }
      </div>
     </Ach>


     <Ach>
     <div>View 3 or more projects</div>
     <div>
     {viewProjects ?   <CheckComplete><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
      </svg></CheckComplete>:  <Check><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
      </svg></Check> }
      </div>
     </Ach>

     <Ach>
     <div>Easter Eggs Found</div>
     <div>{easterEggsFound}/5</div>
     </Ach>
      </StatsMenu>
      </StatsMenuHolder>
        <Page3New />
       
        <Gallery1/>
    
        {/* <TimeLine/> */}
        <Contact/>
        
        <Footer/>
    </div>
  );
}

export default App;
