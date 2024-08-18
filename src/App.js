import React from "react";
import About from "./components/About";
import './App.css';
import Navbar from "./components/Nav";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App">
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;