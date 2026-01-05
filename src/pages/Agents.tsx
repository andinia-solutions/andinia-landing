import { useState, useRef, useEffect } from 'react';
import { ChevronRight, Zap, MessageSquare, BarChart3, Headset, ChevronDown, X, Volume2, VolumeX } from 'lucide-react';
import Footer from '../components/Footer';
import { useChat } from '../context/ChatContext';

interface Agent {
  id: string;
  name: string;
  role: string;
  icon: React.ElementType;
  pitch: string;
  whatDoesItDo: string;
  problemsSolved: string[];
  integration: string;
  modules: {
    title: string;
    description: string;
  }[];
  cta: string;
  videoUrl?: string;
}

const agents: Agent[] = [
  {
    id: 'cande',
    name: 'CANDE',
    role: 'Agentes de ventas y experta en CX',
    icon: MessageSquare,
    pitch: 'Atiendo y califico leads para que tus talentos sólo se encarguen de cerrar. Soy vendedora, recupero a tus clientes y les hago seguimiento 24/7',
    whatDoesItDo:
      'Cande atiende chats y llamadas en todas las redes que la quieras implementar. Le manda recordatorios a tus clientes, les hace post-venta y les envía promociones. No solo responde todos los mensajes repetitivos: conoce tus productos, conoce tus clientes. Sabe cuando responder y resolver rápido y también cuando dejar que un humano se encargue.',
    problemsSolved: [
      'Leads que se enfrían porque nadie los sigue.',
      'Vendedores que no responden fuera del horario laboral.',
      'Empleados que pierden tiempo respondiendo consultas repetitivas.',
    ],
    integration:
      'Se conecta a tu WhatsApp Business/Instagram/Facebook y (si lo requieres) a tu CRM. Cande guarda la conversación, etiqueta el lead y dispara la secuencia que acuerdes.',
    modules: [
      {
        title: 'Vende 24/7',
        description:
          'Es un agente omnicanal que va a responder en todas tus redes 24/7, atender y conocer a tus clientes, además de juntar data útil para decisiones futuras. Incluye atención instantánea, calificación de leads, estudio de necesidades y agenda automática de llamadas/visitas en tu calendario.',
      },
      {
        title: 'Follow-Up',
        description: 'Envía campañas configuradas por tus profesionales a leads frios o clientes que no volvieron. Ofrece productos nuevos o ofertas y sigue a los que respondan.',
      },
      {
        title: 'CX Personalizada',
        description:
          'Mantiene el vínculo con el cliente, le pregunta como le fue con el producto/servicio, lo acompaña o deriva a soporte, y si se quiere hace encuestas para identificar puntos de dolor o mejora.',
      },
    ],
    cta: 'Basta de dejar clientes colgados, que tu equipo invierta el tiempo en cerrar a los que realmente tienen intención de compra.',
    videoUrl: 'https://xuc1mufbju1siyiq.public.blob.vercel-storage.com/Cande-Agents.mp4',
  },
  {
    id: 'marti',
    name: 'MARTI',
    role: 'Avatar IA y Generadora de contenido',
    icon: Zap,
    pitch: 'Tu cara visible. Creo contenido, guiones y videos 100% generados por IA, si nadie se quiere poner frente a la cámara, yo me encargo de eso.',
    whatDoesItDo:
      'Marti crea el contenido que hace que la gente se concentre en tu contenido. Armamos guiones, calendarios y videos de Avatares IA hablando por vos — esos clips hiper-realistas y humanos que antes solo podían pagar las grandes productoras. Lo hacemos con herramientas IA topo-de-gama, lo pulimos con guion profesional y lo entregamos listo para que empieces a ser activo en tus redes.',
    problemsSolved: [
      'Falta de contenido en redes',
      'Videos poco profesionales y de mala calidad',
      'Mensajes inconsistentes entre los diferentes canales',
    ],
    integration:
      'Traemos tu material (logo, tono, fotos, brief) → generamos 3 pruebas → aprobás una → generamos todo el contenido del mes o por pieza → lo programamos o te lo entregamos listo para que subas.',
    modules: [
      {
        title: 'Contenido para Redes',
        description:
          'Guiones, ideas, copys y piezas listas para publicar para Reels, TikToks y videos explicativos o publicación de novedades.',
      },
      {
        title: 'Videos Avatar IA',
        description:
          'Videos tipo "locutora/vocera" con calidad de estudio usando IA avanzada. Presentación de productos, lanzamientos, y capacitaciones internas.',
      },
      {
        title: 'Lead Magnet Generator',
        description:
          'Material profesional para atraer clientes (ebooks, guías, scripts de webinars) con tu tono y estética.',
      },
    ],
    cta: 'Generá story-telling y dale esa calidad profesional que antes era difícil de pagar.',
    videoUrl: 'https://xuc1mufbju1siyiq.public.blob.vercel-storage.com/Marti-Agents.mp4',
  },
  {
    id: 'marcos',
    name: 'MARCOS',
    role: 'Experto en analísis de datos',
    icon: BarChart3,
    pitch: 'Tus datos trabajando para vos. Genero dashboards, te envío alertas y reportes diarios con los puntos clave.',
    whatDoesItDo:
      'Marcos transforma los datos en decisiones: arma dashboards, automatiza reportes, crea alertas. Se da cuenta escuchando a tus clientes donde hay dolor o te sugiere puntos de mejora. Ya no tenés que pedir informes las diferentes áreas, Marcos se conecta con tus sistemas y te los manda, obvio también te avisa cuando algo se rompe. Se conecta con tu CRM, Google Ads, WhatsApp logs, base de ventas, ERP.',
    problemsSolved: [
      'Decisiones "a ojo" sin datos reales.',
      'Reuniones largas por falta de reportes accionables.',
      'Incapacidad para detectar problemas a tiempo.',
    ],
    integration:
      'Conectamos APIs o bases (SQL, Postgres, Excels), limpiamos datos, armamos las visuales y te damos acceso web. Marcos también puede exportar informes listos para reunión o preparar diapositivas.',
    modules: [
      {
        title: 'BI - Datos claros',
        description:
          'Paneles simples para ver ventas, operaciones, soporte y rendimiento del equipo en un vistazo. Incluye Reportes diarios/semanales/mensuales y alertas automatizadas.',
      },
      {
        title: 'Base de Datos Consultable por Mensaje',
        description:
          'Podés hablarle a tus datos (ventas, rankings, proyecciones) y Marcos te responde por chat para que tomes las decisiones rápidas o encuentres detalles que no habías visto. Como tener un analista experto disponible 24/7.',
      },
      {
        title: 'Anomaly Detector',
        description:
          'Detecta comportamientos raros (caídas en ventas, aumento de reclamos, métricas fuera de rango) y avisa antes de que sean problemas graves.',
      },
    ],
    cta: 'Tus datos a un mensaje de distancia, dejá que la IA te muestre lo que necesitás para tomar las mejores decisiones.',
    videoUrl: 'https://xuc1mufbju1siyiq.public.blob.vercel-storage.com/Marcos-Agents.mp4',
  },
  {
    id: 'joel',
    name: 'JOEL',
    role: 'Soporte Técnico para tu equipo y tus clientes',
    icon: Headset,
    pitch: 'Soporte técnico de primer nivel y guías paso a paso. Capacito a tus nuevos empleados y respondo con pasos a tus clientes.',
    whatDoesItDo:
      'Joel es el primero en contestar cuando algo no anda. Guía al usuario paso a paso, aplica checks automáticos y resuelve lo que puede. Para problemas más profundos, prepara el diagnóstico y lo pasa al especialista correcto con toda la info ya cargada (logs, pasos ya probados, contexto).',
    problemsSolved: [
      'Soporte lento que frustra a clientes y empleados.',
      'Expertos perdiendo el tiempo resolviendo dudas simples y repetitivas.',
      'Onboarding lento de nuevos empleados por procesos mal documentados.',
    ],
    integration:
      'Se conecta al sistema de tickets, puede ejecutar scripts remotos (según permisos), agrega entradas automáticas y actualiza la base de conocimientos con cada caso resuelto para que mejore con el tiempo. Además se conecta con tus diferentes canales de contacto para identificar cuando es un problema de soporte y guía a tu cliente, si no lo puede resolver, se lo deriva a un experto.',
    modules: [
      {
        title: 'Soporte Técnico IA',
        description:
          'Solución de FAQs técnicas, reinicios guiados y derivación a técnico humano con resumen claro. Le resuelve rápido al cliente, cuando no puede, siempre hay un experto disponible para hacerlo.',
      },
      {
        title: 'Experto en sistemas',
        description:
          'Generación de guías paso a paso personalizadas, documentación de caso de uso, diagnósticos automáticos y tutoriales para usar cualquier sistema o producto. Organiza tu información.',
      },
      {
        title: 'Mesa de ayuda interna',
        description:
          'Búsqueda de políticas, procesos (vacaciones, licencias) y guías para nuevos empleados con respuestas inmediatas 24/7.',
      },
    ],
    cta: 'Todos pueden molestar a Joel para preguntarle lo que quieran, ya no tienen que leerse un manual completo o esperar horas a que se desocupe un IT y les responda.',
    videoUrl: 'https://xuc1mufbju1siyiq.public.blob.vercel-storage.com/Joel-Agents.mp4',
  },
];

