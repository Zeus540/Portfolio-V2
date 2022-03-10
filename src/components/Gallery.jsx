import React, { useEffect, useState } from 'react'
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

const Container = styled.div`
height: 100%;
margin:0 auto;
overflow:hidden;
width: 80vw;
margin-bottom:5vw;
@media (min-width: 1px) and (max-width: 426px) {
  margin-bottom:20vw;
  width: 80vw;
  }
`
const ImgHolder = styled.div`
width:60vw;
max-height: 453px;
transition: all 0.2s ease-in-out;
@media (min-width: 1px) and (max-width: 426px) {
  width:100%;
  
 }
`

const Holder = styled.div`
display:flex;
margin: 0px auto;
padding-bottom: 20px;
flex-direction:row;

height: inherit;
margin: 5vw 0vw;

@media (min-width: 1px) and (max-width: 426px) {
 width:100%;
 display: flex;
 flex-direction: column;
 margin: 0vw 0vw;
 }
`

const HolderInner = styled.div`
display:flex;
padding-bottom: 0px;
flex-direction:column;
width:100%;
@media (min-width: 1px) and (max-width: 426px) {
  margin: 8vw 0vw 0.5vw 0vw;
  flex-direction:column;
 }
`


const ProjectHeading = styled.h1`
font-size:6vw;
color:white;
font-family:arial;
font-weight:bolder;
width:85%;
cursor: pointer;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:9vw;
  margin-bottom:2vw;
 }
`
const Sup = styled.sup`

color:#75d771;
font-family:arial;
font-weight:bolder;

@media (min-width: 1px) and (max-width: 426px) {


 }
`

const Heading = styled.h1`
font-size:1vw;
color:white;
font-family:arial;

@media (min-width: 1px) and (max-width: 426px) {
  font-size: 3.5vw;
 }
`
const HeadingF = styled.h1`
font-size:0.7vw;
color:white;
font-family:arial;
margin: 8px 0px;
@media (min-width: 1px) and (max-width: 426px) {
  font-size: 3.5vw;
 }
`
const HeadingViewCode = styled.button`
font-size:0.5vw;
color:white!important;
font-family:arial;
margin: 1vw 0vw 1vw 0vw;
padding:10px;
border:none;
background-color: #75d771;
@media (min-width: 1px) and (max-width: 426px) {
  font-size: 3.5vw;
 }
`
const Anchor = styled.a`
font-size:0.5vw;
color:white!important;
@media (min-width: 1px) and (max-width: 426px) {
  font-size: 3.5vw;
 }
`
const Img = styled.img`
width:100%;

@media (min-width: 1px) and (max-width: 426px) {
  margin-top:5vw; 
  width:100%;
  height:100%
 }
`

const StackMenu = styled.div`
width:100%;
height:100%;
color:red;
line-height:22px;
margin: 0.5vw 0vw 0.5vw 0vw;
`
const TabHolder = styled.div`
display:flex;
`
const Tab = styled.button`
color:white;
padding:10px 40px;
border:none;
background:none;
cursor:pointer;
transition: padding 0.5s ease;
&:hover {
  background-color: #75d771;
  padding:10px 60px;
}
`
const ActiveTab = styled(Tab)`
background-color: #75d771;
padding:10px 60px;

`;
const StackMenuHeading = styled.p`
font-size:0.8vw;
color:white;
font-family:arial;
margin: 15px 0vw ;
color:#75d771;
cursor:pointer;
@media (min-width: 1px) and (max-width: 426px) {
  font-size: 3.5vw;
  
 }
`



function Gallery() {
const [first, setfirst] = useState()
const [filter, setFilter] = useState("IOT")

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  let projects = [
    {
      url: "https://odinsgate.co.za/",
      sup: "IOT",
      ProjectHeading: "SMART PLANT",
      heading: "IOT BASED PLANT MONITOR",
      frontend: "REACT.JS - CHART.JS - STYLED COMPONENTS - AXIOS ",
      backend: "MYSQL - NODE.JS - EXPRESS.JS",
      hardware: "WIFI CRICKET V1",
      github: "https://github.com/Zeus540/IOTDashboard",
      image: IoT,
      showStack: false,
      catergory:"IOT"
    },
    {
      url: "https://dash.odinsgate.co.za/",
      sup: "CRM",
      ProjectHeading: "NEXT",
      heading: "CRM SYSTEM",
      frontend: "REACT.JS - CHART.JS - STYLED COMPONENTS - AXIOS ",
      backend: "MYSQL - NODE.JS - EXPRESS.JS",
      hardware: null,
      github: "https://github.com/Zeus540/E-Commerce-Store-NYX",
      image: Dash,
      showStack: false,
      catergory:"CRM"
    }
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

  const [projectsData, setProjectsData] = useState(projects)
  const [tabsData, setTabsData] = useState(Tabs)
  const [prevtab, setPrevTab] = useState(tabsData[0])

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


  return (

    <Container >

      <TabHolder>
      {tabsData.map((tab,index)=>{
        return(
        <>
          {tab.active? <ActiveTab value={tab.catergory} onClick={(e)=>{handleTabChange(e,tab)}}>{tab.catergory}</ActiveTab>:<Tab value={tab.catergory} onClick={(e)=>{handleTabChange(e,tab)}}>{tab.catergory}</Tab>}
        </>
        
        )
      })}
   
    

      </TabHolder>
      {projectsData?.filter((p)=>{
          if(filter == null){
            return projectsData
          }else{
            return (
              p.catergory === filter
            )
         
          }
      }).map((project, index) => {
      
        return (
          <Holder data-aos='slide-up'>

            <HolderInner>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <span><Sup>{project.sup}</Sup><ProjectHeading  >{project.ProjectHeading}</ProjectHeading> </span>
              </a>
              <Heading>{project.heading}</Heading>
              <div>
                <StackMenuHeading onClick={() => { toggleStackMenu(project) }}>View Stack</StackMenuHeading>

                {project?.showStack &&
                  <StackMenu>
                    <Sup>Front-End</Sup>
                    <HeadingF>{project.frontend}</HeadingF>
                    <Sup>Back-End</Sup>
                    <HeadingF  >{project.backend}</HeadingF>
                    {project.hardware !== null
                      && 
                      <>
                       <Sup>Hardware</Sup>
                    <HeadingF  >{project.hardware}</HeadingF>
                      </>
                    }
                   
                    <HeadingViewCode  >
                      <Anchor href={project.github} target="_blank" rel="noopener noreferrer">
                        VIEW CODE
                      </Anchor>
                    </HeadingViewCode>
                  </StackMenu>
                }
              </div>



            </HolderInner>

            <ImgHolder>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Img src={project.image} alt="" />
              </a>
            </ImgHolder>


          </Holder>
        )
      })}




    </Container>
  );
}

export default Gallery