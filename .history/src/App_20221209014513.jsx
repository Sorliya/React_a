import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  todo

  render() {
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header/>
            <List/>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}

