import React from 'react';
import { Component } from 'react';
import Main from './Main';
import './App.css';

class App extends Component {
    state = {
      posts: [],
      user: '',
    };


  componentDidMount(){
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(res => this.setState({posts: res}))
  }

  handleChange(){

  }

  render() {

    const { posts } = this.state

    return (
      <div>
        <Main posts={posts}/>
      </div>
    )

  }
}

export default App;
