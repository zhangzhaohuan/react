import React, { Component } from 'react';
/**
 * https://react.docschina.org/docs/react-api.html#reactpurecomponent
 * 
 * PureComponent和Component区别：
 * React.Component 并未实现 shouldComponentUpdate()，而 React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数。
 * 
 * 
 * PureComponent:实现shouldcomponentupdate，但是只是对state对象进行了浅层比较。
 * 如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。
 * 仅在你的 props 和 state 较为简单时，才使用 React.PureComponent，或者在深层数据结构发生变化时调用 forceUpdate() 来确保组件被正确地更新。
 */

 /**
  * React官方不建议人为的在 shouldComponentUpdate() 中进行深层比较或使用 JSON.stringify()。这样非常影响效率，且会损害性能。
  * 后续版本，React 可能会将 shouldComponentUpdate 视为提示而不是严格的指令，并且，当返回 false 时，仍可能导致组件重新渲染。
  */
class ListOfWords extends React.PureComponent {
  //this.props.words发生了变化，但是shouldcomponentupdate对state对象做了浅比较，返回false。
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

export default class WordAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({ words: words });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} >添加</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}
