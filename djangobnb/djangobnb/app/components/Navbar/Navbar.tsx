import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Search from './Search'
import Usernav from './Usernav'

import Yourhome from './Yourhome'

const Navbar = () => {
  return (
    <nav className="w-full top-0 left-0 py-2 border-b bg-white z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="#">
            <Image
              src="/ho.png"
              alt="logo"
              width={100}
              height={88}
            />
          </Link>
          <div className='hidden sm:block ' >
          <div className="flex justify-center space-x-6">
    <Search/>
  </div>
          </div>

        <div  className="  flex item-center space-x-6 p-2  border border-gray-300 rounded-full">
          <div>
          <Yourhome/>
          </div>
          <div>
          <Usernav/>
          </div>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
