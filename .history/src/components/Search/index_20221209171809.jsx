import React, { Component } from 'react'

export default class Search extends Component {
  handlesearch = (e) => {
    const {value:keyword} = this.keyWord
  };

  render() {
    console.lod('shi',keyword)
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c=>this.keyWord=c} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.handlesearch}>Search</button>
        </div>
      </section>
    )
  }
}

