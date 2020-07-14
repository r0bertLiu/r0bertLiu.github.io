import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Education from './components/education';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header/>
      <section id="home" className="mySection bgClass1"><Home/></section>
      <section id="about" className="mySection bgClass2"><About/></section>
      <section id="projects" className="mySection bgClass1"><Projects/></section>
      <section id="education" className="mySection bgClass2"><Education/></section>
      <section id="contact" className="mySection bgClass1"><Contact/></section>
      <div className="bgClass2"><Footer/></div> 
    </>
  );
}

export default App;
