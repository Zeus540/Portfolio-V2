import React, { useEffect, useState,useContext } from 'react'
import styled from 'styled-components'
import 'react-alice-carousel/lib/alice-carousel.css'
import Kkwe from '../images/Kkwe.png'
import IoT from '../images/iot.gif'
import Dash from '../images/dash.gif'
import Crud from '../images/Crud.png'

import Bright from '../images/Bright.png'
import Rot from '../images/Rot.png'
import Nike from '../images/Nike.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Ghost from '../images/ghost.png'
import Projects from '../components/Projects.jsx'
import { ObjectivesContext } from '../context/Objectives';

const Container = styled.div`
height: 100%;
margin: 0 auto;
overflow: hidden;
display: flex;
background: #125eac;
padding: 2vw;

@media (min-width: 1px) and (max-width: 426px) {
  padding: 0px;
  flex-direction: column;
  }
`
const ContainerOutterClip = styled.div`



`
const ContainerOutter = styled.div`
height: 100%;
margin: 0 auto;
overflow: hidden;
clip-path: polygon(0 0%,50% 0,100% 0%,100% 90%,50% 100%,0 90%);
position:relative;
padding: 2vw;
background: #125eac;
@media (min-width: 1px) and (max-width: 426px) {
  clip-path: polygon(0 0%,50% 0,100% 0%,100% 98%,50% 100%,0 98%);
  padding:   40px 20px;
  padding-top: 0px;
  }
`

const ImgHolder = styled.div`
width:60vw;
border-radius:10px;
transition: all 0.2s ease-in-out;
display:none;
@media (min-width: 1px) and (max-width: 426px) {
  width:100%;
  
 }
`


const GhostImg = styled.img`
width: 300px;
position: absolute;
bottom: 60px;

transform: translateX(${props => props.ghostP}%);
transition: all 5s linear;
@media (min-width: 1px) and (max-width: 426px) {
  top: 98px;
  width: 190px;
 }
`

const Holder = styled.div`
display:flex;

padding: 40px;
flex-direction:row;
height: 100%;

overflow: hidden;

width: calc(100% / 3 - 40px);
background:  #20273b;
min-height: 348px;
margin: 20px ;
border-radius: 10px;

@media (min-width: 1px) and (max-width: 426px) {
 width:100%;
 display: flex;
 flex-direction: column;
 margin: 15px 0vw;
 padding: 20px;
 min-height: unset;
 }
`

const HolderInner = styled.div`
display:flex;
padding-bottom: 0px;
flex-direction:column;
width:100%;
justify-content: space-between;
@media (min-width: 1px) and (max-width: 426px) {
  
  flex-direction:column;
 }
`


const ProjectHeading = styled.h1`
font-size:80px;
color:#d2d2d2;
font-family:Pixel;
font-weight:bolder;


@media (min-width: 1px) and (max-width: 426px) {
  font-size:9vw;
  margin:2vw 0px;
 }
`
const Sup = styled.sup`

color:#125eac;
font-family:Pixel;
font-weight:bolder;
font-size: 1vw;
@media (min-width: 1px) and (max-width: 426px) {
  font-size: 3.5vw;

 }
`

const Heading = styled.h1`
font-size:1vw;
color:#125eac;
font-family:Pixel;

@media (min-width: 1px) and (max-width: 426px) {
  font-size: 3.5vw;
 }
`
const HeadingF = styled.h1`
font-size:0.7vw;
color: #20273b;
font-family:Pixel;

@media (min-width: 1px) and (max-width: 426px) {
  font-size: 3.5vw;
 }
`
const BtnHolder = styled.div`
font-size:0.7vw;
color: #20273b;
font-family:Pixel;

@media (min-width: 1px) and (max-width: 426px) {
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

 }
`

