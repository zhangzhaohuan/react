# 类组件和函数组件的区别
* 函数组件：同样的props会得到同样的渲染结果，不会有副作用；类组件中this是随着state和props变化的，所有this.props和this.state也是未来的
* 函数组件无this、state(状态)、生命周期函数