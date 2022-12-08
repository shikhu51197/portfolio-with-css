import React from "react";
import Header from "./Section/Header/Header";
import Navbar from "./Section/Navbar/Navbar";
import About from "./Section/about/About";
import Project from "./Section/Projects/Project";
import Footer from "./Section/Footer/Footer";
import Contacts from "./Section/contact/Contact";
import FloatingNav from "./Section/floating.nav/FloatingNav";
import Skills from "./Section/Skills/Skills";
import Tech_stack from "./Section/Tech_Stack/Tech_stack";

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Tech_stack/>
      <Project />
      <Contacts />
      <Footer />
      <FloatingNav />
    </main>
  );
};

export default App;
