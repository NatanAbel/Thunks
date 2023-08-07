import axios from "axios";
import { postsFetched, startLoading } from "./slice";

const API_URL = "http://localhost:5005";
// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0

// http://localhost:5005    ????????? pagiantion does not work here
// https://jsonplaceholder.typicode.com     ????????? pagiantion does not work here

export const fetchPosts = async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    // going to Redux state and checking the current lenght of posts
    const offset = getState().feed.posts.length;
    const limit = 2;
    //added offset and limit to the url
    const response = await axios.get(
      `${API_URL}/posts?offset=${offset}&limit=${limit}`
    );
    // console.log("offset and limit......",offset, limit)
    const posts = response.data;
    console.log("response...", posts);
    dispatch(postsFetched(posts));
  } catch (err) {
    console.log(err.message);
  }
};
