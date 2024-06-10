import React, { useState } from 'react'
import Containar from './Containar'
import { IoClose } from "react-icons/io5";

const NavHeadDIscount = () => {
  const [show,setShow] = useState(true)
  return (
    show && <section className='py-2 w-full relative bg-primary'>
      <div className='text-white absolute right-5 top-1/2 -translate-y-1/2 text-2xl cursor-pointer'><IoClose onClick={()=>setShow(false)} /></div>
        <Containar>
            <div className='text-center bg-primary text-white'>
              <h2 className='text-base font-normal font-jost'>Further reductions: enjoy an extra <span className='font-bold'>20%</span> off our Sale and free home delivery</h2>
            </div>
        </Containar>
    </section>
  )
}

export default NavHeadDIscount