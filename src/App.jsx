import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Posts from "./pages/Posts/Posts";
import AddPost from "./pages/Posts/AddPost";
import PostLayout from "./layouts/PostLayout";
import DetailPost from "./pages/Posts/DetailPost";
import EditPost from "./pages/Posts/EditPost";
import { PostProvider } from "./contexts/PostContext";

function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<PostLayout />}>
              <Route index element={<Posts />} />
              <Route path="/posts/add-post" element={<AddPost />} />
              <Route path="/posts/edit/:id" element={<EditPost />} />
              <Route path="/posts/:id" element={<DetailPost />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;
