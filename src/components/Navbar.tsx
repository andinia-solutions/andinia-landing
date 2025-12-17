import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLink = (path: string, label: string) => {
    const active = isActive(path);
    return (
      <Link
        to={path}
        className={`relative font-medium transition-all duration-300 group ${
          active ? 'text-primary text-lg font-bold' : 'text-white-soft hover:text-primary'
        }`}
      >
        {label}
        {active && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>}
      </Link>
    );
  };

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
            {navLink('/comercios', 'Comercios')}
            {navLink('/gastronomia', 'Gastronomía')}
            {navLink('/bienestar', 'Bienestar')}
            {navLink('/agents', 'AndinIA Agents')}
            {navLink('/about', '¿Quiénes somos?')}
          </div>
        </div>
      </div>
    </nav>
  );
}
