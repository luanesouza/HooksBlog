import React from 'react';
import PostContent from './PostContent';
import PostForm from './PostForm';


function Main(props) {

    const post = props.posts.map( data => {return <PostContent key={data.id} content={data.content} title={data.title} />})

    return (
      <>
        <h1> {post} </h1>
        <PostForm />
      </>
    );
}

export default Main;
