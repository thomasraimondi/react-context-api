import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { usePost } from "../../contexts/PostContext";

export default function Form({ handleSubmit, initialForm, error, submitText, setForm }) {
  const { setPosts } = usePost();
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [formPost, setFormPost] = useState(initialForm);

  const handleChange = (e) => {
    setFormPost({ ...formPost, [e.target.name]: e.target.value });
  };

  const handleAddTag = (e) => {
    setTags([...tags, tag]);
    setFormPost({ ...formPost, tags: [...formPost.tags, tag] });
    setTag("");
  };

  useEffect(() => {
    setForm(formPost);
  }, [formPost]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
      <label className={clsx("text-sm font-bold", error.invalidFields.includes("title") && "text-red-500")} htmlFor="title">
        Title
      </label>
      <input
        className={clsx("border-2 border-gray-200 rounded-md p-2", error.invalidFields.includes("title") && "border-red-500")}
        type="text"
        placeholder="Title"
        value={formPost.title}
        onChange={handleChange}
        name="title"
      />
      <label className={clsx("text-sm font-bold", error.invalidFields.includes("content") && "text-red-500")} htmlFor="content">
        Content
      </label>
      <textarea
        className={clsx("border-2 border-gray-200 rounded-md p-2 h-40", error.invalidFields.includes("content") && "border-red-500")}
        placeholder="Content"
        value={formPost.content}
        onChange={handleChange}
        name="content"
      />
      <label className={clsx("text-sm font-bold", error.invalidFields.includes("image") && "text-red-500")} htmlFor="image">
        Image
      </label>
      <input
        className={clsx("border-2 border-gray-200 rounded-md p-2", error.invalidFields.includes("image") && "border-red-500")}
        type="text"
        placeholder="Image"
        value={formPost.image}
        onChange={handleChange}
        name="image"
      />

      <label className="text-sm font-bold" htmlFor="tags">
        Tags
      </label>
      <div className="flex items-center gap-2">
        <input className="border-2 border-gray-200 rounded-md p-2 grow" type="text" placeholder="Tags" value={tag} onChange={(e) => setTag(e.target.value)} name="tags" />
        <button className="border-2 border-gray-200 rounded-md p-2" type="button" onClick={handleAddTag}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {formPost.tags.map((tag) => (
          <span key={tag}>#{tag} </span>
        ))}
      </div>
      <div className="flex justify-end">
        <button className="border-2 border-gray-200 bg-blue-500 text-white rounded-md p-2" type="submit">
          {submitText}
        </button>
      </div>
    </form>
  );
}
