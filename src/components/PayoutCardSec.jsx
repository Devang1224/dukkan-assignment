import React from 'react'
import HelpIcon from "../assets/icons/HelpIcon.svg"

const PayoutCardSec = () => {
  return (
    <div className='p-[20px] rounded-[8px] shadow-primary h-[118px] flex flex-1 flex-col gap-[16px]'>
    <div className="flex gap-[8px] ">
              <p className='text-[#4D4D4D] leading-[24px]'>Amount Pending</p>
              <img src={HelpIcon} alt="" />
    </div>
    <div className="font-GalanoGrotesque flex items-center">
        <p className='leading-[38px] text-[38px] text-[#1A181E] font-medium'>₹23,92,312.19</p>
     </div>
  </div>
  )
}

export default PayoutCardSec