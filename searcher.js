import React, { Component } from 'react'
import HomeLayout from '../components/HomeLayout';
import data from '../../../src/api.json'

export class Home extends Component {

  state={
    value:""
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
        >
          {videos.title}
        </li>
      )
    })
    return (
      <div>
        {/* <HomeLayout/> */}
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

export default Home
