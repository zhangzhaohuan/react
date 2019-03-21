import React, { Component } from 'react'

export default class componentName extends Component {
  
  render() {
    console.log(this.props);
    
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}
