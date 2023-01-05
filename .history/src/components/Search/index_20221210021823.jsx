import React, { Component } from 'react'
import { withRouter } from './withRouter'

class Search extends Component {
  constructor(){
    super()
    this.search=this.search.bind(this)
  }
  search = async() => {
    const {value} = this.keyWord
    this.props.findUsers({isFirst:false, isLoading:true})
    try{
      const response = await fetch(`https://api.github.com/search/users?q=${value}`)
      const data = await response.json()
      this.props.findUsers({isLoading:false,users:data.items})
    }catch(error){
      this.props.findUsers({isLoading:false,err:error.message})
    }
    this.props.navigate('/list')
  }
  render() {
    return (
      <div>
        <h2>search github</h2>
        <div>
          <input ref={c=>this.keyWord=c} type="text" placeholder='the name please' />
          <button onClick={this.search}>search</button>
        </div>
      </div>
    )
  }
}
export default withRouter(Search)
