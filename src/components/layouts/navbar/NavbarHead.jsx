import React from 'react'
import NavHeadDIscount from '../../utilitis/navbarhead/NavHeadDIscount'
import NavSecondHead from '../../utilitis/navbarhead/NavSecondHead'
import Navbar from '../../utilitis/navbarhead/Navbar'
import NavFootCategory from '../../utilitis/navbarhead/NavFootCategory'

const NavbarHead = () => {
  return (
    <>
      <NavHeadDIscount/>
      <NavSecondHead/>
      <Navbar/>
      <NavFootCategory/>
    </>
  )
}

export default NavbarHead