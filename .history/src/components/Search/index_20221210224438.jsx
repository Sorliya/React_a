import React, { Component } from 'react'
import {withRouter} from './withRouter'

class Search extends Component {
    constructor(){
        super()
        this.search=this.search.bind(this)
    }
    search = async() => {
        const {value} = this.keyWord
        this.props.addSearch({isFirst:false,isLoading:true})
        try{
            const response=await fetch(`https://api.github.com/search/users?q=${value}`)
            const data=await response.json()
            this.props.addSearch({isLoading:false,users:data.items})
        }catch(error){
            this.props.addSearch({isLoading:false,err:error.message})
        }
        this.props.navigate('/list')
    }
  render() {
    return (
      <div>
        <input ref={c=>this.keyWord=c} type="text" placeholder='search name' />
        <button onClick={this.search} >search</button>
      </div>
    )
  }
}
export default withRouter(Search)