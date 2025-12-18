import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLink = (path: string, label: string) => {
    const active = isActive(path);
    return (
      <Link
        to={path}
        className={`relative font-semibold transition-all duration-300 group ${
          active ? 'text-white text-lg' : 'text-white/90 hover:text-white'
        }`}
      >
        {label}
        {active && (
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark rounded-full shadow-md"></span>
        )}
        {!active && (
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/0 group-hover:bg-white/40 rounded-full transition-all duration-300"></span>
        )}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-primary-dark/90 border-b-2 border-white/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/andinia-textlogo copy.png"
              alt="AndinIA"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <p className="text-white font-light text-sm leading-tight max-w-[200px] hidden lg:block">
              Llevamos la inteligencia<br />artificial a tu empresa
            </p>
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
