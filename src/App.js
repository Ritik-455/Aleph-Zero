import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Hero from './Components/Hero';
import Features from './Components/Features';
import Build from './Components/Build';
import Blockchain from './Components/Blockchain';
import Application from './Components/Application';
import Community from './Components/Community';
import Footer from './Components/Footer';
import Network from './Components/Network';

function App() {
  return (
    <>
      <Hero />
      <Features />
      <Build />
      <Blockchain />
      <Application />
      <Network />
      <Community />
      <Footer />
    </>
  );
}

export default App;
