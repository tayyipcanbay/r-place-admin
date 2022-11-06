import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/panel" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
