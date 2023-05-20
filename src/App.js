import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';
import Footer from './components/navigation/Footer';
import ProjectCard from './components/pages/ProjectCard';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <Home /> }/>
          <Route exact path="/projects" element={ <Projects /> }/>
          <Route exact path="/project/:id" element={ <ProjectCard /> }/>
          <Route exact path="/experience" element={ <Experience /> }/>
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
