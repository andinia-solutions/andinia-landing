import { MapPin, Target, Users, Lightbulb } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import Footer from '../components/Footer';

export default function About() {
  const { openChat } = useChat();

  return (
    <div className="min-h-screen bg-white-soft">
      <div className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Título compacto encima del video */}
          <div className="mb-6 flex flex-col items-center">
            <h1 className="text-base md:text-lg lg:text-xl font-bold text-primary text-center px-4">
              Somos un equipo pensado para integrar IA donde sea.
              <span className="block mt-1 italic text-black-corp/80">Lo que necesitás para no quedarte afuera.</span>
            </h1>
            <div className="mt-2 h-0.5 bg-gradient-to-r from-primary via-primary-dark to-primary rounded-full shadow-md" style={{ width: 'calc(100% - 2rem)', maxWidth: 'fit-content' }}></div>
          </div>

          <div className="mb-16">
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white mt-8">
              <p className="text-lg leading-relaxed font-medium">
                Nuestra misión es traer lo que está cambiando el mundo a nuestra ciudad. Lograr que la inteligencia artificial llegue lo antes posible a la provincia que más crece y a las empresas que logran esto. Si hay algo que nos apasiona es la tecnología, y es en lo que somos buenos, queremos lograr que todos seamos parte de esta revolución.
              </p>
            </div>
          </div>

          <div id="about-details" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-white-accent">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">Nuestra Ubicación</h3>
              <p className="text-black-corp/70">
                Desde Neuquén, Argentina, operamos a nivel nacional, llevando soluciones de IA a
                negocios de todos los tamaños. La Patagonia es nuestro hogar, pero llegamos hasta donde lo necesites.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-white-accent">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">Nuestra Misión</h3>
              <p className="text-black-corp/70">
                Democratizar el acceso a la inteligencia artificial de élite. Queremos que la automatización con IA sea accesible para todos los negocios, sin importar su tamaño.
                <br /><span className="italic block mt-2 text-primary">"Para que todos se suban antes de que el tren pase"</span>
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-white-accent">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">Nuestro Equipo</h3>
              <p className="text-black-corp/70">
                Un equipo multidisciplinario de expertos en IA, ingeniería en software, experencia de usuario y producto.
                <br /><span className="italic block mt-2 text-primary">Somos apasionados en resolver problemas reales con tecnología.</span>
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-white-accent">
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-black-corp mb-4">Nuestra Visión</h3>
              <p className="text-black-corp/70">
                Ser líderes en innovación con IA en nuestro querido Neuquén, y seguir avanzando por Argentina. Ayudando a empresas a alcanzar los nuevos potenciales y estándares que surgieron con este cambio rotundo, lograr brindar seguridad, transparencia y soluciones bajadas a tierra para que nadie se quede atrás por miedo a lo nuevo.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-black-corp mb-12 text-center">Fundadores</h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-white-accent hover:border-primary transition-colors max-w-sm mx-auto">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src="/alejo.jpg"
                    alt="Alejo Rivera"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-black-corp mb-2">Alejo Rivera</h3>
                  <p className="text-primary font-semibold mb-4">Product & UX/UI</p>
                  <p className="text-black-corp/70 text-lg leading-relaxed">
                    Buenas! Soy técnico en programación y me especialicé en diseño de aplicaciones y product managment. Me apasiona entender al usuario y diseñar soluciones escalables, medibles y de rápida iteración. Mi enfoque aporta una visión creativa, me encanta salirme de la caja, cuando no encontramos solución, siempre se me ocurre algo.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-white-accent hover:border-primary transition-colors max-w-sm mx-auto">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src="/matias.jpg"
                    alt="Matías Apablaza"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-black-corp mb-2">Matías Apablaza</h3>
                  <p className="text-primary font-semibold mb-4">Engineering & AI</p>
                  <p className="text-black-corp/70 text-lg leading-relaxed">
                    Hola, soy Ingeniero en Informática (I.T.B.A.) y trabajé en el desarrollo del agente IA de MercadoPago, donde logramos ahorrar más de 200k USD/Mes en atención al cliente. Desde muy chico hice proyectos y programé, lo que me dió una experiencia muy grande para hoy poderme poner al frente de cualquier problema o proyecto del lado del software. Me encargo de desarrollar una infraestructura de alto nivel, escalable y segura.
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
              onClick={openChat}
              className="px-8 py-4 bg-white text-primary hover:bg-white-soft font-semibold rounded-xl transition-colors duration-300"
            >
              Agendar una Reunión
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
