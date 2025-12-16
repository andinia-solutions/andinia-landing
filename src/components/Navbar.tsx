import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-primary-dark/90 border-b border-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/andinia-logo.png"
              alt="AndinIA"
              className="h-16 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/comercios"
              className="text-white-soft hover:text-primary transition-colors font-medium"
            >
              Comercios
            </Link>
            <Link
              to="/gastronomia"
              className="text-white-soft hover:text-primary transition-colors font-medium"
            >
              Gastronomía
            </Link>
            <Link
              to="/bienestar"
              className="text-white-soft hover:text-primary transition-colors font-medium"
            >
              Bienestar
            </Link>
            <Link
              to="/agents"
              className="text-primary hover:text-white transition-colors font-semibold"
            >
              AndinIA Agents
            </Link>
            <Link
              to="/about"
              className="text-white-soft hover:text-primary transition-colors font-medium"
            >
              ¿Quiénes somos?
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
