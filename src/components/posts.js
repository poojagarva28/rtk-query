import {
  usePostsQuery,
  usePostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "../services/postApi";

const Posts = () => {
  const { data: posts } = usePostsQuery();
  const { data: singlePost } = usePostQuery(2);

  return (
    <>
      <AddingPost />
      <UpdatingPost />
      <DeletePost />
      <ul>
        {posts?.map((post) => (
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
  // const { refetch } = usePostsQuery();
  const newPost = {
    title: "new post",
    userId: 1234,
    id: 1234,
    body: "new body",
  };
  return (
    <button
      onClick={() => {
        addPost(newPost);
        // refetch();
      }}
    >
      Add Post
    </button>
  );
};

const UpdatingPost = () => {
  const [updatePost] = useUpdatePostMutation();
  const newPost = {
    title: "new post2",
    userId: 1234,
    id: 1234,
    body: "new body",
  };
  return <button onClick={() => updatePost(1234, newPost)}>Update Post</button>;
};

const DeletePost = () => {
  const [deletePost] = useDeletePostMutation();
  return <button onClick={() => deletePost(2)}>Delete Post</button>;
};
