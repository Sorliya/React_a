import React, { Component } from 'react'

export default class Count extends Component {
    state={count:0}

    incrementcpf = (e) => {
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({ count: count+value  });
    };
    decrementcpf = (e) => {
         
    };
    incrementIfOddcpf = (e) => {
         
    };
    incrementAsynccpf = (e) => {
         
    };
    render() {
    return (
        <div>
            <h1>sum:0</h1>
            <select ref={c=>this.selectNumber=c}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>&nbsp;
            <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
            <button onClick={this.incrementAsync}>异步加</button>&nbsp;
        </div>
    )
    }
}
