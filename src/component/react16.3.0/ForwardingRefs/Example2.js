/**
 * Forwarding refs
 * 通过React16.3中的Forwarding refs可以使得在父组件中可以得到子组件中的dom节点。
 */

import React from 'react'

//React.forwardRef 传入一个函数返回一个组件
const Child = React.forwardRef((props, ref) => (
  <input ref={ref} />
));

//以下写法是错误的error
// export default class Child extends  React.forwardRef {
//   render() {
//     return (
//       <div>
//         Child
//       </div>
//     )
//   }
// }


export default class Father extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.myRef.current);
  }
  render() {
    return <Child ref={this.myRef} />
  }
}