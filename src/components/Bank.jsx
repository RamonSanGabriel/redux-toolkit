import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAmount } from '../redux/selector';
import { deposit, withdraw } from '../redux/balanceSlice';

const Bank = () => {
  const dispatch = useDispatch();
  const amount = useSelector(getAmount);

  const handleBalance = () => {
    dispatch(deposit(10));
  };
  const handleWithdraw = () => {
    dispatch(withdraw(5));
  };
  return (
    <div>
      <p>Bank Initial Amount: {amount}</p>
      <button value={amount} onClick={handleBalance}>
        Deposit 10 credits
      </button>
      <button value={amount} onClick={handleWithdraw}>
        Withdraw 5 credits
      </button>
    </div>
  );
};

export default Bank;
