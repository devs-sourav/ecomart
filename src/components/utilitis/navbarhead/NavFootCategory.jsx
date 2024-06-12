import React, { useState, useEffect, useRef } from 'react';

import Containar from './Containar';
import { IoIosArrowDown, IoMdMenu,IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaFacebook, FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';
import Search from './Search';

const categoryList = [
  { name: "Shirts", quantity: 8, link: "/" },
  { name: "Pants", quantity: 12, link: "/" },
  { name: "Jackets", quantity: 17, link: "/" },
  { name: "Leggings", quantity: 6, link: "/" },
  { name: "Beachware", quantity: 25, link: "/" },
  { name: "Underware", quantity: 17, link: "/" },
  { name: "Belt", quantity: 9, link: "/" },
];

const socialList = [
  {
    name:"Facebook",
    link:"https://www.facebook.com/profile.php?id=100008414221692",
    icon:FaFacebookF
  },
  {
    name:"Twitter",
    link:"https://www.linkedin.com/in/sourav-acherjee-a8258825b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon:FaTwitter
  },
  {
    name:"Instagram",
    link:"https://www.linkedin.com/in/sourav-acherjee-a8258825b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon:FaInstagram
  },
  {
    name:"Pinterest",
    link:"https://www.linkedin.com/in/sourav-acherjee-a8258825b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon:FaPinterestP
  },
]

const NavFootCategory = () => {
  const [show, setShow] = useState(false);
  const categoryRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryRef.current && !categoryRef.current.contains(event.target) &&
        menuRef.current && !menuRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className='pt-1.5 pb-4 hidden tabscreen:block'>
      <Containar>
        <div className='flex flex-wrap justify-between items-center font-jost'>
          <div className='flex flex-wrap gap-x-7'>
            <div className='w-[250px] lg:w-[270px] text-white h-70 cursor-pointer relative  rounded-md bg-secondary flex items-center'>
              <div ref={categoryRef} onClick={() => setShow(!show)} className='w-full h-full  px-5 flex justify-between items-center font-jost'>
                <div className='flex gap-x-5 items-center'>
                  <div><IoMdMenu className='text-[28px] text-white' /></div>
                  <div className='uppercase text-base font-medium'>Category</div>
                </div>
                <div className={show ? "rotate-180 transition-all ease-linear duration-100" : "rotate-0 transition-all ease-linear duration-300"}>
                  <IoIosArrowDown />
                </div>
              </div>
              {show && (
                <div ref={menuRef} className='cursor-default absolute w-full top-[107%] bg-secondary rounded-md px-5 py-8'>
                  <ul className='flex flex-col gap-y-1.5'>
                    {categoryList.map((item, index) => (
                      <li key={item.name + index}>
                        <Link onClick={() => setShow(false)} to={item.link} className='flex justify-between items-center cursor-pointer'>
                          {item.name}
                          <span>{item.quantity}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {/* <div className='w-[390px] h-70'>
              <form className='z-0 w-full h-full relative'>
                <input className='w-full h-full bg-[#f6f6f6] rounded-md pl-8  pr-12 focus:ring-transparent focus:border-none outline-none placeholder:text-base placeholder:text-[#707070]' placeholder='Search Products....'/>
                <IoIosSearch className='absolute text-2xl text-secondary right-3 top-1/2 -translate-y-1/2'/>
              </form>
            </div> */}
            <Search/>
          </div>
          <div className='flex flex-wrap items-center'>
            <div className='flex items-center gap-x-3.5'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="43.051" height="42.064" viewBox="0 0 43.051 42.064"><g id="customer-support" transform="translate(-0.643 -1.361)"><path id="Path_51" data-name="Path 51" d="M41.05,19.581a18.893,18.893,0,0,0-37.763,0A4.444,4.444,0,0,0,.643,23.639v4.985a4.445,4.445,0,0,0,4.44,4.44,2.876,2.876,0,0,0,2.873-2.873v-8.12a2.867,2.867,0,0,0-2.591-2.845,16.834,16.834,0,0,1,33.605,0,2.867,2.867,0,0,0-2.588,2.844V30.19a2.866,2.866,0,0,0,2.626,2.847V35.09a4.2,4.2,0,0,1-4.191,4.19h-3.1a3.085,3.085,0,0,0-2.929-2.085h-3.2a3.071,3.071,0,0,0-1.3.286,3.122,3.122,0,0,0-1.812,2.83,3.12,3.12,0,0,0,3.116,3.116h3.2a3.128,3.128,0,0,0,2.931-2.086h3.1a6.257,6.257,0,0,0,6.25-6.25V32.671a4.443,4.443,0,0,0,2.626-4.049V23.637a4.444,4.444,0,0,0-2.644-4.056ZM5.9,22.071V30.19A.814.814,0,0,1,5.082,31,2.384,2.384,0,0,1,2.7,28.623V23.638a2.383,2.383,0,0,1,2.381-2.381A.814.814,0,0,1,5.9,22.071ZM29.818,40.53a1.061,1.061,0,0,1-1.034.837h-3.2a1.056,1.056,0,0,1-.438-2.017,1.023,1.023,0,0,1,.438-.1h3.2a1.061,1.061,0,0,1,1.034,1.275ZM41.634,28.623A2.384,2.384,0,0,1,39.254,31a.814.814,0,0,1-.813-.813V22.071a.814.814,0,0,1,.813-.813,2.384,2.384,0,0,1,2.381,2.381Z" transform="translate(0 0)" fill="#171717"></path><path id="Path_52" data-name="Path 52" d="M33.629,33.546a4.368,4.368,0,0,0,4.363-4.363v-8.89a4.369,4.369,0,0,0-4.363-4.363H20.294a4.368,4.368,0,0,0-4.363,4.363v8.89a4.368,4.368,0,0,0,4.363,4.363h.082v2.3a2.139,2.139,0,0,0,2.136,2.145,2.094,2.094,0,0,0,1.507-.636l3.833-3.812ZM26.7,31.786l-4.148,4.125a.052.052,0,0,1-.071.016.069.069,0,0,1-.047-.078V32.516a1.03,1.03,0,0,0-1.03-1.03H20.295a2.306,2.306,0,0,1-2.3-2.3v-8.89a2.306,2.306,0,0,1,2.3-2.3H33.63a2.309,2.309,0,0,1,2.3,2.3v8.89a2.306,2.306,0,0,1-2.3,2.3h-6.2a1.031,1.031,0,0,0-.726.3Z" transform="translate(-4.793 -4.568)" fill="#171717"></path><path id="Path_53" data-name="Path 53" d="M24.019,26.787a1.519,1.519,0,1,0,1.521,1.519A1.522,1.522,0,0,0,24.019,26.787Z" transform="translate(-6.853 -7.972)" fill="#171717"></path><path id="Path_54" data-name="Path 54" d="M31.305,26.787a1.519,1.519,0,1,0,1.521,1.519A1.522,1.522,0,0,0,31.305,26.787Z" transform="translate(-9.137 -7.972)" fill="#171717"></path><path id="Path_55" data-name="Path 55" d="M38.591,26.787a1.519,1.519,0,1,0,1.521,1.519A1.522,1.522,0,0,0,38.591,26.787Z" transform="translate(-11.422 -7.972)" fill="#171717"></path></g></svg>                
              </div>

              <div className='pr-5 lg:pr-7 py-1.5 border-r border-bordergray'>
                <Link className='text-lg  font-jost font-semibold leading-4 text-secondary' to="tel:+8801629169610">016 - 2916 - 9610</Link>
                <p className='text-base  font-jost font-normal leading-4 text-[#707070]'>24/7 Support Center</p>
              </div>
            </div>
            <ul className='pl-5 lg:pl-7 flex gap-x-6'>
              {
                socialList.map((item,index)=>{
                  const Icon = item.icon
                  return(
                    <li key={index} className='index text-secondary transition-all ease-linear duration-100 hover:text-primary'><Link target='_blanck' to={item.link}><Icon/></Link></li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </Containar>
    </section>
  );
};

export default NavFootCategory;
