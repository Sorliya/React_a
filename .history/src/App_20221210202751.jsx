import React, { Component } from 'react'
import Header from './components/Header'\
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <List/>
        <Footer/>
      </div>
    )
  }
}

