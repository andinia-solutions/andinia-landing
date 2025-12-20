import { useState, useRef, useEffect } from 'react';
import { ChevronRight, Zap, MessageSquare, BarChart3, Headset, ChevronDown } from 'lucide-react';
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
    videoUrl: 'https://xuc1mufbju1siyiq.public.blob.vercel-storage.com/Cande.mp4',
  },
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
    // videoUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/preview',
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
    // videoUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/preview',
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
    // videoUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/preview',
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const arrowTimeoutRef = useRef<NodeJS.Timeout | null>(null);
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
        
        {/* Overlay sutil solo para contraste de texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-primary-dark/70 to-primary-dark/80" />

        <div className="relative z-10 flex-1 flex flex-col justify-end pt-24 pb-4 px-4">
          {/* Header con nombre y rol en la misma línea */}
          <div className="text-center mb-4 mt-8">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                {currentAgent.name}
              </h1>
              <span className="text-white/80 text-lg md:text-xl drop-shadow-md">
                {currentAgent.role}
              </span>
            </div>
          </div>

          {/* Navegación entre agentes */}
          <div className="flex justify-center items-center gap-4 mb-4">
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
                  className={`rounded-full transition-all duration-300 ${
                    idx === currentAgentIndex 
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
          <div className="h-[7vh] flex flex-col items-center justify-center gap-2 px-4 pb-2">
            <p className="text-white/90 text-sm md:text-base font-medium drop-shadow-md">
              ¿Cómo nos integramos con tus sistemas?
            </p>
            <ChevronDown className="w-6 h-6 text-white/80 animate-bounce drop-shadow-md" />
          </div>
        </div>
      </div>

      {expandedAgent === currentAgent.id && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-primary-dark to-primary/30 rounded-3xl p-8 max-w-3xl max-h-[90vh] overflow-y-auto w-full border-2 border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/20">
              <div>
                <h2 className="text-4xl font-bold text-white drop-shadow-lg">{currentAgent.name}</h2>
                <p className="text-white drop-shadow-md text-lg mt-1">{currentAgent.role}</p>
              </div>
              <button
                onClick={() => setExpandedAgent(null)}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6 text-white rotate-90" />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">Qué hace (en serio)</h3>
                <p className="text-white/95 text-lg leading-relaxed drop-shadow-sm">{currentAgent.whatDoesItDo}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">Problemas que ataca</h3>
                <ul className="space-y-3">
                  {currentAgent.problemsSolved.map((problem, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-white-accent text-2xl mt-1 drop-shadow-md">•</span>
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
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">Módulos de servicio</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentAgent.modules.map((module, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur-md rounded-xl p-5 border border-white/30 shadow-lg">
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

      <div className="relative py-20 px-4 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/fondo-index.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary-dark/85 to-primary-dark/80" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center drop-shadow-lg">
            Integraciones Personalizadas
          </h2>
          <p className="text-white drop-shadow-md text-lg max-w-3xl mx-auto text-center mb-12 leading-relaxed">
            Nos conectamos a tu stack: CRM, ERP, bases SQL, Shopify / MercadoLibre, telefonía VoIP y APIs internas.
            Si tu sistema no tiene API, armamos conectores (o scraping seguro) para sacar los datos que haga falta.
            Hacemos la integración segura, con permisos y guardando siempre tu privacidad.
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
