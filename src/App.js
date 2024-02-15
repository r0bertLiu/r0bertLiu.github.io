import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './sections/header';
import Home from './sections/home';
import About from './sections/about';
import Experience from './sections/experience';
import Projects from './sections/projects';
import Education from './sections/education';
import Contact from './sections/contact';
import Footer from './sections/footer';

function App() {
  return (
    <>
      <Header/>
      <section id="home" className="mySection bgClass1"><Home/></section>
      <section id="about" className="mySection bgClass2"><About/></section>
      <section id="experience" className="mySection bgClass1"><Experience/></section>
      <section id="projects" className="mySection bgClass2"><Projects/></section>
      <section id="education" className="mySection bgClass1"><Education/></section>
      <section id="contact" className="mySection bgClass2"><Contact/></section>
      <div className="bgClass1"><Footer/></div> 
    </>
  );
}

export default App;
