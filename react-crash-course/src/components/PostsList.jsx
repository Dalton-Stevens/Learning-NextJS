import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Shawn" body="I've heard it both ways." />
        <Post author="Gus" body="You know that's right." />
      </ul>
    </>
  );
}

export default PostsList;
