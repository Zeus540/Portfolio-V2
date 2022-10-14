import React,{ useState,CSSProperties,useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import styled from 'styled-components';
import  useMediaQuery  from '../hooks/useMediaQuery'

const Holder = styled.div`
height: 100vh;
display: flex;
align-items: center;
color: white;
    flex-direction: column;
    justify-content: center;
position: fixed;
z-index: 999;
background: linear-gradient(238deg,#131313,#293759);
width: 100vw;
transform: translateY(${props => props.open}%);
transition: 1s all linear;
@media (min-width: 1px) and (max-width: 426px) {
    width: 100%;
    margin-top: 0px;
  
   }
`;

const IntoPage = () => {

    let [open, setOpen] = useState(0);
    let [color, setColor] = useState("#eec100");
    let [size, setSize] = useState(45);

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "#eec100",
       borderWidth: '4px'

      };


    useEffect(() => {
        document.documentElement.style.overflow = "hidden";
      setTimeout(() => {
        setOpen(-100)
        document.documentElement.style.overflow = "auto";
      }, 4000);
    }, [])
    
  

    const isMobile = useMediaQuery('(max-width: 600px)');
    const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1333px)');
    const isDesktop = useMediaQuery('(min-width: 1334px)');


    useEffect(() => {
      if(isMobile){
        setSize(25)
      }
      if(isTablet){
        setSize(40)
      }
    }, [isTablet])
    

  return (
    <Holder open={open}>
         <PacmanLoader
        color={color}
        cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

    </Holder>
    
  )
}

export default IntoPage