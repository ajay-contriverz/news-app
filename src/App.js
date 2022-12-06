import React from "react";
import News from "./pages/News";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  const news = [];
  const getNews = async (urlAPI) => {
    fetch(urlAPI)
      .then((response) => response.json())
      .then((data) => {});
  };
  getNews(
    "https://newsapi.org/v2/everything?q=keyword&apiKey=d09a6c72879c48e1808b8de655f0850a"
  );
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='news' element={<News />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
