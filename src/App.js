import React, { Component } from 'react';
// import RenderProps from './component/react16.2.0/renderProps/renderProps';//render prop
import LifeCycle from './component/react16.3.0/Lifecycle/lifecycle';//lifecycle
import LifeCycleUnmounting from './component/react16.3.0/Lifecycle/unmount';//lifecycle-unmounting
import Refs from './component/react16.3.0/Refs/refs4';
import ForwardingRefs from './component/react16.3.0/ForwardingRefs/Example4';
// import LifeCycle from './component/react16.2.0/lifecycle';//lifecycle
import Context from './component/react16.4.0/Context/context1';//lifecycle
import Memo from './component/react16.6.0/memo/index';
import Optimizing from './component/api/optimizing-performance/Purecomponent';
import Hoc from './component/api/hoc';
import State from './component/api/state'
import Props from './component/api/props'
import Props2 from './component/api/props/index2';

import Wcag from './component/api/wcag';






export default class App extends Component {
  render() {
    return (
      <div>
        {/* <RenderProps /> */}
        {/* <MouseTracker /> */}
        {/* <LifeCycle /> */}
        {/* <LifeCycleUnmounting></LifeCycleUnmounting> */}
        <br />
        {/* <State /> */}
        {/* <Refs /> */}
        {/* <ForwardingRefs></ForwardingRefs> */}
        {/* <Optimizing /> */}
        {/* <Hoc /> */}
        {/* {<Props />} */}
        {/* {<Props2 />} */}
        {/* {<Wcag />} */}
        {/* 16.4 */}
        {/* <Context /> */}
        <Memo />
      </div>
    )
  }
}
