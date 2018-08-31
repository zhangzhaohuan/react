import React from 'react';
import logProps from './LogProps';

class FancyButton extends React.Component {
  focus() {
    
  }
  render() {
    return (
      <div>
        <input type="text" onClick={this.focus} />
      </div>
    )
  }
  // ...
}

// Rather than exporting FancyButton, we export LogProps.
// It will render a FancyButton though.
export default logProps(FancyButton);