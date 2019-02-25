import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0
    };
    countUp = () => {
        if(!(this.state.count >= this.props.max)){
            this.setState({
                count: this.state.count + 1
            })}
    };
    countDown = () => {
        if(!(this.state.count <= this.props.min)) {
            this.setState({
                count: this.state.count - 1
            })
        }
    };
    reset = () => {
        this.setState({
            count: 0
        })
    };
    render() {
        return (
            <div className={'counter'}>
                <span>{this.props.name}</span>
                <b>{this.state.count}</b>
                <button className={'btn btn-info'} onClick={this.countUp}>+1</button>
                <button className={'btn btn-info'} onClick={this.countDown}>-1</button>
                <button className={'btn btn-info'} onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default Counter;