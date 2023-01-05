import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { connect } from "react-redux"
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        this.props.jiaYiRen(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
    return (
        <div>
            <h2>person,together:{this.props.count} </h2>
            <input ref={c=>this.nameNode=c} type='text' placeholder='name'/>
            <input ref={c=>this.ageNode=c} type='text' placeholder='age'/>
            <button onClick={this.addPerson}>add</button>
            <ul>
                {
                    this.props.person.map((per) => {
                        return <li key={per.id}>{per.name}---{per.age}</li>
                    })
                }
            </ul>
        </div>
    )
    }
}

export default connect(
    state => ({
        person:state.person,
        count:state.count}),
    {
        jiaYiRen:createAddPersonAction,
    }
)(Person)