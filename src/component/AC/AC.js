/**
 * 按需加载组件一：AC
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import asyncComponent from './asyncComponent';

// const News = asyncComponent(()=>import('./News'));

class AC extends React.Component {
  constructor() {
    super();
    this.state = {
      component: null
    }
  }
  async componentDidMount() {
    const { default: Component } = await this.props.loader;
    this.setState({
      component: <Component {...this.props} />
    });
  }

  render() {
    return this.state.component;
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Example = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/others">其他</Link></li>
      </ul>
      <hr />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* 按需加载方式一 最佳 */}
      <Route path="/others" render={(props) => (
        <AC {...props} loader={import('./Others')} />
      )} />
      {/* 按需加载方式二(1) */}
      <Route path="/news" component={asyncComponent(() => import('./News'))}
      />
      {/* 按需加载方式二(2) */}
      {/* <Route path="/news" render={() => {
        const News = asyncComponent(() => import('./News'));
        return (
          <News />
        )
      }}
      /> */}
      {/* 
      (1)(2)写法的原因: component是使用 React.createElement to create a new React element 
      you would create a new component every render。
      但是render不再需要重新挂载，而是根据shouldcomponentUpdate调用组件的render()方法。 
      */}
    </div>
  </Router>
)
export default Example;