
/**
* react16.3后生命周期 unmounting阶段
* componentWillUnmount的触方式
1. 组件在父组件中被移除了
2. 组件中设置了 key 属性，父组件在 render 的过程中，发现 key 值和上一次不一致，那么这个组件就会被干掉。
*/
import { Button } from 'antd';
import React, { Component } from 'react';

export default class Father extends Component {
  constructor(props) {
    console.log('Father constructor');
    super(props);
    this.state = {
      count: 1,
      key: 1,
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeKey = this.changeKey.bind(this);

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Father getDerivedStateFromProps');
    return {
      count: prevState.count * 2,
    };
  }

  componentDidMount() {
    console.log('father didmount');
  }

  handleClick() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))
  }

  changeKey(){
    this.setState((prevState, props)=>({
      key:prevState.key + 1
    }))
  }

  render() {
    console.log('father render');
    return (
      <div style={{ border: "1px solid blue" }}>
        {
          <span onClick={this.changeKey}
            style={{ display: "inline-block", padding: "3px 5px", color: "#ffffff", background: "green", borderRadius: "3px", cursor: "pointer" }}
          >方式二：changeKey</span>
        }
        {
          this.state.count <= 2 && <Child key={this.state.key} count={this.state.count} handleClick={this.handleClick} />
        }

      </div>
    )
  }
}
class Child extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      count: 10,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    console.log(nextProps);
    console.log(prevState);
    return {
      count: nextProps.count * 2,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    console.log(prevProps);
    console.log(prevState);
    return 'aa';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('child render');
    return (
      <div style={{ margin: "15px", border: "1px solid red" }}>
        子元素:
        <br />
        父组件属性count值: {this.props.count}
        <br />
        子组件属性count值: {this.state.count}
        <br />
        <span onClick={() => this.props.handleClick()}
          style={{ display: "inline-block", padding: "3px 5px", color: "#ffffff", background: "green", borderRadius: "3px", cursor: "pointer" }}
        >方式一：click me</span>
      </div>
    )
  }
}
