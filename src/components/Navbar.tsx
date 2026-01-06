import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  const navLink = (path: string, label: string) => {
    const active = isActive(path);
    return (
      <Link
        to={path}
        className={`relative font-semibold transition-all duration-300 group ${active ? 'text-white text-lg' : 'text-white/90 hover:text-white'
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

  const mobileNavLink = (path: string, label: string) => {
    const active = isActive(path);
    return (
      <Link
        to={path}
        onClick={() => setIsMobileMenuOpen(false)}
        className={`block py-4 px-6 text-lg font-semibold transition-all duration-300 border-b border-white/10 ${active
            ? 'text-primary bg-white/10'
            : 'text-white hover:text-primary hover:bg-white/5'
          }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <>
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLink('/comercios', 'Comercios')}
              {navLink('/gastronomia', 'Gastronomía')}
              {navLink('/bienestar', 'Bienestar')}
              {navLink('/agents', 'AndinIA Agents')}
              {navLink('/about', '¿Quiénes somos?')}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="Menú de navegación"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-20 left-0 right-0 bg-primary-dark/95 backdrop-blur-xl border-b-2 border-white/20 shadow-2xl transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <div className="py-2">
            {mobileNavLink('/', 'Inicio')}
            {mobileNavLink('/comercios', 'Comercios')}
            {mobileNavLink('/gastronomia', 'Gastronomía')}
            {mobileNavLink('/bienestar', 'Bienestar')}
            {mobileNavLink('/agents', 'AndinIA Agents')}
            {mobileNavLink('/about', '¿Quiénes somos?')}
          </div>
        </div>
      </div>
    </>
  );
}
