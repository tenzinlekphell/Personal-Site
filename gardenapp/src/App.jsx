import './App.css';
import './css/Links.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <nav>
        <div className="links">
          <Link to="/" id="name-link">
            <h2>Tenzin's Portfolio</h2>
          </Link>
        </div>
        <div className="links">
          <Link to="/">Welcome</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
