import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function PostLayout() {
  return (
    <>
      <div className="relative jumbotron bg-blue-500 text-white h-30">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPr4VpQ4ltq2ola4uVcdv2x7zj7UPXK98sxRIsqH6DwS_KRV_kM6wtm6qr3eI1lw5Rcs&usqp=CAU"
          alt="Logo"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">Posts</span>
      </div>
      <div className="my-5 container mx-auto flex flex-col gap-4">
        <Outlet />
      </div>
    </>
  );
}
