import React, { Component } from 'react'

export default class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: 'china'
    }
  }
  componentDidMount(){
    console.log('father did');
    // this.setState({
    //   address:'usa'
    // })
  }
  render() {
    console.log('render father');
    return (
      <div className='father'>
        {
          this.props.children(this.state.address)
        }
      </div>
    )
  }
}
