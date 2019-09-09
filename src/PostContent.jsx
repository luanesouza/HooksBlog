import React from 'react';


function PostContent(props) {
  const { title, content } = props;

  return (
    <main className="postContent">
      <h3>{title}</h3>
      <p>{content}</p>
    </main>
  )
}
export default PostContent;
