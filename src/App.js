import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { NavBar } from './components/NavBar';

import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Doha Dennaye | Full Stack Web Developer Portfolio</title>
          <meta name="description" content="Portfolio of Doha Dennaye, a passionate Full Stack Web Developer specializing in React, Node.js, Laravel, and Mobile applications. Explore my projects and skills." />
          <link rel="canonical" href="https://dohadennaye.me/" />
        </Helmet>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;