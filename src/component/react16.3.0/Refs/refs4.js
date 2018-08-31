/**
 * 父元素拿到子元素的dom
 * 
 * Parent 传递给它的 ref 回调函数作为 inputRef 传递给 Child;
 * 然后 Child 通过 ref属性将其传递给 <input>;
 * 最终，Parent 中的 this.inputElement 将被设置为与 Child 中的 <input> 元素相对应的 DOM 节点.
 */
import React from 'react';

 class Child extends  React.Component {
   constructor(){
     super();
   }
  render() {
    return (
      <div>
          <p>CHILD REF</p>
         <input ref={this.props.inputRef} />
      </div>
    )
  }
}

class Parent extends React.Component {
  constructor(){
    super();
    this.inputElement = null;
  }

  componentDidMount(){
    this.inputElement.focus();
  }

  render() {
    return (
      <Child
        inputRef={el => this.inputElement = el}
      />
    );
  }
}

export default Parent;