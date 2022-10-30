import React from "react";
import { useAppSelector } from '@/store'
import './index.less'

function About() {
  const count = useAppSelector((state) => state.counter.value)

  return (
    <div>
      <h3>我是About组件</h3>
      count: {count}
    </div>
  )
}
export default About