
import React from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContextProvider'
import CartItem from '../../components/CartItem'
import { useContext } from 'react'
// Initialization for ES Users
import {
  Ripple,
  initTE,
} from "tw-elements";
import { Link } from 'react-router-dom'

initTE({ Ripple });

const Cart = () => {

  const {cartItems, getTotalCartAmount} = useContext(ShopContext)


  return (
    <div className='h-[100vh] flex flex-col justify-between'>
        <h1 className='text-[3rem] font-bold text-center my-10 '>
            Your Cart Items
        </h1>
        <div className='flex justify-center flex-col items-center'>
          
          {PRODUCTS.map(product => {
            if(cartItems[product.id] !== 0) {
              return <CartItem key={product.id} {...product} />
            }
          })}
        { getTotalCartAmount() > 0 && <div className='flex flex-col g-5 w-[50%] h-[100%] mb-20'>
          <h1 className='text-[2rem] my-5 text-center font-semibold'>Total: {getTotalCartAmount()}$</h1>
          <div className='flex flex-row w-full justify-around'>
          <Link to={'/'}>
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              Shopping
              </button>
            </Link>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Checkout
          </button>
          </div>
        </div>}
        </div>
    </div>
  )
}

export default Cart

// {
//   0: 0,
//   1: 0,
//   2: 0, 
//   3: 2,
//   4: 0,
//   5: 6,
//   ...
//   8: 0;
// }