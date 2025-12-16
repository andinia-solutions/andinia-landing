import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingWidget from './components/FloatingWidget';
import ChatModal from './components/ChatModal';
import Home from './pages/Home';
import Comercios from './pages/Comercios';
import Gastronomia from './pages/Gastronomia';
import Bienestar from './pages/Bienestar';
import Agents from './pages/Agents';
import About from './pages/About';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home onOpenChat={openChat} />} />
          <Route path="/comercios" element={<Comercios onOpenChat={openChat} />} />
          <Route path="/gastronomia" element={<Gastronomia onOpenChat={openChat} />} />
          <Route path="/bienestar" element={<Bienestar onOpenChat={openChat} />} />
          <Route path="/agents" element={<Agents onOpenChat={openChat} />} />
          <Route path="/about" element={<About onOpenChat={openChat} />} />
        </Routes>
        <FloatingWidget onClick={openChat} />
        <ChatModal isOpen={isChatOpen} onClose={closeChat} />
      </div>
    </Router>
  );
}

export default App;
