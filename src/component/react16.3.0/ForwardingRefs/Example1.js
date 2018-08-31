import React from 'react'
class Child extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <input />
  }
}

 export default class Father extends React.Component{
  constructor(props){
    super(props);
    this.myRef=React.createRef();
  }
  componentDidMount(){
    console.log(this.myRef.current);  //ref指向了child组件，并不是内部的dom(在Example2.js做一下改造)
  }
  render(){
    return <Child ref={this.myRef}/>
  }
}