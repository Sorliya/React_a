import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Count extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default connect(
    state=>({count:state.count,personCount:state.person}),
    {addPerson}
)(Count)