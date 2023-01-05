import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
    search = ()=>{
        const {keyWordElement:{value:keyword}} = this
        PubSub.publish('at',{isFirst:false,isLoading:true})
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            response =>{
                this.props.updateAppState({users:response.data.items,isLoading:false})
            },
            error=>{
                this.props.updateAppState({isLoading:false,err:error.message})
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                <input ref={c=>this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
