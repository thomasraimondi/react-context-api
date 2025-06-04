import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function HeaderPost() {
  return (
    <div className="header-page flex justify-between items-center">
      <h2 className="text-2xl font-bold">
        <Link to="/posts">Posts</Link>
      </h2>
      <div className="search-bar flex gap-2">
        <input type="text" placeholder="Search" className="border-2 border-gray-200 rounded-md p-2" />
        <Link className="border-2 border-gray-200 rounded-md p-2" to="/posts/add-post">
          <FontAwesomeIcon icon={faPlus} />
        </Link>
      </div>
    </div>
  );
}
