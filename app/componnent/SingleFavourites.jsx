import React from 'react'
import items from "../../public/checkem.png";
import Image from 'next/image';
Image

export default function SingleFavourites() {
  return (
    <div className='border p-2 rounded-sm grid grid-rows-2'>
        <div className='w-full -z-10'>
            <Image className='w-full' src={items}/>
        </div>
        <div className='w-full pt-3'>
            <h3 className='pCl text-2xl font-semibold'>Marg Mundary</h3>
            <p className='line-clamp-3 pt-3 lg:line-clamp-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem velit quibusdam laborum, accusantium libero deleniti?</p>
        </div>
    </div>
  )
}
