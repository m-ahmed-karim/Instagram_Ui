import React, { useEffect } from "react";
import { AiFillHome } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { CgDetailsMore } from 'react-icons/cg'
import img from '../component/image/download.png'

function Sidbar() {
    return (
        <>
            <div className="main_sidber">
                <div className="sidber">
                    <img className="h1" src={img}/>
                    <p className="p_1">  <AiFillHome className="icon"  /> Home</p>
                    <p className="p_1"> <BsSearch className="icon" />  Search</p>
                    <p className="p_1"> <MdOutlineExplore className="icon" />  Explore</p>
                    <p className="p_1"> <RiMessengerLine className="icon"  />  Messages</p>
                    <p className="p_1"> <AiOutlineHeart className="icon" />  Notifications</p>
                    <p className="p_1"> <BiMessageSquareAdd className="icon"  />  Create</p>
                    <p className="p_1"> <CgProfile className="icon"  />  Profile</p>
                    <p className="p_1"> <CgDetailsMore className="icon" />  More</p>
                </div>

            </div>

        </>
    );
};
export default Sidbar;