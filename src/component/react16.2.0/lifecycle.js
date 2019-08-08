
/**
* react16.3前生命周期
* 简书：https://www.jianshu.com/p/ae26190657ca
*/
import React, { Component } from 'react';

export default class Father extends Component {
  constructor(props) {
    console.log('Father constructor');
    super(props);
    this.state = {
      count: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    console.log('Father componentWillMount');
  }

  componentDidMount() {
    console.log('Father componentDidMount');
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('Father componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Father shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Father componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Father componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Father componentWillUnmount');
  }

  handleClick() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    console.log('Father render')
    return (
      <div style={{ border: "1px solid blue" }}>
        <Child count={this.state.count} handleClick={this.handleClick} />
      </div>
    )
  }
}
class Child extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <div style={{ margin: "15px", border: "1px solid red" }}>
        子元素:
        <br />
        父组件属性count值: {this.props.count}
        <br />
        <span onClick={() => this.props.handleClick()}
          style={{ display: "inline-block", padding: "3px 5px", color: "#ffffff", background: "green", borderRadius: "3px", cursor: "pointer" }}
        >click me</span>
      </div>
    )
  }
}
