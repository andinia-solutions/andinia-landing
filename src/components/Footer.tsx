import { Link } from 'react-router-dom';
import { useChat } from '../context/ChatContext';

export default function Footer() {
  const { openChat } = useChat();

  return (
    <footer className="bg-primary-dark text-white-soft relative overflow-hidden">
      {/* Glassmorphism overlay con mejor contraste */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
      <div className="absolute inset-0 border-t border-white/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Explorar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/comercios" className="text-white-soft/90 hover:text-white-accent transition-colors">
                  Comercios
                </Link>
              </li>
              <li>
                <Link to="/gastronomia" className="text-white-soft/90 hover:text-white-accent transition-colors">
                  Gastronomía
                </Link>
              </li>
              <li>
                <Link to="/bienestar" className="text-white-soft/90 hover:text-white-accent transition-colors">
                  Bienestar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Soluciones</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/agents" className="text-white-soft/90 hover:text-white-accent transition-colors">
                  AndinIA Agents
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white-soft/90 hover:text-white-accent transition-colors">
                  ¿Quiénes somos?
                </Link>
              </li>
              <li>
                <Link to="/agents" className="text-white-soft/90 hover:text-white-accent transition-colors">
                  Nuestros Servicios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:team@andinia.solutions" className="text-white-soft/90 hover:text-white-accent transition-colors">
                  Email: team@andinia.solutions
                </a>
              </li>
              <li>
                <a href="tel:+5492999000000" className="text-white-soft/90 hover:text-white-accent transition-colors">
                  Teléfono: +54 9 11 3620-4915
                </a>
              </li>
              <li>
                <button
                  onClick={openChat}
                  className="text-white-soft/90 hover:text-white-accent transition-colors text-left"
                >
                  Agendá tu Reunión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