const integrations = [
  'Sistemas de gestión (SAP, Tango, Odoo, Bejerman, otros)',
  'CRMs corporativos (Salesforce, HubSpot, Zoho, otros)',
  'Bases SQL, MySQL, PostgreSQL y APIs internas',
  'Sistemas legacy sin API: scraping estructurado + conectores',
  'Plataformas de e-commerce y tickets',
];

export default function Agents() {
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const arrowTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
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
  const { openChat } = useChat();

  const currentAgent = agents[currentAgentIndex];

  const nextAgent = () => {
    setCurrentAgentIndex((prev) => (prev + 1) % agents.length);
    // setShowNextArrow(false);
    if (arrowTimeoutRef.current) clearTimeout(arrowTimeoutRef.current);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentAgentIndex]);

  return (
    <div className="min-h-screen bg-black-corp relative overflow-hidden">
      <div className="relative min-h-screen flex flex-col">
        {/* Video de fondo a pantalla completa */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={currentAgent.videoUrl || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
        />

        {/* Blur Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black-corp/20 to-black-corp/90" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backdropFilter: 'blur(20px)',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 40%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 40%)'
          }}
        />

        {/* Unmute/Reset Button */}
        <button
          onClick={isMuted ? handleUnmute : handleMute}
          className="absolute top-24 left-4 z-20 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 group"
        >
          {isMuted ? (
            <div className="flex items-center gap-2">
              <VolumeX className="w-5 h-5 text-white/70 group-hover:text-white" />
              <span className="text-xs text-white/70 group-hover:text-white font-medium pr-1">Desmutear video</span>
            </div>
          ) : (
            <Volume2 className="w-5 h-5 text-primary" />
          )}
        </button>

        <div className="relative z-10 flex-1 flex flex-col justify-end pt-24 pb-4 px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 items-end mb-4 mt-8 gap-4">
            {/* Header con nombre y rol alineado a la izquierda */}
            <div className="text-left w-full md:w-auto">
              <div className="flex flex-col items-start justify-start gap-1">
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl tracking-tight">
                  {currentAgent.name}
                </h1>
                <span className="text-white text-lg md:text-xl font-medium drop-shadow-md tracking-wide leading-tight">
                  {currentAgent.role}
                </span>
              </div>
            </div>

            {/* Navegación entre agentes */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => setCurrentAgentIndex((prev) => (prev - 1 + agents.length) % agents.length)}
                className="p-2 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white rotate-180 drop-shadow-lg" />
              </button>

              <div className="flex space-x-2">
                {agents.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentAgentIndex(idx)}
                    className={`rounded-full transition-all duration-300 ${idx === currentAgentIndex
                      ? 'bg-primary w-10 h-3 shadow-lg'
                      : 'bg-white/40 hover:bg-white/60 w-3 h-3'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextAgent}
                className="p-2 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white drop-shadow-lg" />
              </button>
            </div>

            {/* Espaciador para mantener las flechas centradas en desktop */}
            <div className="hidden md:block" />
          </div>

          {/* Pitch y botón abajo de la navegación */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 mb-4">
            <p className="text-white text-xl md:text-2xl font-semibold drop-shadow-lg flex-1 text-center md:text-left leading-relaxed line-clamp-2">
              {currentAgent.pitch}
            </p>
            <button
              onClick={() => setExpandedAgent(expandedAgent === currentAgent.id ? null : currentAgent.id)}
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl whitespace-nowrap"
            >
              Ver capacidades completas
            </button>
          </div>

          {/* Indicador de scroll hacia abajo */}
          <div
            className="h-[7vh] flex flex-col items-center justify-center gap-2 pb-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => document.getElementById('integrations-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <p className="text-white/90 text-sm md:text-base font-medium drop-shadow-md">
              ¿Cómo nos integramos con tus sistemas?
            </p>
            <ChevronDown className="w-6 h-6 text-white/80 animate-bounce drop-shadow-md" />
          </div>
        </div>
      </div>

      {expandedAgent === currentAgent.id && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setExpandedAgent(null)}
        >
          <div
            className="bg-gradient-to-br from-primary-dark to-primary/30 rounded-3xl p-8 max-w-3xl max-h-[90vh] overflow-y-auto w-full border-2 border-white/20 shadow-2xl cursor-default relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/20">
              <div>
                <h2 className="text-4xl font-bold text-white drop-shadow-lg">{currentAgent.name}</h2>
                <p className="text-white/90 drop-shadow-md text-lg mt-1">{currentAgent.role}</p>
              </div>
              <button
                onClick={() => setExpandedAgent(null)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm group"
              >
                <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">Qué hace</h3>
                <p className="text-white/95 text-lg leading-relaxed drop-shadow-sm">{currentAgent.whatDoesItDo}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">Puntos de dolor</h3>
                <ul className="space-y-3">
                  {currentAgent.problemsSolved.map((problem, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-primary-light text-2xl mt-1 drop-shadow-md">•</span>
                      <span className="text-white/95 text-lg drop-shadow-sm">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">Cómo se integra</h3>
                <p className="text-white/95 text-lg leading-relaxed drop-shadow-sm">{currentAgent.integration}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">Funciones</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentAgent.modules.map((module, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-lg hover:bg-white/15 transition-colors">
                      <h4 className="font-bold text-white mb-2 drop-shadow-md">{module.title}</h4>
                      <p className="text-white/95 text-sm leading-relaxed drop-shadow-sm">{module.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={openChat}
                className="w-full py-4 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold text-xl rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Quiero contratar a {currentAgent.name}
              </button>


            </div>
          </div>
        </div>
      )}

      <div id="integrations-section" className="relative py-20 px-4 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/fondo-index.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary-dark/85 to-primary-dark/80" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center drop-shadow-lg">
            Integraciones personalizadas, nuestro punto más valioso.
          </h2>
          <p className="text-white drop-shadow-md text-lg max-w-3xl mx-auto text-center mb-12 leading-relaxed">
            Nos conectamos a tu stack: CRM, ERP, bases SQL, Shopify / MercadoLibre, y todas tus redes, además de tus APIs internas. Si tu sistema no tiene API, armamos conectores (o scraping seguro) para sacar los datos que haga falta. Hacemos la integración segura, con permisos y guardando siempre tu privacidad.
            <br />
            Contamos con un equipo especializado liderado por un ingeniero en software que se va a encargar de implementar IA en los sistemas a los que ya estás acostumbrado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {integrations.map((integration, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/20 backdrop-blur-xl border-2 border-white/30 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300"
              >
                <p className="text-white drop-shadow-sm text-lg leading-relaxed">{integration}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold text-white mb-8 drop-shadow-lg leading-relaxed">
              Si tu empresa tiene un sistema, nosotros lo hacemos hablar con nuestros agentes.
            </p>
            <button
              onClick={openChat}
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Contanos sobre tu infraestructura
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
