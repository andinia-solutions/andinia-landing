import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatKitWidget from './components/ChatKitWidget';
import { ChatProvider } from './context/ChatContext';
import Home from './pages/Home';
import Comercios from './pages/Comercios';
import Gastronomia from './pages/Gastronomia';
import Bienestar from './pages/Bienestar';
import Agents from './pages/Agents';
import About from './pages/About';

function App() {
  return (
    <ChatProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comercios" element={<Comercios />} />
            <Route path="/gastronomia" element={<Gastronomia />} />
            <Route path="/bienestar" element={<Bienestar />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <ChatKitWidget />
        </div>
      </Router>
    </ChatProvider>
  );
}

export default App;
