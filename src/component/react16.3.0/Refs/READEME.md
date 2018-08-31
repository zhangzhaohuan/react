
## 16.3 对ref做了修改，新增了createRef
### ref类型
1. createRef() 创建的 ref 属性

#### ref的值取决于节点的类型:
  * 当 ref 属性被用于一个普通的 HTML 元素时，React.createRef() 将接收底层 DOM 元素作为它的 current 属性以创建 ref 。
  * 当 ref 属性被用于一个自定义类组件时，ref 对象将接收该组件已挂载的实例作为它的 current 。
  * 你不能在函数式组件上使用 ref 属性，因为它们没有实例。但是可以在函数式组件内部使用 ref，只要它指向一个 DOM 元素或者 class 组件
2. 回调 Refs
