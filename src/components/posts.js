import { usePostsQuery, usePostQuery } from "../services/postApi";

const Posts = () => {
  const { data: posts } = usePostsQuery();
  const { data: singlePost } = usePostQuery(2);

  return (
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
  );
};

export default Posts;
