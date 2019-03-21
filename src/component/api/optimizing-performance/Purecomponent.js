import React, { Component } from 'react';
/**
 * PureComponent:可以对shouldcomponentupdate做优化，但是只是进行了浅比较。
 */
class ListOfWords extends React.PureComponent {
  //this.props.words发生了变化，但是shouldcomponentupdate自己做了浅比较，返回false。
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
