import React, { Component } from 'react'

export default class Footer extends Component {
  

  render() {
    const {todos} = this.props
    console.log('yan',this.props)
    console.log('yan',this.props.todos.length)
    //const countDone =todos
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"/>
        </label>
        <span>
          <span>已完成0</span> / 全部2
        </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}

