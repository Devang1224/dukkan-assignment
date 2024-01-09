import React from 'react'
import OrdersList from './OrdersList'

const Transactions = () => {
  return (
    <div className='flex flex-col gap-[24px]'>
        <div className='flex flex-col gap-[24px]'>
          <p className='font-GalanoGrotesque leading-[28px] font-medium text-[20px] text-[#1A181E]'>Transactions | This Month</p>
          <div className="flex gap-[12px]">
              <button className='py-[6px] px-[16px] bg-[#E6E6E6] text-[#808080] leading-[20px] text-[14px] font-medium rounded-[40px]'>Payouts (22)</button>
              <button className='py-[6px] px-[16px] bg-[#146EB4] text-white leading-[20px] text-[14px] font-medium rounded-[40px]'>Refunds (6)</button>
          </div>
        </div>
        
        <OrdersList/>

    </div>
  )
}

export default Transactions