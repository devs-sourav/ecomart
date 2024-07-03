import React from 'react'
import Containar from '../navbarhead/Containar'
import { Link } from 'react-router-dom'


const informationList = [
    {
        name:"About Company",
        link:"/"
    },
    {    name:"Payment Type",
        link:"/"
    },
    {    name:"Awards Winning",
        link:"/"
    },
    {    name:"World Media Partner",
        link:"/"
    },
    {    name:"Become an Agent",
        link:"/"
    },
    {    name:"Refund Policy",
        link:"/"
    },

]
const categoriesList = [
    {
        name:"Handbags & Wallets",
        link:"/"
    },
    {    name:"Women's Clothing",
        link:"/"
    },
    {    name:"Plus Sizes",
        link:"/"
    },
    {    name:"Complete Your Look",
        link:"/"
    },
    {    name:"Baby Corner",
        link:"/"
    },
    {    name:"Man & Woman Shoe",
        link:"/"
    },

]
const helpList = [
    {
        name:"Dealers & Agents",
        link:"/"
    },
    {    name:"FAQ Information",
        link:"/"
    },
    {    name:"Return Policy",
        link:"/"
    },
    {    name:"Shipping & Delivery",
        link:"/"
    },
    {    name:"Order Tranking",
        link:"/"
    },
    {    name:"List of Shops",
        link:"/"
    },

]

const FooterSecondPart = () => {
  return (
    <section className='py-20 bg-[#f6f6f6]'>
        <Containar>
            <div className='flex justify-between items-center flex-wrap'>
                <div>
                    <h2 className='text-[22px] mb-6 font-jost font-semibold'>Information</h2>
                    <ul>
                        {
                            informationList.map((item,index)=>(
                                <li key={index} className=' text-base group mt-2 font-normal mb-2 text-[#707070] flex items-center gap-x-2'><span className='w-0 h-0.5 bg-[#707070] group-hover:w-3 transition-all ease-linear duration-200'></span><Link to={'/'}>{item.name}</Link></li>
                            ))
                        }

                    </ul>
                </div>
                <div>
                    <h2 className='text-[22px] mb-6 font-jost font-semibold'>Category</h2>
                    <ul>
                        {
                            categoriesList.map((item,index)=>(
                                <li key={index} className=' text-base group mt-2 font-normal mb-2 text-[#707070] flex items-center gap-x-2'><span className='w-0 h-0.5 bg-[#707070] group-hover:w-3 transition-all ease-linear duration-200'></span><Link to={'/'}>{item.name}</Link></li>
                            ))
                        }

                    </ul>
                </div>
                <div>
                    <h2 className='text-[22px] mb-6 font-jost font-semibold'>Help & Support</h2>
                    <ul>
                        {
                            helpList.map((item,index)=>(
                                <li key={index} className=' text-base group mt-2 font-normal mb-2 text-[#707070] flex items-center gap-x-2'><span className='w-0 h-0.5 bg-secondary group-hover:w-3 transition-all ease-linear duration-200'></span><Link to={'/'}>{item.name}</Link></li>
                            ))
                        }

                    </ul>
                </div>
                <div>
                    <h2 className='text-[22px] mb-6 font-jost font-semibold'>Information</h2>
                    <ul>
                        {
                            informationList.map((item,index)=>(
                                <li key={index} className=' text-base group mt-2 font-normal mb-2 text-[#707070] flex items-center gap-x-2'><span className='w-0 h-0.5 bg-secondary group-hover:w-3 transition-all ease-linear duration-200'></span><Link to={'/'}>{item.name}</Link></li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </Containar>
    </section>
  )
}

export default FooterSecondPart