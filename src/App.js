import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Artwork from "./routes/Artwork";
import About from "./routes/About";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";
import MainPage from "./routes/MainPage";
import Portfolio from "./routes/Portfolio";
import Blogs from "./routes/Blogs";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/artwork" element={<Artwork />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            {/* Error route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
