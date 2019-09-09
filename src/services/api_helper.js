import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

const postData = async () => {
  try {
    const postData = await axios(`${BASE_URL}posts`)
    console.log(postData.data);
    return postData.data
  }
  catch(e){
    console.log(e);
  }
}

const newPost = (data) => {
  console.log('called', data);
  try {
    const newPostData = axios.post(`${BASE_URL}posts`, data)
  }
  catch(e) {
    console.log(e);
  }
}

export { postData, newPost }
