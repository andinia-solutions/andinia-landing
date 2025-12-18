import { useState, useRef, useEffect } from 'react';
import { ChevronRight, Zap, MessageSquare, BarChart3, Headset } from 'lucide-react';
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
}

const agents: Agent[] = [
  {
    id: 'marti',
    name: 'MARTI',
    role: 'Content Factory & Video Spokesperson',
    icon: Zap,
    pitch: 'Tu cara visible. Creo contenido, guiones y videos con avatares hiper-realistas para que tu marca hable sola.',
    whatDoesItDo:
      'Marti crea el contenido que hace que la gente pare el scroll. Armamos guiones, calendarios y videos de Avatares IA hablando por vos — esos clips hiper-realistas y humanos que antes solo podían pagar las grandes productoras. Lo hacemos con herramientas IA topo-de-gama, lo pulimos con guion profesional y lo entregamos listo para publicar.',
    problemsSolved: [
      'Falta de contenido profesional sin el costo de una productora.',
      'Mensajes inconsistentes entre canales.',
      'Poca llegada orgánica y baja captación de leads.',
    ],
    integration:
      'Traemos tu material (logo, tono, fotos, brief) → generamos 3 pruebas → aprobás una → hacemos batch de contenido mensual o por pieza → lo programamos o te lo entregamos listo.',
    modules: [
      {
        title: 'Contenido para Redes',
        description:
          'Guiones, ideas, copys y piezas listas para publicar para Reels, TikToks y videos explicativos.',
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
    cta: 'Generá story-telling y dale esa calidad profesional que antes llevaba tiempo, rápidamente.',
  },
  {
    id: 'cande',
    name: 'CANDE',
    role: 'Sales Agent 24/7 & CX Automation',
    icon: MessageSquare,
    pitch: 'Atiendo, califico y convierto. Soy la vendedora que no duerme. Recupero leads, agendo demos y hago seguimiento.',
    whatDoesItDo:
      'Cande atiende chats y llamadas, califica el lead y hace el seguimiento para convertir. No solo responde: propone la oferta correcta, agenda demos, envía material y, si el cliente está listo, lo pasa a facturación. Además orquesta secuencias de follow-up personalizadas como si las hubiera escrito un vendedor humano.',
    problemsSolved: [
      'Leads que se enfrían porque nadie los sigue.',
      'Vendedores con poca disponibilidad para responder fuera de horario.',
      'Falta de personalización en follow-ups.',
    ],
    integration:
      'Se conecta a tu WhatsApp Business/Instagram/Facebook y (si lo requieres) a tu CRM. Cande guarda la conversación, etiqueta el lead y dispara la secuencia que acuerdes.',
    modules: [
      {
        title: 'Sales Agent 24/7',
        description:
          'Atención, calificación de leads, explicación de productos y agenda de llamadas/visitas por WhatsApp, IG y Facebook.',
      },
      {
        title: 'Follow-Up & Nurturing IA',
        description: 'Secuencias personalizadas para leads fríos y recuperación de leads.',
      },
      {
        title: 'CX Personalizada',
        description:
          'Mantiene el vínculo con el cliente (promociones, aniversarios, encuestas) y recupera carritos.',
      },
    ],
    cta: 'Basta de dejar clientes colgados, que tu equipo se encargue de cerrar a los que tienen intención de compra.',
  },
  {
    id: 'marcos',
    name: 'MARCOS',
    role: 'BI-as-a-Service & Predictive Insights',
    icon: BarChart3,
    pitch: 'Tus datos trabajando para vos. Dashboards, alertas de stock y predicción de demanda en tiempo real.',
    whatDoesItDo:
      'Marcos transforma los datos en decisiones: arma dashboards por rol, automatiza reportes, crea alertas y modelos predictivos. Ya no tenés que pedir informes, Marcos te los manda y te avisa cuando algo se rompe. Conecta fuentes: CRM, Google Ads, WhatsApp logs, base de ventas, ERP.',
    problemsSolved: [
      'Decisiones "a ojo" sin datos reales.',
      'Reuniones largas por falta de reportes accionables.',
      'Incapacidad para detectar problemas temprano.',
    ],
    integration:
      'Conectamos APIs o bases (SQL, Postgres, hojas), limpiamos datos, armamos las visuales y te damos acceso web. Marcos también puede exportar informes listos para reunión o preparar slides.',
    modules: [
      {
        title: 'BI-as-a-Service',
        description:
          'Paneles simples para ver ventas, operaciones, soporte y rendimiento del equipo en un vistazo. Incluye Reportes diarios/semanales/mensuales y Alertas.',
      },
      {
        title: 'Base de Datos Consultable por Mensaje',
        description:
          'Podés hablarle a tus datos (ventas, rankings, proyecciones) y te responde en el chat, como tener un analista 24/7.',
      },
      {
        title: 'Anomaly Detector',
        description:
          'Detecta comportamientos raros (caídas en ventas, aumento de reclamos, métricas fuera de rango) y avisa antes que sea un drama.',
      },
      {
        title: 'Predictive Insights',
        description:
          'Predice tendencias importantes: ventas, churn, demanda y recomienda la acción a priorizar.',
      },
    ],
    cta: 'Tus datos a un mensaje de distancia, dejá que la IA te muestre lo que necesitás para tomar decisiones optimizadas.',
  },
  {
    id: 'joel',
    name: 'JOEL',
    role: 'Soporte Técnico IA & IT Assistant',
    icon: Headset,
    pitch: 'Soporte técnico nivel 1 y guías paso a paso. Resuelvo tickets internos y capacito a tus nuevos empleados.',
    whatDoesItDo:
      'Joel es el primero en contestar cuando algo no anda. Guía al usuario paso a paso, aplica checks automáticos y resuelve lo que puede. Para problemas más profundos, prepara el diagnóstico y lo pasa al especialista correcto con toda la info ya cargada (logs, pasos ya probados, contexto).',
    problemsSolved: [
      'Soporte lento que frustra a clientes y empleados.',
      'Repetición de tickets por falta de documentación clara.',
      'Onboarding lento de nuevos empleados por procesos mal documentados.',
    ],
    integration:
      'Se conecta al sistema de tickets, puede ejecutar scripts remotos (según permisos), agrega entradas automáticas y actualiza la base de conocimientos con cada caso resuelto para que mejore con el tiempo.',
    modules: [
      {
        title: 'Soporte Técnico IA',
        description:
          'Solución de FAQs técnicas, reinicios guiados y derivación a técnico humano con resumen claro.',
      },
      {
        title: 'IT Assistant',
        description:
          'Guías paso a paso personalizadas, diagnósticos automáticos y tutoriales para usar cualquier sistema interno.',
      },
      {
        title: 'Helpdesk IA Interno',
        description:
          'Búsqueda de políticas, procesos (vacaciones, licencias) y guías para nuevos empleados con respuestas inmediatas 24/7.',
      },
    ],
    cta: 'Tené a Joel siempre disponible para preguntarle lo que quieras.',
  },
];

const integrations = [
  'Sistemas de gestión (SAP, Tango, Odoo, Bejerman)',
  'CRMs corporativos (Salesforce, HubSpot, Zoho)',
  'Bases SQL, MySQL, PostgreSQL y APIs internas',
  'Sistemas legacy sin API: scraping estructurado + conectores',
  'Call centers y telefonía VoIP',
  'Plataformas de e-commerce y tickets',
];

export default function Agents() {
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);
  const [showNextArrow, setShowNextArrow] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const arrowTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { openChat } = useChat();

  const currentAgent = agents[currentAgentIndex];

  const nextAgent = () => {
    setCurrentAgentIndex((prev) => (prev + 1) % agents.length);
    setShowNextArrow(false);
    if (arrowTimeoutRef.current) clearTimeout(arrowTimeoutRef.current);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      if (arrowTimeoutRef.current) clearTimeout(arrowTimeoutRef.current);
      setShowNextArrow(false);

      arrowTimeoutRef.current = setTimeout(() => {
        setShowNextArrow(true);
      }, 55000);
    }

    return () => {
      if (arrowTimeoutRef.current) clearTimeout(arrowTimeoutRef.current);
    };
  }, [currentAgentIndex]);

  return (
    <div className="min-h-screen bg-white-soft">
      <div className="min-h-[calc(100vh-5rem)] flex flex-col justify-center pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="relative w-full h-[calc(100vh-10rem)] bg-gradient-to-br from-primary-dark to-primary/20 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/20">
              <div className="absolute top-0 left-0 right-0 h-[8%] bg-gradient-to-b from-black/40 to-transparent flex items-center px-8 z-10">
                <div>
                  <h2 className="text-4xl font-bold text-white">{currentAgent.name}</h2>
                  <p className="text-white-soft text-lg">{currentAgent.role}</p>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pt-12">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[75%] h-[70%] object-cover rounded-2xl"
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[22%] bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between px-8 z-20">
                <div className="flex-1">
                  <p className="text-white text-xl font-semibold mb-4">
                    {currentAgent.pitch}
                  </p>
                  <button
                    onClick={() => setExpandedAgent(expandedAgent === currentAgent.id ? null : currentAgent.id)}
                    className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all duration-300 shadow-lg"
                  >
                    Ver capacidades completas
                  </button>
                </div>
              </div>

              <button
                onClick={nextAgent}
                className={`absolute right-8 bottom-1/2 transform translate-y-1/2 z-30 transition-all duration-500 flex flex-col items-center ${
                  showNextArrow
                    ? 'opacity-100 scale-125'
                    : 'opacity-60 scale-100 hover:opacity-100 hover:scale-110'
                }`}
                onMouseEnter={() => setShowNextArrow(true)}
                onMouseLeave={() => !showNextArrow && setShowNextArrow(false)}
              >
                <ChevronRight className={`text-primary transition-all duration-300 ${
                  showNextArrow ? 'w-16 h-16' : 'w-8 h-8'
                }`} />
                {showNextArrow && (
                  <span className="text-primary text-lg font-bold mt-3 whitespace-nowrap animate-pulse">
                    Conocé a {agents[(currentAgentIndex + 1) % agents.length].name}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-3">
            {agents.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentAgentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentAgentIndex ? 'bg-primary w-8' : 'bg-white-accent hover:bg-primary'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {expandedAgent === currentAgent.id && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-primary-dark to-primary/20 rounded-3xl p-8 max-w-3xl max-h-[90vh] overflow-y-auto w-full">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-4xl font-bold text-white">{currentAgent.name}</h2>
                <p className="text-white-soft text-lg">{currentAgent.role}</p>
              </div>
              <button
                onClick={() => setExpandedAgent(null)}
                className="text-white hover:text-primary transition-colors"
              >
                <ChevronRight className="w-8 h-8 rotate-90" />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Qué hace (en serio)</h3>
                <p className="text-white-soft text-lg leading-relaxed">{currentAgent.whatDoesItDo}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Problemas que ataca</h3>
                <ul className="space-y-3">
                  {currentAgent.problemsSolved.map((problem, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-primary text-2xl mt-1">•</span>
                      <span className="text-white-soft text-lg">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Cómo se integra</h3>
                <p className="text-white-soft text-lg leading-relaxed">{currentAgent.integration}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Módulos de servicio</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentAgent.modules.map((module, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <h4 className="font-semibold text-white mb-2">{module.title}</h4>
                      <p className="text-white-soft text-sm">{module.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={openChat}
                className="w-full py-4 bg-white text-primary hover:bg-white-soft font-bold text-xl rounded-xl transition-all duration-300 shadow-lg"
              >
                Quiero contratar a {currentAgent.name}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative py-20 px-4 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/fondo-index.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 via-primary-dark/75 to-primary/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Integraciones Personalizadas
          </h2>
          <p className="text-white-soft text-lg max-w-3xl mx-auto text-center mb-12">
            Nos conectamos a tu stack: CRM, ERP, bases SQL, Shopify / MercadoLibre, telefonía VoIP y APIs internas.
            Si tu sistema no tiene API, armamos conectores (o scraping seguro) para sacar los datos que haga falta.
            Hacemos la integración segura, con permisos y guardando siempre tu privacidad.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {integrations.map((integration, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl"
              >
                <p className="text-white-soft text-lg">{integration}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold text-white-soft mb-8">
              Si tu empresa tiene un sistema, nosotros lo hacemos hablar con nuestros agentes.
            </p>
            <button
              onClick={openChat}
              className="px-8 py-4 bg-white text-primary hover:bg-white-soft font-semibold rounded-xl transition-colors"
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
