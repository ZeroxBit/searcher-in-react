import React, { Component } from 'react'
import data from './api.json'

export class Home extends Component {

  state={
    value:"",
    favorites : []
  }

  addFavorite = (id) =>{
    const favorites = this.state.favorites.concat([id])
    this.setState({favorites})
  }

  changeValue(){
    const val = this.refs.myValue.value
    this.setState({value:val})
  }

  render() {
    
    const list = data.categories[0].playlist
      .filter( filt =>{
        return filt.title.toLowerCase().indexOf(this.state.value.toLowerCase()) != -1
      })
      .map( videos => {
      return(  
        <li
          key = {videos.id}
          onClick = {()=>this.addFavorite(videos.id)}
        >
          {videos.title}
        </li>
      )
    })
    return (
      <div>
        <Header 
          favorites = {this.state.favorites}
          data = { data }
          addFavorite = {this.addFavorite}
        />
        <form>
          <input 
            type="text" 
            ref="myValue" 
            onChange={this.changeValue.bind(this)}
          />
        </form>  
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}


function Header({data, favorites}){
    const list = favorites.map( id =>{
      const { title } = data.categories[0].playlist[id]
      return <li key={id}> {title} </li>
    })

    return (
      <div>
        <ul>
          { list }
        </ul>
      </div>
    )
}


export default Home
