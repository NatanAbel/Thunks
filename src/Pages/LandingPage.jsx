import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFeedPosts } from "../store/feed/selectors";
import { fetchPosts } from "../store/feed/thunks";
import { NavLink } from "react-router-dom";

function LandingPage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectFeedPosts);

  console.log("posts...", posts);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts);
    }
  }, []);

  return (
    <div>
      <h1>LandingPage</h1>
      {!posts.length
        ? "Loading"
        : posts.map((post) => (
            <div key={post._id}>
              <NavLink to={`/${post._id}`}>{post.title}</NavLink>
            </div>
          ))}
      <div>
        {/* {<button onClick={() =>dispatch(fetchPosts)}>Load more</button>} */}
      </div>
    </div>
  );
}

export default LandingPage;
