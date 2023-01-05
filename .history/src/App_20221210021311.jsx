import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './components/List'
import Search from './components/Search'
import './App.css'

export default class App extends Component {
  state={
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }

  findUsers = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div>
        <Search findUsers={this.findUsers} />
        <List {...this.state} />
      </div>
    )
  }
}

