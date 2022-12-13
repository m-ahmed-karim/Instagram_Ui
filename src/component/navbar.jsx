import React from "react";
import img from '../component/image/download.png'
import { RiMessengerLine } from 'react-icons/ri'




  function Navbar(){
    return(
        <>
        <div className="main_navbar">
            <div><img src={img}/></div>
            <div> <RiMessengerLine className="navbar_icon"  /></div>
        </div>
        </>
    );
  };
  export default Navbar;