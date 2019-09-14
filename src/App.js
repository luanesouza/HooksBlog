import React from 'react';
import { Component } from 'react';
import Main from './Main';
// import api_helper from './services/api_helper';
import { postData, newPost, deletePost } from './services/api_helper'
import './App.css';

class App extends Component {
    state = {
      posts: [],
      user: '',
      formData: {
        title: '',
        content: '',
        user_id: 1
      }
    };
    handleSubmit = this.handleSubmit.bind(this)

  componentDidMount(){
    // fetch('http://localhost:3000/posts')
    // .then(response => response.json())
    // .then(res => this.setState({posts: res}))
    this.grabPosts()
  }

   grabPosts = async () => {
    const posts = await postData()
    this.setState({
      posts
    })
  }

  createPost = () => {
    const title = this.state.formData.title
    const content = this.state.formData.content

    if(title === '' && content === ''){
      console.log('insert a title and content');
    }

    else
      newPost(this.state.formData)
  }

  removePost = (e, id) => {
    const {posts} = this.state
    deletePost(id)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
          [name]: value,
      }
    })
  )}

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ posts: [...this.state.posts, this.state.formData] })

    this.setState({
      formData: {
        title: '',
        content: ''
      }
    })
  }

  render() {
    const { posts, formData } = this.state

    return (
      <div>
        <Main
          removePost={this.removePost}
          createPost={this.createPost}
          handleSubmit={this.handleSubmit}
          formData={formData}
          handleChange={this.handleChange}
          posts={posts}/>
      </div>
    )

  }
}

export default App;
