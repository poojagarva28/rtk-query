import { usePostsQuery } from "../services/postApi";

const Posts = () => {
  const { data: posts } = usePostsQuery();
  console.log(posts);

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>
          {post.id} - {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
