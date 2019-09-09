import React from 'react';
import PostContent from './PostContent';
import PostForm from './PostForm';


function Main(props) {

    const post = props.posts.map( data => {return <PostContent key={data.name} content={data.content} title={data.title} />})

    return (
      <>
        <h1 id={post.id}> {post} </h1>

        <PostForm
        createPost={props.createPost}
        formData={props.formData}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}/>

      </>
    );
}

export default Main;
