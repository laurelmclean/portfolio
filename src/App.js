import React from "react";
import About from "./components/About";
import './App.css';
import Navbar from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="App">
      <Navbar />
      <About />
      <Projects />
    </main>
  );
}

export default App;