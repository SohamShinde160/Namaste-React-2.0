import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Itemlist from './Itemlist';
import { clearCart } from '../utilis/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);

    const disptach = useDispatch()

    const handleclearCart = () => {
        disptach(clearCart())
    }
  return (
      <div className='text-center m-10 p-10'>
          <h1 className='text-2xl font-bold'>Cart</h1>
          <div className='w-6/12 m-auto'>
              <button className='p-2 m-2 bg-green-600 text-white rounded-lg' onClick={handleclearCart}>Empty Cart</button>
              {cartItems.length === 0  && (<h1>Cart is empty now . Add Items to Cart</h1>)}
              <Itemlist items={cartItems}/>
          </div>
    </div>
  )
}

export default Cart