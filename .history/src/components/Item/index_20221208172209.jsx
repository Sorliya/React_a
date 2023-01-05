import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = {mouse:false}

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse:flag  });
        }
    }

    handleCheck = (id) => {
         return (event) => {
            this.props.changeTodo(id,this.props.done:event.target.checked)
         }
    }

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
        <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
            <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id) } />
                <span>{name} </span>
            </label>
            <button className="btn btn-danger" style={{display:mouse ? 'block' : 'none'}}>删除</button>
        </li>
    )
  }
}
