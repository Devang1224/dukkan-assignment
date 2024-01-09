import React from 'react'
import RightHeader from './RIghtHeader'
import Overview from './Overview'
import Transactions from './Transactions'


const RightContainer = () => {
  return (
    <div className='h-full w-[85.5%] bg-[#FAFAFA] overflow-auto'>
      <RightHeader/>
      <div className="w-full p-8 flex flex-col gap-8 ">
        <Overview/>
        <Transactions/>
      </div>
    </div>
  )
}

export default RightContainer