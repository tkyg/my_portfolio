import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <Home /> }/>
          <Route exact path="/projects" element={ <Projects /> }/>
          <Route exact path="/experiences" element={ <Experience /> }/>
          <Route exact path="/about" element={ <About /> }/>
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
