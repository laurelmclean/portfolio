import React from "react";
import './App.css';
import About from "./components/About/About";
import Navbar from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Libraries from "./components/Projects/Libraries";

function App() {
  return (
    <main className="App">
      <Navbar />
      <About />
      <Projects />
      <Libraries />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;