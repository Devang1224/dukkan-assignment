import React from 'react'
import downArrow from "../assets/icons/SelectArrowIcon.svg"
import SelectedCard from './SelectedCard'
import PayoutCard from './PayoutCardOne'
import PayoutCardSec from './PayoutCardSec'

const Overview = () => {
  return (
    <div className="flex flex-col gap-[24px]">
        <div className="flex justify-between items-center font-GalanoGrotesque">
           <p className='text-[20px] font-medium leading-[28px] text-[#1A181E]'>Overview</p>
           <button className=' px-[13px] py-[5px] leading-[24px] text-[#4D4D4D] flex items-center gap-[9px] bg-white rounded-[4px] border border-[#D9D9D9] '>
             <span>This Month</span> 
             <span><img src={downArrow} width={16} height={16}/></span>
          </button>
        </div>

        <div className="flex gap-[20px]">
          <SelectedCard/>
          <PayoutCard/>
          <PayoutCardSec/>
        </div>

    </div>
  )
}

export default Overview