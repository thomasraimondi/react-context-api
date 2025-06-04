import { usePost } from "../../contexts/PostContext";
import { useEffect } from "react";
import CardPost from "./CardPost";

export default function PostList() {
  const { posts, getPosts } = usePost();

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <section className="flex flex-wrap gap-4 w-full">
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </section>
  );
}
