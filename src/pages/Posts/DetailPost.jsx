import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const initialPost = {
  title: "",
  content: "",
  image: "",
  tags: [],
};

export default function DetailPost() {
  const [post, setPost] = useState(initialPost);
  const { id } = useParams();

  const getPost = () => {
    axios.get(`http://127.0.0.1:3000/posts/${id}`).then((res) => {
      setPost(res.data.data);
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <Link to={`/posts/edit/${post.id}`}>
          <button className="border-2 border-gray-200 rounded-md p-2 bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 cursor-pointer">Edit</button>
        </Link>
      </div>
      <p className="text-gray-500">{post.content}</p>
      {post.image && <img src={post.image} alt={post.title} className="w-1/2 h-1/2" />}
      <p className="text-gray-500">
        {post.tags.map((tag) => (
          <span key={tag}>#{tag} </span>
        ))}
      </p>
      <p className="text-gray-500">post by: Thomas Raimondi</p>
    </>
  );
}
