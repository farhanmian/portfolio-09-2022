import React from "react";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <main id="app">
      <Header />
      <About />
      <Projects />
    </main>
  );
}

export default App;
