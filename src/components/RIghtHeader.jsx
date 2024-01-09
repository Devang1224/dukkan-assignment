import React from 'react'
import HelpIcon from "../assets/icons/HelpIcon.svg"
import SearchIcon from "../assets/icons/SearchIcon.svg"
import ChatIcon from "../assets/icons/ChatIcon.svg"
import MenuIcon from "../assets/icons/MenuIcon.svg"




const RightHeader = () => {
  return (
    <div className='px-8 py-3 w-full flex items-center justify-between  font-GalanoGrotesque bg-white border border-[#D9D9D9] border-x-0 border-t-0 border-b-[1px]'>
        <div className="flex items-center gap-4 py-[6px]">
            <p className='text-[20px] font-medium leading-[28px] text-[#1A181E]'>
                Payouts
            </p>
            <div className='flex gap-[6px] items-center'>
                <img src={HelpIcon} alt="?" width={14} height={14}/>
                <p className='text-[12px] leading-4 text-[#4D4D4D]'>How it works</p>
            </div>
        </div>

        <div className="flex py-[9px] px-4 gap-[8px] bg-[#F2F2F2] rounded-[6px] min-w-[400px]">
             <img src={SearchIcon} alt="?" width={16} height={16}/>
             <input type="text" placeholder='Search features, tutorials, etc.' className='bg-[#F2F2F2] outline-none text-[15px] w-[90%] leading-[22px] text-[#808080]'/>
        </div>

        <div className="flex gap-[12px]">
            <div className='p-[10px] rounded-full bg-[#E6E6E6] cursor-pointer'>
              <img src={ChatIcon} alt="chatIcon"/>
            </div>
            <div className='cursor-pointer rounded-full'>
              <img src={MenuIcon} alt="menuIcon" />
            </div>
        </div>
    </div>
  )
}

export default RightHeader