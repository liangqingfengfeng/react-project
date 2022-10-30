import React, { PureComponent } from "react";
import './index.less'

// 装饰器为,组件添加age属性
function addAge(Target: Function) {
  Target.prototype.age = 111
}

// 使用装饰器
@addAge
class TestClass extends PureComponent {

  age?: number

  render() {
    return (
      <h2>我是类组件---{this.age}</h2>
    )
  }
}

export default TestClass