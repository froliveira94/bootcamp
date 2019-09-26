import React from "react";

import "./App.css";

import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  return (
    <div id="main">
      <Header />
      <div id="container">
        <PostList />
      </div>
    </div>
  );
}

export default App;
