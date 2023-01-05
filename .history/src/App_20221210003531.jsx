import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state={todos:[
    {id:'001',name:'food',done:false},
    {id:'002',name:'code',done:false},
    {id:'003',name:'sleep',done:true},
  ]}

  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({ todos:newTodos  })
  }

  updateTodo = () => {
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({ todos:newTodos  })
  }

  render() {
    const {todos} = this.state
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={todos} updateTodo={this.uupdateTodo} />
        <Footer todos={todos}/>
      </div>
    )
  }
}

