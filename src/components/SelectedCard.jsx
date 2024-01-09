import React from 'react'
import HelpIconLight from "../assets/icons/HelpIconLight.svg"
import ChevronRight from "../assets/icons/ChevronRIght.svg"

const SelectedCard = () => {
  return (
    <div className='rounded-[8px] bg-[#146EB4] w-[370px]'> 
         <div className="p-[20px] flex flex-col gap-[16px]">
            <div className="flex gap-[8px] ">
                <p className='text-white leading-[24px]'>Next Payout</p>
                <img src={HelpIconLight} alt="" />
            </div>
            <div className="font-GalanoGrotesque text-white flex justify-between items-center">
                <p className='leading-[38px] text-[38px] font-medium'>₹2,312.23</p>
                <p className='flex'>
                    <a href='#' className='underline leading-[24px] font-medium '>23 orders</a>
                    <img src={ChevronRight}/>
                </p>
            </div>
         </div>
         <div className="flex px-[24px] py-[8px] rounded-[8px] font-GalanoGrotesque bg-[#0E4F82] justify-between text-[14px] text-[#F2F2F2] leading-[20px]">
            <p >Next payout date:</p>
            <p className='font-medium'>Today,04:00PM</p>
         </div>
    </div> 
  )
}

export default SelectedCard