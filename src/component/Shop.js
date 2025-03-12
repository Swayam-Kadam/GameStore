import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state/index';


const Shop = ({price,qty,onUpdateQty}) => {


  var num =()=>{
    onUpdateQty(qty + 1);
    withdrawMoney(price)
  }

  var num1 =()=>{
    onUpdateQty(qty - 1);
    depositeMoney(price)
  }

  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)
  const {withdrawMoney, depositeMoney} = bindActionCreators(actionCreators,dispatch);
  return (
    <div>
      <button className="btn btn-primary mx-2" onClick={num1} disabled={ balance >= 10000 || qty <= 0}>-</button>
      Add To Cart ({balance})
      <button className="btn btn-primary mx-2" onClick={num} disabled={ balance < price}>+</button>
    </div>
  )
}

export default Shop
