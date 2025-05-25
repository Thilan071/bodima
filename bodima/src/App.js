import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import SearchComponent from './components/search/search';
import HowItWorksComponent from './components/howItWorks/howItWorks';

function App() {
  return (
    <Router>
      <div className="app">        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchComponent />} />
          <Route path="/how-it-works" element={<HowItWorksComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
