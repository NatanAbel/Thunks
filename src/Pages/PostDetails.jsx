import { useDispatch, useSelector } from "react-redux"
import { selectPostPage } from "../store/postPage/selectors"
import { NavLink, useParams } from "react-router-dom"
import { useEffect } from "react"
import { fetchPost } from "../store/postPage/thunks"
// import ReactMarkdown from "react-markdown";



function PostDetails() {
    const post = useSelector(selectPostPage)
    const dispatch = useDispatch()
    const {id} = useParams()

    console.log("Post Details.....", post)

    useEffect(()=>{
        dispatch(fetchPost(id))
    },[dispatch, id])


  return (
    <div>
        <h1><NavLink to="/">Back</NavLink></h1>
        <h1>PostDetails</h1>
        <>
            {!post? <p>loading...</p> : 
            <div> 
                <p>{post.title}</p>
                <img style={{width:"400px"}} src={post.content}/>
                <p>{post.section}</p>

                <p>{post.description}</p>
            </div>
            }
        </>
    </div>
  )
}

export default PostDetails;