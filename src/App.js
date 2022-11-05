import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Panel from './pages/panel';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
