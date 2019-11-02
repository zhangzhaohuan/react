import React, { Component, PureComponent,Fragment } from 'react'


/**
 * 条件：PureComponent,props[基本数据类型]
 * 当父元素render时，若props的值发生改变，子元素重新render，若不变，则不render。
 * 
 * 条件：PureComponent,props[复杂数据类型]
 * 当父元素render时，若props浅层改变，子元素重新render，否则，则不render。
 * 
 * 
 */
class Child extends PureComponent {
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');

    }

    componentWillUpdate() {
        console.log('componentWillUpdate');

    }

    componentDidUpdate() {
        console.log('componentDidUpdate');

    }

    // shouldComponentUpdate() { }


    render() {
        console.log('子组件render');

        return (
            <Fragment>
                <h3>子组件：</h3>
                <div>
                    {this.props.name}
                </div>
                <div>

                    {this.props.complex.age}
                </div>
            </Fragment>
        )
    }
}

export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            basic: 'zhangsan',
            complex: {
                age: 1
            }
        }
    }
    render() {
        console.log('父组件render');
        return (
            <div>
                <h3>父组件</h3>
                <div>基本数据类型：{this.state.basic}</div>
                <button onClick={() => {
                    this.setState({
                        basic: 'zhangsan1'
                    });
                }}>改变</button>
                <button onClick={() => {
                    this.setState((state) => ({
                        basic: state.basic
                    }))
                    // this.setState({
                    //     basic: 'zhangsan'
                    // });
                }}>不变</button>


                <div>复杂数据类型：</div>
                <button onClick={() => {
                    this.state.complex.age += 1;
                    this.setState({
                        complex: this.state.complex
                    });
                }}>不改变指针,改值</button>
                <button onClick={() => {
                    let obj = {};
                    obj.age = this.state.complex.age
                    this.setState({
                        complex: obj
                    });
                }}>改变指针，不改值</button>
                <button onClick={() => {
                    let obj = {};
                    obj.age = this.state.complex.age + 1
                    this.setState({
                        complex: obj
                    });
                }}>改变指针并改值</button>
                <button onClick={() => {
                    this.setState({
                        complex: this.state.complex
                    });
                }}>不变</button>
                <Child name={this.state.basic} complex={this.state.complex} />

            </div >
        )
    }
}
