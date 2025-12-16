import { Link } from 'react-router-dom';
import { Bot } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white-soft/80 border-b border-white-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-primary font-bold text-xl">
            <Bot className="w-8 h-8" />
            <span>AndinIA</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/comercios"
              className="text-black-corp hover:text-primary transition-colors font-medium"
            >
              Comercios
            </Link>
            <Link
              to="/gastronomia"
              className="text-black-corp hover:text-primary transition-colors font-medium"
            >
              Gastronomía
            </Link>
            <Link
              to="/bienestar"
              className="text-black-corp hover:text-primary transition-colors font-medium"
            >
              Bienestar
            </Link>
            <Link
              to="/agents"
              className="text-primary hover:text-primary-dark transition-colors font-semibold"
            >
              AndinIA Agents
            </Link>
            <Link
              to="/about"
              className="text-black-corp hover:text-primary transition-colors font-medium"
            >
              ¿Quiénes somos?
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
