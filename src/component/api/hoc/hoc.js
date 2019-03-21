/**
 * hoc：它只是一种模式，具体而言，高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件。
 */

 /**
  * 本例子介绍高阶组件的一种签名
  * const CommentWithRelay = Relay.createContainer(Comment, config);
  */

/**
 * 
 * 但是高阶组件最常见签名如下所示：（在hoc2文件夹中介绍）
 * const ConnectedComment = connect(commentSelector, commentActions)(Comment);
 */

import React, { Component } from 'react'
const Data = {
  '0': [1, 2, 3],
  '1': [4, 5, 6]
};
export function wrapComponent(WrapedComponent, select) {
  return class extends Component {
    constructor(props) {
      super(props);
      console.log(props);
      console.log(select(Data,'0'));
    }

    componentWillReceiveProps(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    }

    render() {
      return <WrapedComponent {...this.props} />
    }
  }
}