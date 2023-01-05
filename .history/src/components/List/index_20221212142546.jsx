import React, { Component } from 'react'
import Item from './components/Item'

export default class List extends Component {
  render() {
    const {todos,checkTodo}=this.props
    return (
      <div>
        <ul>
            {
            todos.map((todo) => {
                return <Item key={todo.id} {...todo} checkTodo={checkTodo} />
            })
            }
        </ul>
      </div>
    )
  }
}
