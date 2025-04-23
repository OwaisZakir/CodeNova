import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import Blogs from "./pages/Blogs";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/blog/:id" element={<PostDetail />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
