import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenChat: () => void;
}

export default function Footer({ onOpenChat }: FooterProps) {
  return (
    <footer className="bg-primary-dark text-white-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Explorar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/comercios" className="hover:text-primary transition-colors">
                  Comercios
                </Link>
              </li>
              <li>
                <Link to="/gastronomia" className="hover:text-primary transition-colors">
                  Gastronomía
                </Link>
              </li>
              <li>
                <Link to="/bienestar" className="hover:text-primary transition-colors">
                  Bienestar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Soluciones</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/agents" className="hover:text-primary transition-colors">
                  AndinIA Agents
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  ¿Quiénes somos?
                </Link>
              </li>
              <li>
                <Link to="/agents" className="hover:text-primary transition-colors">
                  Nuestros Servicios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:team@andinia.solutions" className="hover:text-primary transition-colors">
                  Email: team@andinia.solutions
                </a>
              </li>
              <li>
                <a href="tel:+5492999000000" className="hover:text-primary transition-colors">
                  Teléfono: +54 9 299 XXX-XXXX
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenChat}
                  className="hover:text-primary transition-colors text-left"
                >
                  Agendá tu Reunión
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white-soft/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2025 AndinIA. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Aviso Legal
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
