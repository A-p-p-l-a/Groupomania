import axios from "axios";

// posts
export const GET_POSTS = "GET_POSTS";

export const getPosts = (num) => {
    return (dispatch) => {
      return axios
        .get(`${process.env.REACT_APP_API_URL}api/post/`)
        .then((res) => {
          const array = res.data.slice(0, num);
          dispatch({ type: GET_POSTS, payload: array });
          
        })
        .catch((err) => console.log(err));
    };
  };