const HeadingViewCode = styled.button`
font-size:0.5vw;
color:#d2d2d2!important;
font-family:Pixel;
margin: 30px 0vw 1vw 0vw;
padding:10px 20px;
border:none;
cursor:pointer;
margin-bottom: 0px;
background:#125eac;
border-radius:10px;
margin-right: 20px
@media (min-width: 1px) and (max-width: 426px) {
  font-size: 3.5vw;
  margin-right: 0px; 
  width: 47%;
 }
`
const Anchor = styled.a`
font-size:0.5vw;
border-radius:10px;

color:#d2d2d2!important;
@media (min-width: 1px) and (max-width: 426px) {
  font-size: 3.5vw;
 }
`
const Img = styled.img`
width:100%;
border-radius:10px;
@media (min-width: 1px) and (max-width: 426px) {
  margin-top:5vw; 
  width:100%;
  height:100%
 }
`

const StackMenu = styled.div`
width:100%;


line-height:22px;
background: #dfdfdf;
border-radius:10px;
padding:20px;
margin: 30px 0vw 0vw 0vw;
`
const TabHolder = styled.div`
display:flex;
`
const Tab = styled.button`
color:#d2d2d2;
padding:10px 40px;
border:none;
background:none;
cursor:pointer;
transition: padding 0.5s ease;
&:hover {
  background-color: #2c3d65;
  padding:10px 60px;
}
`
const ActiveTab = styled(Tab)`
background-color: #2c3d65;
padding:10px 60px;

`;
const StackMenuHeading = styled.p`
font-size:0.8vw;
color:#d2d2d2;
font-family:Pixel;
margin: 15px 0vw ;
color:white;
cursor:pointer;
@media (min-width: 1px) and (max-width: 426px) {
  font-size: 3.5vw;
  
 }
`



