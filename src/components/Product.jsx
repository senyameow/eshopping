import React, { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider'

const Product = ({id, productName, price, productImage, sale}) => {

    const { addItem, cartItems, setNewValue } = useContext(ShopContext) // тут просто с помощью юзконтекста "забираем" контекст, который нам нужен здесь

    const [countItem, setCountItem] = useState(0)

    const cartItemAmount = cartItems[id]

  return (
    <div key={id} className="w-80 bg-white shadow rounded">
        <div className="h-48 w-full bg-gray-200 flex flex-col justify-center p-4 bg-cover bg-center mx-auto items-center">
            <img className='max-w-[65%] h-auto' src={productImage} alt="" />
            <div className="flex justify-between">
      
    </div>
  </div>
  <div className="p-4 flex flex-col items-center">
    <h1 className="text-gray-800 text-center mt-1">{productName}</h1>
    {sale ==null ?
    <p className="text-center text-gray-800 mt-1">{price}$</p> 
    :
    <div>
        <p className="text-center text-gray-800 mt-1 inline line-through">{price}$</p>
        <span className="text-center text-red-500 mt-1 ml-3 inline text-[1.2rem] font-semibold">{sale}$</span>
    </div>

    }
    <div className="inline-flex items-center mt-2">
      {countItem > 0 ? <button
        onClick={() => setCountItem(countItem - 1)}
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
      </button> : 
        <button
        disabled
        className="cursor-not-allowed bg-white rounded-l border text-gray-600 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
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
      }
      <div
        className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none"
      >
        {countItem}
      </div>
      <button
        onClick={() => setCountItem(countItem + 1)}
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

    <button
    
    onClick={() => {
        
        
        addItem(id, countItem)
        setCountItem(0)
        setNewValue()
        
    }}
      className={`${countItem === 0 ? 'cursor-not-allowed bg-gray-300 hover:bg-gray-300 active:bg-gray-300' : ''} py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center`}
    >
      Add to cart
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
        
                </svg>

                {cartItemAmount > 0 && <h3 className='text-white pl-1'>({cartItemAmount})</h3>}
            </button>
        </div>
    </div>
  )
}

export default Product