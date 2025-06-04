import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "../../components/ui/Form";

const initialPost = {
  title: "",
  content: "",
  image: "",
  tags: [],
};

const initialError = {
  message: "",
  invalidFields: [],
};

export default function AddPost() {
  const navigate = useNavigate();
  const [post, setPost] = useState(initialPost);
  const [error, setError] = useState(initialError);

  const addPost = (post) => {
    console.log(post);
    axios
      .post("http://127.0.0.1:3000/posts", post)
      .then((res) => {
        setPost(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        setError({ ...error, message: err.response.data.message, invalidFields: err.response.data.responseData.malformatElements });
      });
  };

  useEffect(() => {
    if (post.id) {
      navigate(`/posts/${post.id}`);
    }
  }, [post]);

  const handleAddPost = (e) => {
    e.preventDefault();
    addPost(post);
  };

  return (
    <>
      <div className="w-1/2 mx-auto ">
        <h1 className="text-2xl font-bold">Add new post</h1>
        <Form handleSubmit={handleAddPost} initialForm={post} setForm={setPost} error={error} submitText="Add Post" />
      </div>
    </>
  );
}
