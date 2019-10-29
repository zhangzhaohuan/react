
## 16.3 对ref做了修改，新增了createRef
### ref类型（1，2）
1. React.createRef() 创建的 ref 属性

#### ref的值取决于节点的类型:
  * 当 ref 属性被用于一个普通的 HTML 元素时，React.createRef() 将接收底层 DOM 元素作为它的 current 属性以创建 ref 。
  * 当 ref 属性被用于一个自定义类组件时，ref 对象将接收该组件已挂载的实例作为它的 current 。
  * 你不能在函数式组件上使用 ref 属性，因为它们没有实例。但是可以在函数式组件内部使用 ref，只要它指向一个 DOM 元素或者 class 组件
2. 回调ref:无current
```
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // 使用原生 DOM API 使 text 输入框获得焦点
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput();
  }

  render() {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
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
```
## React.forwardRef 
 React.forwardRef 会创建一个React组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中。
