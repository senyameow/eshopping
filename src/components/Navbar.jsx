import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import '../index.css'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider'

const Navbar = () => {
  

  const {amountOfItems, setNewValue, cartItems} = useContext(ShopContext)


  useEffect(() => {
    setNewValue(cartItems)
})

  




  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg dark:bg-neutral-600 lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-end px-3 gap-10 mr-5 ">
          
            <Link to={'/'} classNameName='text-[1.4rem] text-neutral-800 focus:text-neutral-700'>
              <p className='hover:text-neutral-800'>Shop</p>
            </Link>
            <Link to={'/cart'} className='hover:text-neutral-700 focus:text-neutral-700 relative'>
                <ShoppingCart size={32} className='z-3'/>
                
            </Link> 
            <div className='w-[18px] h-[18px] absolute bottom-1 lg:bottom-3 rigth-0 bg-red-400 rounded-full z-2 flex justify-center items-center'>
              <p className='text-white text-[.8rem]'>{amountOfItems}</p>
            </div>
          
          
        </div>
      </nav>
  )
}
  

export default Navbar

