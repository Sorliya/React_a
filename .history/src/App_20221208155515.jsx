import React, { Component } from 'react'
import List from './components/List'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <div className="todo-header">
              <input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
            <List/>
            <div className="todo-footer">
              <label>
                <input type="checkbox"/>
              </label>
              <span>
                <span>已完成0</span> / 全部2
              </span>
              <button className="btn btn-danger">清除已完成任务</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
