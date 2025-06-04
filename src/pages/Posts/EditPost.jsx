import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

export default function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({ tags: [] });
  const [error, setError] = useState(initialError);

  const getPost = () => {
    axios
      .get(`http://127.0.0.1:3000/posts/${id}`)
      .then((res) => {
        setPost(res.data.data);
      })
      .catch((err) => {
        setError({ ...error, message: err.response.data.message, invalidFields: err.response.data.responseData.malformatElements });
      });
  };

  const editPost = (post) => {
    axios
      .put(`http://127.0.0.1:3000/posts/${id}`, post)
      .then((res) => {
        navigate(`/posts/${id}`);
      })
      .catch((err) => {
        setError({ ...error, message: err.response.data.message, invalidFields: err.response.data.responseData.malformatElements });
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  const handleEditPost = (e) => {
    e.preventDefault();
    editPost(post);
  };

  return (
    <>
      <div className="w-1/2 mx-auto ">
        <h1 className="text-2xl font-bold">Edit post #{id}</h1>
        {post.id && <Form handleSubmit={handleEditPost} initialForm={post} setForm={setPost} error={error} submitText="Edit Post" />}
      </div>
    </>
  );
}
