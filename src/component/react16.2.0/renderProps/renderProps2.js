import React, { Component } from 'react';
import Father from './Father';
import Son from './Son';

export default class Box extends Component {
  componentDidMount(){
    console.log('box did');
  }
  render() {
    console.log('redner box');
    return (
      <div style={{ height: '100%' }}>
        <Father children={(address) => (
          <Son address={address} />
        )} />
      </div>
    )
  }
}
