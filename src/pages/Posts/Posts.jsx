import { Link } from "react-router-dom";
import HeaderPost from "../../components/Post/HeaderPost";
import { usePost } from "../../contexts/PostContext";
import { useEffect } from "react";

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
          <div className="card w-1/4 border-2 border-gray-200 rounded-md shadow-md grow hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col" key={post.id}>
            <div className="card-header flex justify-between items-center border-b border-gray-200 p-4">
              <h5 className="card-title">{post.title}</h5>
              <div className="n-post-number px-2 py-1 bg-green-300 rounded-md">
                <span> #{post.id}</span>
              </div>
            </div>
            <div className="card-body grow">
              <p className="card-text p-4">{post.content}</p>
            </div>
            <div className="card-footer p-4 border-t border-gray-200 flex justify-between items-center">
              <span className="text-gray-500">post by: Thomas</span>
              <div className="flex gap-2">
                <Link to={`/posts/${post.id}`}>
                  <button className="border-2 border-gray-200 rounded-md p-2 bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 cursor-pointer">View</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
