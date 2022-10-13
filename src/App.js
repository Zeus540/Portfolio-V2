import React from 'react';
import Projects from './components/Projects.jsx'

import Page3New from './components/page3New.jsx'
import Nav from './components/Nav.jsx'
import Social from './components/Social.jsx'
import Gallery1 from './components/Gallery.jsx'
import TimeLine from './components/TimeLine.jsx'

import Footer from './components/footer.jsx'
import Contact from './components/contact.jsx'

function App() {

  return (
    <div  >
        {/* <Nav/> */}
        <Page3New />
       
        <Gallery1/>
    
        {/* <TimeLine/> */}
        <Contact/>
        
        <Footer/>
    </div>
  );
}

export default App;
