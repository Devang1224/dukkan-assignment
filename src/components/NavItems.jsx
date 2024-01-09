import React from 'react'
import { navItemsData } from '../dummy-data/navItemsData'

const NavItems = () => {
  

  return (
    <div className='my-[24px]'>
       {
        navItemsData.map((item,index)=>{
            return(
                <div className="flex px-4 py-2 rounded-[4px] gap-[12px] mb-[4px] group hover:bg-[rgb(255,255,255,0.1)] " key={index} >
                    <img src={item.icon} alt={item.text+' icon'} />
                    <p className='text-[14px] font-medium leading-[20px] opacity-[0.8] group-hover:opacity-[1]'>{item.text}</p>
                </div>
            )
        })
       }
    </div>
  )
}

export default NavItems