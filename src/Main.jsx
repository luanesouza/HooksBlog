import React from 'react';
import PostContent from './PostContent';
import PostForm from './PostForm';


function Main(props) {
    const post = props.posts.map( data => {return <PostContent removePost={props.removePost} id={data.id} post={data} key={data.id} content={data.content} title={data.title} />})

    return (
      <>
        <h1 key={post.id}> {post} </h1>

        <PostForm
        createPost={props.createPost}
        formData={props.formData}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}/>

      </>
    );
}

export default Main;
