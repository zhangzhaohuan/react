import React, { Component, PureComponent } from 'react'


/**
 * 条件：PureComponent,props[基本数据类型]
 * 当父元素render时，若props的值发生改变，子元素重新render，若不变，则不render。
 * 
 * 条件：PureComponent,props[复杂数据类型]
 * 当父元素render时，若props的值发生改变，子元素重新render，若不变，则不render。
 * 
 * 
 */
class Father extends PureComponent {
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
        console.log('render');

        return (
            <div>
                {this.props.name}
                {this.props.complex.age}
            </div>
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
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        basic: 'zhangsan'
                    });
                }}>改变基本数据类型的值</button>
                <button onClick={() => {
                    let obj = this.state.complex;
                    obj.age += 1;
                    this.setState({
                        complex: obj
                    });
                }}>改变复杂数据类型的值</button>
                <Father name={this.state.basic} complex={this.state.complex} />
            </div >
        )
    }
}
