import React from 'react'
import Image from 'next/image'

const Menu = () => {
  return (
    <div className='max-w-[1500px] mx-auto px-6 mt-4 cursor-pointer'>
      <div className="flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:opacity-100">
        <Image
          src="/ho.png"
          height={40}
          width={40}
          alt="Menu"
          className="rounded-full"
        />
        <p>Lake</p>
      </div>
      <div className="flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:opacity-100">
        <Image
          src="/ho.png"
          height={40}
          width={40}
          alt="Menu"
          className="rounded-full"
        />
        <p>Lake</p>
      </div><div className="flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:opacity-100">
        <Image
          src="/ho.png"
          height={40}
          width={40}
          alt="Menu"
          className="rounded-full"
        />
        <p>Lake</p>
      </div><div className="flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:opacity-100">
        <Image
          src="/ho.png"
          height={40}
          width={40}
          alt="Menu"
          className="rounded-full"
        />
        <p>Lake</p>
      </div>
      <div className="flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:opacity-100">
        <Image
          src="/ho.png"
          height={40}
          width={40}
          alt="Menu"
          className="rounded-full"
        />
        <p>Lake</p>
      </div>
    </div>
  )
}

export default Menu
