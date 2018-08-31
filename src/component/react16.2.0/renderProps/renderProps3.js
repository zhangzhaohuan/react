/**
 * using Render Props with React.PureComponent
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

class Mouse extends React.PureComponent {
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
  constructor(props){
    super(props);
    this.renderTheCat = this.renderTheCat.bind(this);
  }
  renderTheCat(mouse) {
    return <Cat mouse={mouse} />;
  }


  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse children={this.renderTheCat} />
      </div>
    );
  }
}