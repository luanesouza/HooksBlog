import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

const postData = async () => {
  try {
    const postData = await axios(`${BASE_URL}posts`)
    console.log(postData.data);
    return postData.data
  }
  catch(e){
    console.error(e);
  }
}

const newPost = (data) => {
  try {
    axios.post(`${BASE_URL}posts`, data)
  }
  catch(e) {
    console.error(e);
  }
}

const deletePost = (id) => {
  console.log('delete clicked');
  try {
    axios.delete(`${BASE_URL}posts/${id}`)
  }
  catch(e){
    console.error(e);
  }
  postData()
}

export { postData, newPost, deletePost }
