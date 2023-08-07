import axios from "axios";
import { postFullyFetched, startLoading } from "./slice";


const API_URL = "http://localhost:5005"

export const fetchPost = (id)=> async (dispatch, getState) => {
    try{
    dispatch(startLoading())
  // fetching multiple data at the same time using Promise.all can find in the following link 
  //"https://github.com/Codaisseur/codaisseur-coders-rtk/commit/7f078db8abae00a232beeaead86a8980935e54b5" 

    const response = await axios.get(`${API_URL}/posts/${id}`)

    const post = response.data

    // console.log("post....", post)
    dispatch(postFullyFetched(post))
    }catch(err){
        console.log(err.message)
    }
}