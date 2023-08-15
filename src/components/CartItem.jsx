import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContextProvider'


const CartItem = ({id, productName, price, productImage, sale}) => {

    const { removeAllItems, getAmountOfItem, countItem, cartItems, addItem, removeItem, setAmountOfItems, sumValues, setNewValue } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

    

  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img class="p-8 rounded-t-lg" src={productImage} alt="product image" />
    <div class="px-5 pb-5">
        <p>
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
        </p>
        <div class="flex items-center justify-between">
            {sale ? <span class="text-3xl font-bold text-gray-900 dark:text-white">{sale}$</span> : 
            <span class="text-3xl font-bold text-gray-900 dark:text-white">{price}$</span>}
            <div className='flex flex-row items-center justify-center gap-4'>
            <button
                onClick={() => {
                    setAmountOfItems(sumValues(cartItems)-1)
                    removeItem(id)
                    
                    
                }}
                className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 12H4"
          />
        </svg>
      </button>
                <h3 className='text-[2rem] text-slate-500'>{cartItemAmount}</h3>

                <button
        onClick={() => {
            setAmountOfItems(sumValues(cartItems)+1)
            addItem(id, 1)
            
        }}
        className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
            </div>
            <button onClick={() => {
                
                removeAllItems(id)
                setAmountOfItems(sumValues(cartItems) - cartItems[id])

            }} class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">remove all</button>
        </div>
    </div>
</div>
  )
}

export default CartItem