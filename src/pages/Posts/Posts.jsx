import { Link } from "react-router-dom";
import HeaderPost from "../../components/Post/HeaderPost";
import { usePost } from "../../contexts/PostContext";
import { useEffect } from "react";
import CardPost from "../../components/Post/CardPost";

export default function Posts() {
  const { posts, getPosts } = usePost();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <HeaderPost />
      <section className="flex flex-wrap gap-4 w-full">
        {posts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </section>
    </>
  );
}
