/**
 * HOC（高阶组件）中的Forwarding Refs
 * 
 */
import React from 'react'

function createComponent(Component) {
  class CreatedComponent extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;

      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // Note the second param "ref" provided by React.forwardRef.
  // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
  // And it can then be attached to the Component.
  return React.forwardRef((props, ref) => {
    return <CreatedComponent {...props} forwardedRef={ref} />;
  });
}

class Child extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <input />
  }
}

const CreatedChild = createComponent(Child);

export default class Father extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.myRef.current);
  }
  render() {
    return <CreatedChild ref={this.myRef} />
  }
}


