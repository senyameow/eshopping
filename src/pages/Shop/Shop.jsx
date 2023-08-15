import React from 'react'
import '../../index.css'
import { PRODUCTS } from '../../products'
import Product from '../../components/Product'

const Shop = () => {
  return (
    <div className=''>
        <h1 className='text-[3rem] font-bold text-center my-10'>
            Senyameow's shop
        </h1>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
            {PRODUCTS.map(product => (
                <Product {...product} />
            ))}
        </div>

        
    </div>
  )
}

export default Shop