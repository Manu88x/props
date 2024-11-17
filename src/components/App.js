import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog"; // Import blog data

function App() {
  return (
    <div className="App">
      {/* Pass the necessary props to the child components */}
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
