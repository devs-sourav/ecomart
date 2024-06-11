import React, { useState, useEffect, useRef } from 'react';
import Containar from './Containar';
import { IoIosArrowDown, IoMdMenu,IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

const categoryList = [
  { name: "Shirts", quantity: 8, link: "/" },
  { name: "Pants", quantity: 12, link: "/" },
  { name: "Jackets", quantity: 17, link: "/" },
  { name: "Leggings", quantity: 6, link: "/" },
  { name: "Beachware", quantity: 25, link: "/" },
  { name: "Underware", quantity: 17, link: "/" },
  { name: "Belt", quantity: 9, link: "/" },
];

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
    <section className='pt-1.5 pb-4'>
      <Containar>
        <div className='flex justify-between items-center font-jost'>
          <div className='flex gap-x-8'>
            <div className='w-[270px] text-white h-70 cursor-pointer relative  rounded-md bg-secondary flex items-center'>
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
            <div className='w-[390px] h-70'>
              <form className='w-full h-full relative'>
                <input className='w-full h-full bg-[#f6f6f6] rounded-md pl-8  pr-12 focus:ring-transparent focus:border-none outline-none placeholder:text-base placeholder:text-[#707070]' placeholder='Search Products....'/>
                <IoIosSearch className='absolute text-2xl text-secondary right-3 top-1/2 -translate-y-1/2'/>
              </form>
            </div>
          </div>
          <div className=''>
            dfdf
          </div>
        </div>
      </Containar>
    </section>
  );
};

export default NavFootCategory;
