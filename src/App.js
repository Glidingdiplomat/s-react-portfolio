import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/AboutMe";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <ProjectSection />
      </main>
    </div>
  );
}

export default App;
