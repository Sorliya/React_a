import React, { Component } from 'react'
import { connect } from 'react-redux'
import {} from '../../redux/actions'

class Person extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}
export default connect(
    state=>({count:state.count,person:state.person}),
    {}
)(Person)