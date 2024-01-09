import React from 'react'
import ChevronRightBlue from "../assets/icons/ChevronRightBlue.svg"
import HelpIcon from "../assets/icons/HelpIcon.svg"

const PayoutCardOne = () => {
  return (
    <div className='p-[20px] rounded-[8px] shadow-primary h-[118px] flex  flex-1 flex-col gap-[16px]'>
      <div className="flex gap-[8px] ">
                <p className='text-[#4D4D4D] leading-[24px]'>Amount Pending</p>
                <img src={HelpIcon} alt="" />
      </div>
      <div className="font-GalanoGrotesque  flex justify-between items-center">
                <p className='leading-[38px] text-[38px] text-[#1A181E] font-medium'>₹2,312.23</p>
                <p className='flex items-center'>
                    <a href='#' className='underline leading-[24px] font-medium text-[#146EB4] '>13 orders</a>
                    <img src={ChevronRightBlue}/>
                </p>
       </div>
    </div>
  )
}

export default PayoutCardOne