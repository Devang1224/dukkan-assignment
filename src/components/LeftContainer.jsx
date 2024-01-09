import React from 'react'
import AccountHeader from './AccountHeader'
import NavItems from './NavItems'
import WalletIcon from "../assets/icons/WalletIcon.svg"

const LeftContainer = () => {
  return (
     <div className="h-full w-[15.5%] bg-[#1E2640] py-4 px-[10px] flex flex-col text-[#FFFFFF]">

          <AccountHeader/>
          <NavItems/>


        <div className="py-[6px] px-[12px] bg-[#353C53] flex items-center gap-[12px] rounded-[4px] mt-auto mx-[6px]">
            <div className='p-[6px] bg-[rgb(255,255,255,0.1)] rounded-[4px]'>
              <img src={WalletIcon} alt="walleticon"/>
            </div>
            <div className="text-start">
              <p className='opacity-[0.8] leading-4 text-[13px]'>Available credits</p>
              <p className=" mt-[2px] leading-[24px] font-medium" >222.10</p>
            </div>
        </div>
     </div>
  )
}

export default LeftContainer