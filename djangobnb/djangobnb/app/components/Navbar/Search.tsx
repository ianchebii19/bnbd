import React from 'react'
import { IoIosSearch } from "react-icons/io";
const Search = () => {
  return (
    <div className="h-[48px] flex flex-row items-center justify-between border border-gray-300 rounded-full px-2">
      <div className=" border-r-2 px-2 font-medium hover:bg-gray-300 bo">Destination</div>
      <div className="border-r-2 px-2 font-medium">Check in</div>
      <div className="border-r-2 px-2  font-medium">Check out</div>
      <div className='text-3xl p-2 rounded-full bg-green-300'> <span className=''>< IoIosSearch /></span></div>
    </div>
  )
}

export default Search
