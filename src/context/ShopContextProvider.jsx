// что это такое и зачем нам какой-то контекст? 
// идея в том, что мы будем нажимать на кнопки и добавлять в корзину вещи на одной странице, но нам надо будет отображать наши телодвижения на другой
// чтобы это воплотить нам нужно сделать контекст, который мы сможем получать в других компонентах и страницах (useContext)
// для того, чтобы организовать хранилище и весь этот контекст в одно месте, мы создаем этот фолдер и сюда все кидаем



import React, { useState } from 'react'
import { createContext } from 'react'
import { PRODUCTS } from '../products'


export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let i = 0; i < PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart
}

// микро хелпыч функция, но она позволит нам просто добавлять в базу данных продукт, и все он у нас есть в контексте!
// если без этого и забыли добавить его в стейт, все гг - отображаться будет, как продукт, но, когда мы его будем добавялть, т.к. его не будет в контексте, мы не сможем его увидеть на других страницах =(





  

   // наш стейт-хранилище; сюда поместим объект, в котором свойства - это айди продуктов, к примеру 
  // {
  //   1: 0,
  //   2: 0,
  //   3: 0,
  //   ... etc

  //   и, когда будем добавлять продукт, будет изменяться значение свойства этого продукта
  // }

  //но в этом есть трабл... если мы захотим добавить новый продукт (в базе данных - products.js), нам придется вручную его добавлять сюда (в объект)
  // поэтому мы сделаем функцию, которая сможем возвращать начальное значение объекта в зависимости от массива продуктов



  const ShopContextProvider = ({children}) => {

  const [cartItems, setCartItems] = useState(getDefaultCart())

  const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);
  const [amountOfItems, setAmountOfItems] = useState(sumValues(cartItems));
  // это для коляски))
  
  const setNewValue = () => setAmountOfItems(sumValues(cartItems))

  // console.log(cartItems)

  // теперь думаем, а что мы хотим делать с нашим объектом? 
  // 1. явно хотим добавлять туда элементы - создаем функцию, которая будет это делать!
  
  const addItem = (id, amount) => {
    setCartItems(prev => ({...prev, [id]: prev[id] + amount}))
  } 

  //a little bit complicated but.. it's ok 
  // 2. удаляем

  const removeItem = id => {
    setCartItems(prev => ({...prev, [id]: prev[id] - 1}))
  } 

  const removeAllItems = id => {
    setCartItems(prev => ({...prev, [id]: prev[id] = 0}))
  }

  //нам также нужна функция, котоаря будет подсчитывать тотал прайс (добавить в коляску)

  //как сделать эту функцию?
  //можно пройтись по всему объекту cartItems (for), посмотреть, где свойства > 0 и умножить количество на их цену

  const getTotalCartAmount = () => {
    let total = 0;
    for (const key in cartItems) {
      if (PRODUCTS[key].sale !== null) {
        total += cartItems[key] * PRODUCTS[key].sale
      } else {
        total += cartItems[key] * PRODUCTS[key].price
      }
        
      }
    return total
  }

  // const checkOut = () => {
  //   let audio = new Audio('buy_1.mp3')
  //   audio.play()
  // }

  

  //теперь надо как-то передать в провайдер, все что мы хотим получать - как?
  //провайдер требует value, который принимает объект, из которого мы будем забирать все, что нам надо!
  // создадим этот объект и засунем его в value

  //таааак, а что пихаем, ну нам надо получать cartItems, т.к. в нем инфа, о том сколько у нас продуктов, также нам нужны наши функции, чтобы их юзать на других страницах

  const contextValue = {
    cartItems,
    addItem,
    removeItem,
    amountOfItems,
    setAmountOfItems,
    setNewValue,
    sumValues,
    removeAllItems,
    getTotalCartAmount,
    // checkOut
    

    

  }

  //после того как передали в провайдер все, что надо, идем туда, где хотим это заюзать (например в Product, т.к. там есть кнопка add) и мы сможем нажимать ее, и контекст будет меняться везде!! УРА!! 
  // не забыть еще обернуть в наш провайдер все

  return (
    <ShopContext.Provider value={contextValue}>
        {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider