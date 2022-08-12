import './App.css';
import './css/Links.css';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
// import About from './components/About';
import Welcome from './components/Welcome';
import CryptoPriceTracker from './components/CryptoPriceTracker';

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
          <Link to="/todolist">Todolist</Link>
          <Link to="/crypto-price-tracker">Crypto Price Tracker</Link>
          {/* <Link to="/about">About</Link> */}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/crypto-price-tracker" element={<CryptoPriceTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
