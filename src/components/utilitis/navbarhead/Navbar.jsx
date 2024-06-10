import React from 'react'
import Containar from './Containar'
import ecomartLogo from '../../../assets/logos/logo-ecomart.webp'
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart, FaExchangeAlt } from "react-icons/fa";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';

const menuList = [
    {
        name:"Home",
        link:"/",
        dropdown:false
    },
    {
        name:"Shop",
        link:"/",
        dropdown:true
    },
    {
        name:"Pages",
        link:"/",
        dropdown:true
    },
    {
        name:"Blog",
        link:"/",
        dropdown:true
    },
    {
        name:"Contact",
        link:"/",
        dropdown:false
    },

]

const iconList = [
    {
        name:"cart",
        icon: IoBagOutline,
        link:"/",
        color: "bg-primary"
    },
    {
        name:"favorite",
        icon: CiHeart,
        link:"/"
    },
    {
        name:"compare",
        icon: LiaExchangeAltSolid ,
        link:"/"
    },
]

const Navbar = () => {
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
                                    <li key={index} className='text-lg font-medium leading-5 text-secondary font-jost'><Link to={"/"}>{item.name}</Link></li>
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
                                        <div className='absolute -right-1 -top-1'>
                                            <span className={`w-6 h-6 rounded-full flex justify-center items-center text-white ${item.color ? item?.color : "bg-secondary"} leading-6 mb-0.5`}>
                                                0
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })
                        
                        }

                    </ul>
                </div>
            </div>
        </Containar>
    </nav>
  )
}

export default Navbar