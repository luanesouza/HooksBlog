import React from 'react';
import { Component } from 'react';
import ImageUpload from './ImageUpload';

class PostForm extends Component {

  render(){
    const { formData, handleSubmit, createPost } = this.props;
    return(
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={formData.title} name="title" onChange={(e) => this.props.handleChange(e)}/>
        <input value={formData.content} name="content" onChange={(e) => this.props.handleChange(e)}/>
        <ImageUpload />
        <button onClick={createPost}>Submit</button>
      </form>
    )
  }
}
export default PostForm;
