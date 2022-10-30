import React from "react";
import { useAppSelector, useAppDispatch } from '@/store'
import { decrement, increment } from '@/model/home';
import { Link } from "react-router-dom";

import './index.less'

function Home() {

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch();

  return (<div>
    <h3>我是Home组件</h3>
    <button onClick={() => dispatch(increment())}>Increment value</button>
    {count}
    <button onClick={() => dispatch(decrement())}>Decrement value</button>

    <div><Link to="/about">to About</Link></div>
  </div>)
}
export default Home