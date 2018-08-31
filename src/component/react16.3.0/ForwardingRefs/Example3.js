/**
 * HOC（高阶组件）中的Forwarding Refs
 * 
 */
import React from 'react'

function createComponent(WrappedComponent) {
  class CreatedComponent extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return CreatedComponent;
}

class Child extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <input />
  }
}


const CreatedChild=createComponent(Child);

export default class Father extends React.Component{
  constructor(props){
    super(props);
    this.myRef=React.createRef();
  }
  componentDidMount(){
    console.log(this.myRef.current);   //输出的是CreatedComponent而不是Child，父组件的myRef指向的是HOC生成的组件
  }
  render(){
    return <CreatedChild ref={this.myRef}/>
  }
}


//如果我们想要父组件中的myRef指向HOC的原始组件，那么需要改写HOC的构造函数：Example4.js