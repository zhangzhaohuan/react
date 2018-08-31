/**
 * 回调 Refs
 */

 /**
  * React 将在组件挂载时将 DOM 元素传入ref 回调函数并调用，
  * 当卸载时传入 null 并调用它。
  * ref 回调函数会在 componentDidMout 和 componentDidUpdate 生命周期函数前被调用
  */

import React from 'react';
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.focusTextInput = () => {
      // 直接使用原生 API 使 text 输入框获得焦点
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // 渲染后文本框自动获得焦点
    this.focusTextInput();
  }

  render() {
    // 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input
          type="text"
          ref={(element)=>{ this.textInput = element}}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default CustomTextInput;