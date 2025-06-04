import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex gap-4 items-center border-b border-gray-200 shadow-sm p-4">
      <a className="navbar-brand" href="/">
        <img className="h-10" src="https://www.comparacorsi.it/wp-content/uploads/2023/07/boolean.png" alt="Logo" height="30" />
      </a>
      <ul className="flex gap-4">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-black font-bold" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "text-black font-bold" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" className={({ isActive }) => (isActive ? "text-black font-bold" : "")}>
            Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
