import {
  usePostsQuery,
  usePostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "../services/postApi";

const Posts = () => {
  const { data: posts } = usePostsQuery();
  const { data: singlePost } = usePostQuery(1);

  return (
    <>
      <AddingPost />
      <UpdatingPost />
      <DeletePost />
      <ul>
        {posts
          ?.slice()
          .reverse()
          .map((post) => (
            <li key={post.id}>
              {post.title}
              <br />
              <br />
              {JSON.stringify(singlePost)}
              <br />
              <br />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;

const AddingPost = () => {
  const [addPost] = useAddPostMutation();
  const newPost = {
    title: "new post",
    userId: "1234",
    id: "1234",
    body: "new body",
  };
  return (
    <button
      onClick={async () => {
        await addPost(newPost);
      }}
    >
      Add Post
    </button>
  );
};

const UpdatingPost = () => {
  const [updatePost] = useUpdatePostMutation();
  const updatedPost = {
    id: "1234",
    userId: "1234",
    title: "new post2",
    body: "new body",
  };
  return (
    <button onClick={async () => await updatePost(updatedPost)}>
      Update Post
    </button>
  );
};
const DeletePost = () => {
  const [deletePost] = useDeletePostMutation();
  return (
    <button onClick={async () => await deletePost("1234")}>Delete Post</button>
  );
};
