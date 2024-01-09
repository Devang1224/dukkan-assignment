import React from 'react'
import userImage from "../assets/images/userImage.png"
import downArrow from "../assets/icons/Chevron Down.svg"

const AccountHeader = () => {
  return (
    <div className="flex gap-[12px] items-center px-[5px]">
    <div>
      <img src={userImage} className='object-cover rounded-[4px] w-[39px] h-[39px]' alt="UserImage"/>
    </div>
    <div className="flex flex-col gap-[4px] w-[108px]">
      <p className='text-[15px] leading-[22px] font-medium'>Nishyan</p>
      <a href="#">
        <p className='underline decoration-solid text-[13px] leading-[16px] opacity-[0.8]'>Visit store</p>
     </a>
    </div>
    <div className='cursor-pointer'>
      <img src={downArrow} className='' alt=""/>
    </div>
 </div>
  )
}

export default AccountHeader