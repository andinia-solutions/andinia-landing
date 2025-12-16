import { MapPin, Users, Target, Lightbulb } from 'lucide-react';
import Footer from '../components/Footer';

interface AboutProps {
  onOpenChat: () => void;
}

export default function About({ onOpenChat }: AboutProps) {
  return (
    <div className="min-h-screen bg-white-soft">
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black-corp mb-6">
              ¿Quiénes Somos?
            </h1>
            <p className="text-xl text-black-corp/70 max-w-3xl mx-auto">
              Somos AndinIA, una agencia de automatización con IA basada en Neuquén, Argentina, dedicada a transformar negocios a través de la inteligencia artificial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-white rounded-2xl shadow-lg">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">Nuestra Ubicación</h3>
              <p className="text-black-corp/70">
                Desde Neuquén, Argentina, operamos a nivel nacional e internacional, llevando soluciones de IA a negocios de todos los tamaños.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">Nuestra Misión</h3>
              <p className="text-black-corp/70">
                Democratizar el acceso a la inteligencia artificial, haciendo que la automatización sea accesible para todos los negocios.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">Nuestro Equipo</h3>
              <p className="text-black-corp/70">
                Un equipo multidisciplinario de expertos en IA, desarrollo de software y consultoría empresarial.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg">
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">Nuestra Visión</h3>
              <p className="text-black-corp/70">
                Ser líderes en innovación con IA en Latinoamérica, ayudando a negocios a alcanzar su máximo potencial.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Querés conocernos mejor?
            </h2>
            <p className="text-white-soft text-lg mb-8 max-w-2xl mx-auto">
              Charlemos sobre tu proyecto y descubrí cómo podemos ayudarte a crecer con IA.
            </p>
            <button
              onClick={onOpenChat}
              className="px-8 py-4 bg-white text-primary hover:bg-white-soft font-semibold rounded-xl transition-colors duration-300"
            >
              Contactanos
            </button>
          </div>
        </div>
      </div>

      <Footer onOpenChat={onOpenChat} />
    </div>
  );
}
