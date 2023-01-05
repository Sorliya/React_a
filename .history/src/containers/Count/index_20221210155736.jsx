import React, { Component } from 'react'
import { connect } from 'react-redux'
import {increment,decrement,incrementAsync} from '../../redux/actions/count'

class Count extends Component {
  increment = () => {
     const {value} = this.selectNumber
     this.props.increment(value*1)
  }
  decrement = () => {
     const {value} = this.selectNumber
     this.props.decrement(value*1)
  }
  incrementIfodd = () => {
     const {value} = this.selectNumber
     if(this.props.count%2!==0){
      this.props.increment(value*1)
     }
  }
  incrementAsync = () => {
     const {value} = this.selectNumber
     this.props.increment(value*1,500)
  }
  render() {
    return (
      <div>
        <h2>sum:{this.props.count},totol:{this.props.personCount} </h2>
        <select ref={c=>this.selectNumber=c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfodd}>ODD</button>&nbsp;
        <button onClick={this.incrementAsync}>ASYNC</button>&nbsp;
      </div>
    )
  }
}
export default connect(
  state=>({count:state.count,personCount:state.person}),
  {increment,decrement,incrementAsync}
)(Count)