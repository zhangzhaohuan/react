import React, { Component } from 'react'
import { wrapComponent } from './hoc';
import Wrapped from './wrapped';

const Demo = wrapComponent(Wrapped, (data, id) => data[id]);

export default class componentName extends Component {
  state = {
    title: 'test'
  }

  change = () => {
    this.setState({
      title: 'changed'
    })
  }
  render() {
    return (
      <div>
        <Demo title={this.state.title} />
        <button onClick={this.change}>点击切换</button>
      </div>
    )
  }
}
