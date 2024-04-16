import React, { useEffect } from 'react'
import { products } from '../../data/Data'
import { current } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal, removeItem, updateQuantity } from '../../redux/CartSlice'

const Cart = () => {
  const dispatch=useDispatch()
  const increaseQty=(cartProductid,currentQty)=>{

    const newQty= currentQty +1;
    dispatch(updateQuantity({id: cartProductid,quantity: newQty}));

  }
  const decreaseQty=(cartProductid,currentQty)=>{

    const newQty= Math.max( currentQty -1,1);
    dispatch(updateQuantity({id: cartProductid,quantity: newQty}));

  };
  const{
    data: cartProducts,
    totalAmounts,
    delivercharges,
  }= useSelector((state)=> state.cart);

  useEffect(()=>{
    dispatch(getCartTotal);
  },[useSelector((state)=> state.cart)]);
  const handleremoveItem = (itemId)=>{
    dispatch(removeItem({id: itemId}))
  }
  return (
    <>
    <div className='container-fluid'>
      <div className='row px-xl-5'>
        <div className='col-lg-8 table-responsive mb-5'>
          <table className='table table-light table-borderless text-xenter mb-0'>
            <thead className='thead-dark'>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quality</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                cartProducts.map((val,index)=>(
                  <tr>
                    <td className='align-middle'>
                      <img src={val.product_img}
                       alt='img' style={{width:"50px"}} />
                      {val.product_name}
                    </td>
                    <td className='align-middle'>{val.price}</td>
                    <td className='align-middle'>
                      <div className='input-group quantity mx-auto'>
                        <div className='input-group-btn'>
                          <button className='btn btn-sm btn-primary btn-minus' type='button'
                          onClick={()=> decreaseQty(val.id, val.quantity)}>
                            <i className='fa fa-minus'></i>
                            
                            </button>
                            </div>
                            <input type='text' name='text' value={val.quantity || 1} className='forrm-control form-control-sm bg-secondary border-0 text-center'  />
                            <div className='input-group-btn'>
                          <button className='btn btn-sm btn-primary btn-plus' type='button'
                          onClick={()=> increaseQty(val.id, val.quantity)}>
                            <i className='fa fa-plus'></i>
                            
                            </button>
                            </div>
                      </div>
                    </td>
                    <td className='align-middle'>{val.totalPrice}</td>
                    <td className='align-middle'>
                      
                    <button type='button' className='btn btn-sm btn-danger' onClick={()=> handleremoveItem(val.id)}>
                      <i className='fa fa-times'></i>
                    </button>
                    </td>
                  </tr>

                ))
              }
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Cart
