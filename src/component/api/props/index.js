import React, { Component, Fragment } from 'react'


/**
 * 条件：Component、props[基本数据类型]
 * 当父元素setState[无论值是否变化]：父元素render->子元素重新render。
 * 
 * 条件：Component、props[复杂数据类型]
 * 当父元素setState[无论值是否变化]，子元素重新render。
 */
class Child extends Component {
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
