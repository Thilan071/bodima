import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import SearchComponent from './components/search/search';
import HowItWorksComponent from './components/howItWorks/howItWorks';
import PropertyList from './components/propertyList/propertyList';
import Support from './components/support/support';

function App() {
  return (
    <Router>      <div className="app">        <Routes>          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchComponent />} />
          <Route path="/how-it-works" element={<HowItWorksComponent />} />
          <Route path="/list-property" element={<PropertyList />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
