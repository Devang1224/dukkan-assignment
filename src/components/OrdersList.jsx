import React from 'react'
import SearchIcon from "../assets/icons/SearchIcon.svg"
import SortIcon from "../assets/icons/SortIcon.svg"
import DownloadIcon from "../assets/icons/DownloadIcon.svg"
import {OrdersData} from "../dummy-data/OrdersData"


const OrdersList = () => {
  return (
    <div className='px-[12px] pt-[12px] pb-[8px] flex flex-col gap-[12px] shadow-primary bg-white'>
         <div className="flex items-center justify-between">
            <div className="px-3 py-[9px] flex gap-[8px] border border-[#D9D9D9] rounded-[4px] max-w-[248px]">
                <img src={SearchIcon} width={14} height={14} className='cursor-pointer'/>
                <input type="text" placeholder='Order ID or transaction ID' className=' text-[14px] text-[#999] leading-[24px] font-GalanoGrotesque w-[90%] outline-none'/>
            </div>
            <div className='flex gap-4'>
                <button className='flex items-center gap-[6px] border border-[#D9D9D9] rounded-[4px]  px-[11px] py-[5px]'>
                    <p className='leading-[24px] text-[#4D4D4D] '>Sort</p>
                    <img src={SortIcon}/>
                </button>
                <button className='p-[7px] border border-[#D9D9D9] rounded-[4px]'>
                 <img src={DownloadIcon}/>
                </button>
            </div>
         </div>

        <div>
            <div className="flex bg-[#F2F2F2] rounded-[4px] py-[10px] px-[12px] font-GalanoGrotesque text-[14px] leading-[20px] font-medium justify-between text-[#4D4D4D]">
                <p className='w-[150px]'>Order ID</p>
                <p className='w-[150px]'>Status</p>
                <p className='w-[150px]'>Transaction ID</p>
                <p className='w-[150px]'>Refund date</p>
                <p className='w-[150px] text-end'>Order amount</p>
            </div>
            {
               OrdersData.map((item)=>{
                return(
                    <div className="pt-[14px] px-[12px] pb-[13px] flex justify-between text-[14px] leading-[20px] font-GalanoGrotesque border border-b border-x-0 border-t-0 last:border-b-0" key={item.id}>
                        <p className='w-[150px] text-start text-[#146EB4]  font-medium' >{item.id}</p>
                        <p className='w-[150px] text-start flex gap-[6px] items-center font-Inter text-[#1A181E]'>
                            <p className={`w-[10px] h-[10px] rounded-full bg-[#17B31B] ${item.status==="Processing" &&'bg-[#999]'} `}></p>
                            {item.status}
                        </p>
                        <p className='w-[150px] text-start text-[#4D4D4D]'>{item.transId}</p>
                        <p className='w-[150px] text-start text-nowrap text-[#4D4D4D]'>{item.refundDate}</p>
                        <p className='w-[150px] text-end text-[#1A181E]'>{item.amount}</p>
                    </div>
                )
               })
            }
        </div>

    </div>
  )
}

export default OrdersList