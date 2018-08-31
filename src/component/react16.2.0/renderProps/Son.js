import React, { Component } from 'react'

export default class Son extends Component {
  componentDidMount(){
    console.log('son did');
  }
  render() {
    console.log('render son');

    return (
      <div className='son'>
        {
          this.props.address
        }
        Son
      </div>
    )
  }
}
