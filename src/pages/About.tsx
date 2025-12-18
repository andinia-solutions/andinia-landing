import { MapPin, Target, Users, Lightbulb, Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { useState, useRef } from 'react';
import Footer from '../components/Footer';

interface AboutProps {
  onOpenChat: () => void;
}

export default function About({ onOpenChat }: AboutProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsMuted(false);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white-soft">
      <div className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Título compacto encima del video */}
          <div className="mb-6 flex flex-col items-center">
            <h1 className="text-base md:text-lg lg:text-xl font-bold text-primary text-center px-4">
              Somos un equipo pensado para integrar IA donde sea, lo que necesitás para no quedarte afuera
            </h1>
            <div className="mt-2 h-0.5 bg-gradient-to-r from-primary via-primary-dark to-primary rounded-full shadow-md" style={{ width: 'calc(100% - 2rem)', maxWidth: 'fit-content' }}></div>
          </div>

          <div className="mb-16">
            <div className="relative aspect-video bg-black-corp rounded-3xl overflow-hidden shadow-2xl mb-8 max-w-5xl mx-auto">
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  type="video/mp4"
                />
              </video>

              <button
                onClick={isMuted ? handleUnmute : handleMute}
                className="absolute bottom-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-black-corp" />
                ) : (
                  <Volume2 className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>

            {/* Indicador de scroll hacia abajo */}
            <div className="h-[7vh] flex flex-col items-center justify-center gap-2 px-4 mb-8">
              <p className="text-black-corp/90 text-sm md:text-base font-medium">
                Conocenos más
              </p>
              <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
            </div>

            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white">
              <p className="text-lg leading-relaxed">
                Nuestra misión es democratizar el acceso a "Empleados Virtuales" de élite para empresas que quieren
                liderar el futuro. Combinamos tecnología de vanguardia con experiencia comercial profunda para crear
                agentes de IA que no solo automatizan, sino que transforman tu forma de hacer negocios.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-white-accent">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">Nuestra Ubicación</h3>
              <p className="text-black-corp/70">
                Desde Neuquén, Argentina, operamos a nivel nacional e internacional, llevando soluciones de IA a
                negocios de todos los tamaños. La Patagonia es nuestro hogar, pero nuestro alcance es global.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-white-accent">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">Nuestra Misión</h3>
              <p className="text-black-corp/70">
                Democratizar el acceso a la inteligencia artificial de élite. Haciendo que la automatización con IA
                sea accesible para todos los negocios, sin importar su tamaño.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-white-accent">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">Nuestro Equipo</h3>
              <p className="text-black-corp/70">
                Un equipo multidisciplinario de expertos en IA, desarrollo de software, ingeniería y consultoría
                empresarial. Cada miembro apasionado por resolver problemas reales con tecnología.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-white-accent">
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">Nuestra Visión</h3>
              <p className="text-black-corp/70">
                Ser líderes en innovación con IA en Latinoamérica, ayudando a empresas a alcanzar su máximo potencial
                y liderar en sus respectivas industrias.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-black-corp mb-12 text-center">El Equipo Fundador</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-white-accent hover:border-primary transition-colors">
                <div className="h-72 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <Users className="w-24 h-24 text-white opacity-50" />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-black-corp mb-2">Alejo Rivera</h3>
                  <p className="text-primary font-semibold mb-4">Product & UX/UI</p>
                  <p className="text-black-corp/70 text-lg leading-relaxed">
                    Especialista en traducir tecnología compleja en productos intuitivos. Su visión creativa y
                    experiencia en desarrollo de interfaces hacen que cada agente sea no solo poderoso, sino fácil de
                    usar. Alejo entiende que la mejor IA es la que tus equipos quieren usar.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-white-accent hover:border-primary transition-colors">
                <div className="h-72 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <Users className="w-24 h-24 text-white opacity-50" />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-black-corp mb-2">Matías Apablaza</h3>
                  <p className="text-primary font-semibold mb-4">Engineering & AI</p>
                  <p className="text-black-corp/70 text-lg leading-relaxed">
                    Ingeniero Informático experto en IA con experiencia en MercadoPago, donde trabajó en un equipo que
                    automatizó el 80% del soporte. La mente técnica capaz de integrar modelos avanzados en tu
                    infraestructura actual, escalable y segura.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¿Querés conocernos mejor?</h2>
            <p className="text-white-soft text-lg mb-8 max-w-2xl mx-auto">
              Charlemos sobre tu proyecto y descubrí cómo podemos ayudarte a transformar tu empresa con IA. Nos encanta
              hablar de casos de uso y soluciones personalizadas.
            </p>
            <button
              onClick={onOpenChat}
              className="px-8 py-4 bg-white text-primary hover:bg-white-soft font-semibold rounded-xl transition-colors duration-300"
            >
              Agendar una Reunión
            </button>
          </div>
        </div>
      </div>

      <Footer onOpenChat={onOpenChat} />
    </div>
  );
}
