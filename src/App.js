import React from "react";
import About from "./components/About/About";
import './App.css';
import Navbar from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

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