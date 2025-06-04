import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { usePost } from "../../contexts/PostContext";

export default function HeaderPost() {
  const { setPosts } = usePost();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterPosts = () => {
    axios
      .get("http://127.0.0.1:3000/posts", {
        params: {
          title: search,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setPosts(res.data.data);
      });
  };

  useEffect(() => {
    filterPosts();
  }, [search]);

  return (
    <div className="header-page flex justify-between items-center">
      <h2 className="text-2xl font-bold">
        <Link to="/posts">Posts</Link>
      </h2>
      <div className="search-bar flex gap-2">
        <input type="text" placeholder="Search" className="border-2 border-gray-200 rounded-md p-2" onChange={handleSearch} value={search} />
        <Link className="border-2 border-gray-200 rounded-md p-2" to="/posts/add-post">
          <FontAwesomeIcon icon={faPlus} />
        </Link>
      </div>
    </div>
  );
}