function Gallery() {
  let projects = [
    {
      url: "https://sweetleaf.co.za/",
      sup: "IOT - AUTOMATION",
      ProjectHeading: "SWEET LEAF",
      heading: "GROW JOURNAL",
      frontend: "REACT.JS - CHART.JS - STYLED COMPONENTS - AXIOS ",
      backend: "MYSQL - NODE.JS - EXPRESS.JS - PYTHON",
      hardware: "RASPBERRY PI 3",
      github: "https://github.com/Zeus540/IOTDashboard",
      image: IoT,
      showStack: false,
      catergory:"IOT",
      id:1
    },
    {
      url: "https://dash.odinsgate.co.za/",
      sup: "CRM - OPEN SOURCE",
      ProjectHeading: "NEXT",
      heading: "CRM SYSTEM",
      frontend: "REACT.JS - CHART.JS - STYLED COMPONENTS - AXIOS ",
      backend: "MYSQL - NODE.JS - EXPRESS.JS",
      hardware: null,
      github: "https://github.com/Zeus540/E-Commerce-Store-NYX",
      image: Dash,
      showStack: false,
      catergory:"CRM",
      id:2
    },
    {
      url: "https://odinsgate.co.za/",
      sup: "IOT - AUTOMATION - OPEN SOURCE",
      ProjectHeading: "SMART PLANT",
      heading: "IOT BASED PLANT MONITOR",
      frontend: "REACT.JS - CHART.JS - STYLED COMPONENTS - AXIOS ",
      backend: "MYSQL - NODE.JS - EXPRESS.JS",
      hardware: "WIFI CRICKET V1",
      github: "https://github.com/Zeus540/IOTDashboard",
      image: IoT,
      showStack: false,
      catergory:"IOT",
      id:3
    },
  ]

  let Tabs = [
    {
      catergory:"IOT",
      active:true,
    },
    {
      catergory:"CRM",
      active:false,
    }
  ]

const [viewedProject, setViewedProject] = useState([])
const [filter, setFilter] = useState("IOT")
const [projectsData, setProjectsData] = useState(projects)
const [tabsData, setTabsData] = useState(Tabs)
const [prevtab, setPrevTab] = useState(tabsData[0])
const [ghostP, setGhostP] = useState(-130)
const [ghostVis, setGhostVis] = useState("block")
const [triggerGhost, setTriggerGhost] = useState(0)
const {statMenu,setViewProjects} = useContext(ObjectivesContext)

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])


  const handleViewProjects = (data) =>{

 
    if(viewedProject.find((d)=> d.id == data.id) == undefined ){
      setViewedProject([...viewedProject,data])
    }



  }


  useEffect(() => {
    console.log(viewedProject.length  >= 3 )
    if(viewedProject.length  == 3 ){
      setViewProjects(true)
    }
  }, [viewedProject])
  




  const toggleStackMenu = (project) => {
    if (project.showStack == false) {
      project.showStack = true
      setProjectsData([...projectsData])
    } else {
      project.showStack = false
      setProjectsData([...projectsData])
    }
  }

  const handleTabChange = (e,tab)=>{
  

    for (let index = 0; index < tabsData.length; index++) {
      const element = tabsData[index];

      if(element.active === true && tab == prevtab){
        tab.active = false
        prevtab.active = false
      }else{
        tab.active = true
        prevtab.active = false
      }
    }

    setPrevTab(tab)
    setFilter(e.target.value)
  }


  const handleTriggerGhost =()=>{
    
    
    if(triggerGhost < 3){

      setTriggerGhost(triggerGhost + 1)
    }else{
      console.log("right")
      setGhostP(1000)
      setTriggerGhost(0)
      
      if(ghostP == 1000){
        setGhostP(-130)
      setTriggerGhost(0)
      }
    }

    if(triggerGhost >= 3){
     
    }

  }

 
  
  return (
    <ContainerOutterClip>
<ContainerOutter >
<Projects setGhostP={setGhostP} ghostP={ghostP}/>
    <Container >

      {/* <TabHolder>
      {tabsData.map((tab,index)=>{
        return(
        <>
          {tab.active? <ActiveTab value={tab.catergory} onClick={(e)=>{handleTabChange(e,tab)}}>{tab.catergory}</ActiveTab>:<Tab value={tab.catergory} onClick={(e)=>{handleTabChange(e,tab)}}>{tab.catergory}</Tab>}
        </>
        
        )
      })}
   
    

      </TabHolder> */}
      {projectsData?.map((project, index) => {
      
        return (
          <Holder data-aos='slide-up' onClick={()=>{handleViewProjects(project)}}>

            <HolderInner>
              <div>
  
                <span><Sup>{project.sup}</Sup><ProjectHeading  >{project.ProjectHeading}</ProjectHeading> </span>
             
              <Heading>{project.heading}</Heading>
              </div>
              <BtnHolder>
              <HeadingViewCode  onClick={() => { toggleStackMenu(project) }}>
                
                      View Stack
                 
                    </HeadingViewCode>

                

              <HeadingViewCode  >
                      <Anchor href={project.github} target="_blank" rel="noopener noreferrer">
                        VIEW CODE
                      </Anchor>
                    </HeadingViewCode>

                    <HeadingViewCode  >

                  <Anchor href={project.url} target="_blank" rel="noopener noreferrer">
                  Visit Site
                  </Anchor>


                  </HeadingViewCode>

                {project?.showStack &&
                  <StackMenu>
                    <Sup>Front-End</Sup>
                    <HeadingF>{project.frontend}</HeadingF>
                    <br/>
                  
                    <Sup>Back-End</Sup>
                    
                    <HeadingF  >{project.backend}</HeadingF>
                    {project.hardware !== null
                      && 
                      <>
                        <br/>
                       <Sup>Hardware</Sup>
                    <HeadingF  >{project.hardware}</HeadingF>
                      </>
                    }
                   
               
                  </StackMenu>
                }
              </BtnHolder>



            </HolderInner>
      
            
            <ImgHolder>

       
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Img src={project.image} alt="" width="100%"/>
              </a>
            </ImgHolder>


          </Holder>
          
        )
      })}
   



    </Container>
    <GhostImg src={Ghost} alt="" width="100%" ghostP={ghostP} ghostVis={ghostVis}/>
    </ContainerOutter>
    </ContainerOutterClip>
  );
}

export default Gallery