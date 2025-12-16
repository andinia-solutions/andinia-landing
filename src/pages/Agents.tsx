import { Bot, Sparkles, Zap, Shield } from 'lucide-react';
import Footer from '../components/Footer';

interface AgentsProps {
  onOpenChat: () => void;
}

export default function Agents({ onOpenChat }: AgentsProps) {
  return (
    <div className="min-h-screen bg-white-soft">
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black-corp mb-6">
              AndinIA Agents
            </h1>
            <p className="text-xl text-black-corp/70 max-w-3xl mx-auto">
              Soluciones personalizadas de IA para empresas que buscan transformar sus operaciones con tecnología de vanguardia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-white-accent">
              <Bot className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">
                Agentes Personalizados
              </h3>
              <p className="text-black-corp/70">
                Desarrollamos agentes de IA a medida que se adaptan perfectamente a tus procesos de negocio y necesidades específicas.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-white-accent">
              <Sparkles className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">
                Integraciones Avanzadas
              </h3>
              <p className="text-black-corp/70">
                Conectamos tu IA con todos tus sistemas existentes: CRM, ERP, bases de datos y más.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-white-accent">
              <Zap className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">
                Automatización Inteligente
              </h3>
              <p className="text-black-corp/70">
                Automatizamos procesos complejos que antes requerían intervención humana constante.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-white-accent">
              <Shield className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">
                Seguridad Garantizada
              </h3>
              <p className="text-black-corp/70">
                Implementamos las mejores prácticas de seguridad para proteger tus datos y operaciones.
              </p>
            </div>
          </div>

          <div className="text-center bg-primary rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Listo para transformar tu empresa con IA?
            </h2>
            <p className="text-white-soft text-lg mb-8 max-w-2xl mx-auto">
              Contanos sobre tu proyecto y descubrí cómo nuestros agentes pueden ayudarte a alcanzar tus objetivos.
            </p>
            <button
              onClick={onOpenChat}
              className="px-8 py-4 bg-white text-primary hover:bg-white-soft font-semibold rounded-xl transition-colors duration-300"
            >
              Agendá una Consultoría
            </button>
          </div>
        </div>
      </div>

      <Footer onOpenChat={onOpenChat} />
    </div>
  );
}
