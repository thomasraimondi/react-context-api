import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get("http://127.0.0.1:3000/posts").then((res) => {
      setPosts(res.data.data);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <PostContext.Provider value={{ posts, getPosts }}>{children}</PostContext.Provider>;
};

const usePost = () => {
  return useContext(PostContext);
};

export { PostProvider, usePost };
