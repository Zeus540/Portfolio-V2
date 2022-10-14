import React,{useState,useEffect} from 'react';
import Projects from './components/Projects.jsx'
import styled from 'styled-components';
import Page3New from './components/page3New.jsx'
import Nav from './components/Nav.jsx'
import Social from './components/Social.jsx'
import Gallery1 from './components/Gallery.jsx'
import TimeLine from './components/TimeLine.jsx'

import Footer from './components/footer.jsx'
import Contact from './components/contact.jsx'
import { ObjectivesProvider } from './context/Objectives';
import { SnackbarProvider } from 'notistack';
import IntoPage from './components/IntoPage.js';


const Holder = styled.div`
transition:2s all linear
`;

function App() {


  return (
    <Holder  >
    
      <IntoPage/> 
      <SnackbarProvider maxSnack={2}  anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                       >
       <ObjectivesProvider>
        {/* <Nav/> */}
        <Page3New />
        <Gallery1/>
       <TimeLine/> 
        <Contact/>
        <Footer/>
       </ObjectivesProvider>
       </SnackbarProvider>
       
    </Holder>
  );
}

export default App;
