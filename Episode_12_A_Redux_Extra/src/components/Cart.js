import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesItemList from './CategoriesItemList';
import { clearCart, removeItem } from '../utils/cartReduxStoreSlice';

const Cart = () => {
  
  //only subscribe the specific portion of store
  const cartItems = useSelector((store)=> store.cart.items);
  
  const dispatch = useDispatch();
  const HandleClearCart = () => {
      //dispacth an action
      dispatch(clearCart());
  }

  const HandleRemoveItem = () =>{
    // console.log("Remove Item");
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className='text-3xl font-bold'>Cart</h1>

      <div className='w-6/12 m-auto' >
      <button className='p-2 m-2 bg-black text-white rounded-lg'
       onClick={HandleClearCart}>
        Clear Cart
      </button>
      <button className='p-2 m-2 bg-orange-300 text-black rounded-lg'
       onClick={(cartItems)=>HandleRemoveItem(cartItems)}>
        Remove Item
      </button>
        {cartItems.length === 0 ? <h1>Cart is Empty & Add Items to the Cart!</h1> : ''}
        <CategoriesItemList items={cartItems} />
      </div>
    </div>
  )
}


export default Cart;


