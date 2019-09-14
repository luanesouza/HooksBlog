import React from 'react';


function PostContent(props) {
  const { title, id, content, removePost, post } = props;

  return (
    <main className="postContent">
      <h3>{title}</h3>
      <p>{content}</p>
      <button  onClick={(e) => removePost(e, post)}> Remove Post </button>
    </main>
  )
}
export default PostContent;
