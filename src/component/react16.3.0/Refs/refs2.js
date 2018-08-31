/**
 * createRef：为类组件添加 Ref
 * 需要注意的是，这种方法仅对 class 声明的 CustomTextInput 有效：
 */

/*如果我们想要包装上面的 CustomTextInput ，
来模拟挂载之后立即被点击的话，我们可以使用 ref 来访问自定义输入，并手动调用它的 focusTexInput 方法：
 */
import React from 'react';
import CustomTextInput from './refs1';
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}
export default AutoFocusTextInput