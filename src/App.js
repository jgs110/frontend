import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
// Components
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="max-w-screen-xl h-screen mx-auto pt-20 bg-gray-900 text-white">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/articles-list" component={ArticleList} />
        <Route exact path="/article" component={Article} />
      </div>
    </Router>
  );
}

export default App;
