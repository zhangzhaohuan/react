import React, { Component } from 'react'


/**
 * 
 * 结论: this.state.age 并不能触发render()
 */
export default class State1 extends Component {
    constructor() {
        super();
        this.state = {
            age: 18
        }
        this.handelClick = this.handelClick.bind(this);
    }

    handelClick() {
        console.log('add')
        this.state.age = this.state.age + 1;
        console.log(this.state.age);
    }
    render() {
        console.log('render');
        return (

            <div>
                <p>结论：this.state.age 并不能触发render()</p>
                <p>例子如下：</p>
                <span onClick={this.handelClick}>add:1</span>
                <div>
                    {this.state.age}
                </div>
            </div>

        )
    }
}
