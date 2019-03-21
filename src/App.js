import React, { Component } from 'react';
import RenderProps from './component/react16.2.0/renderProps/renderProps';//render prop
import LifeCycle from './component/react16.3.0/lifecycle';//lifecycle
import Refs from './component/react16.3.0/Refs/refs4';
import ForwardingRefs from './component/react16.3.0/ForwardingRefs/Example4';
import Optimizing from './component/api/optimizing-performance/Purecomponent';
import Hoc from './component/api/hoc';


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <RenderProps /> */}
        {/* <MouseTracker /> */}
        <LifeCycle />
        {/* <Refs /> */}
        {/* <ForwardingRefs></ForwardingRefs> */}
        {/* <Optimizing /> */}
        {/* <Hoc /> */}
      </div>
    )
  }
}
