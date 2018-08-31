/**
 * render prop 
 * 解释：A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
 */
import React from 'react';
class Cat extends React.Component {
  render() {
    console.log('cat');
    const mouse = this.props.mouse;
    return (
      <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    console.log('mouse');
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <p>123</p>
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.children(this.state)}
      </div>
    );
  }
}

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        {/* 函数的名字可以任意，甚至可以无名字。*/}
        {/* 当写法二时，函数无名字，触发时必须为children()。  */}
        {/* 写法一 */}
        <Mouse children={mouse => (
          <Cat mouse={mouse} />
        )} />

        {/* 写法二 */}
        {/* <Mouse>
          {mouse => (
            <Cat mouse={mouse} />
          )}
        </Mouse> */}
      </div>
    );
  }
}