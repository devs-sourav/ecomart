import React, { useState } from 'react'
import Containar from './Containar'
import ecomartLogo from '../../../assets/logos/logo-ecomart.webp'
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart, FaExchangeAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const menuList = [
    {
        name:"Home",
        link:"/",
    },
    {
        name:"Shop",
        link:"/",
        dropdown:[
            {
                name:"Shop",
                link:"/"
            },
            {
                name:"Shop Details",
                link:"/"
            },
        ]
    },
    {
        name:"Pages",
        link:"/",
        dropdown:[
            {
                name:"About",
                link:"/"
            },
            {
                name:"Profile",
                link:"/"
            },
        ]
    },
    {
        name:"Blog",
        link:"/",
        // dropdown:[]
    },
    {
        name:"Contact",
        link:"/",
    },

]

const iconList = [
    {
        name:"cart",
        icon: IoBagOutline,
        link:"/",
        color: "bg-primary",
        lenActive:true
    },
    {
        name:"favorite",
        icon: CiHeart,
        link:"/",
        lenActive:true
    },
    {
        name:"compare",
        icon: LiaExchangeAltSolid ,
        link:"/",
        lenActive:true
    },
]

const Navbar = () => {
    const [show, setshow] = useState(false);
  return (
    <nav>
        <Containar>
            <div className='flex flex-wrap items-center justify-between'>
                <div className='flex flex-wrap items-center gap-70'>
                    <div>
                        <img src={ecomartLogo}/>
                    </div>
                    <div>
                        <ul className='flex flex-wrap gap-8 py-7'>
                            {                             
                                menuList.map((item,index)=>(
                                    <li key={index} className='relative group  text-lg flex gap-x-1 items-center font-medium leading-5 text-secondary font-jost'><Link className='group-hover:text-primary  transition-all ease-linear duration-100' to={"/"}>{item.name}</Link>
                                    {
                                        item.dropdown && <IoIosArrowDown className={`text-sm group-hover:text-primary transition-all ease-linear duration-100 group-hover:rotate-180`}/>
                                    }
                                    {   
                                        item.dropdown &&
                                        <ul className='absolute left-0 group-hover:opacity-100 group-hover:visible group-hover:top-[56px] top-[66px] w-60 border border-t-4 py-4 border-t-primary shadow-xl invisible opacity-0 transition-all ease-linear duration-200'>
                                            {
                                                // item.dropdown.map((dropitem,index)=>(
                                                //     <li key={index}>{dropitem.name}</li>
                                                // ))
                                                item.dropdown.map((dropitem,dropindex)=>(
                                                    <li className='px-6 py-2' key={dropindex}><Link to={dropitem.link}>{dropitem.name}</Link></li>
                                                ))
                                            }
                                        </ul>
                                    }
                                        
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='flex flex-wrap items-center'>
                    <ul className='py-5 flex flex-wrap gap-x-7'>
                        {
                           iconList.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <li key={index} className=''>
                                    <Link to="/" className='w-14 h-14 relative rounded-full border border-bordergray flex flex-wrap justify-center items-center' aria-label={`Link with ${item.name || 'icon'}`}>
                                        <Icon className='text-[20px] text-secondary' aria-hidden="true" />
                                        {
                                            item.lenActive && 
                                            <div className='absolute -right-1 -top-1'>
                                                <span className={`w-6 h-6 rounded-full flex justify-center items-center text-white ${item.color ? item?.color : "bg-secondary"} leading-6 mb-0.5`}>
                                                    0
                                                </span>
                                            </div>
                                        }
                                        
                                    </Link>
                                </li>
                            );
                        })
                        
                        }
                        <li  className=''>
                            <Link to="/" className='w-14 h-14 relative rounded-full bg-[#f6f6f6] flex flex-wrap justify-center items-center'>
                                <AiOutlineUser className='text-[20px] text-secondary' aria-hidden="true" />
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </Containar>
    </nav>
  )
}

export default Navbar