import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const [mobile, setMobile] = useState(false)
   const [hover,setHover]=useState(false)
    let location = window.location.pathname
     
     const [offset, setOffset] = useState(0);

     const handleHover = ()=>{
          setHover(!hover)
     }
   
     useEffect(() => {
       window.onscroll = () => {
         setOffset(window.pageYOffset)
       }
     }, []);
   
     useEffect(() => {
       let header = document.getElementsByClassName("fixed-top");  
         if (offset > 20) {
           header[0].classList.add("header-fixed");
           
         } else {
           header[0].classList.remove("header-fixed");
           
         }
     
     }, [offset]);
  return (
    <React.Fragment>
      
    </React.Fragment>
  );
}

export default Header;
