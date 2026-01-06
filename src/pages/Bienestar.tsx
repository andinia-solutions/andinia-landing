import { useState } from 'react';
import { CalendarCheck, Bell, FileText, RotateCcw, Calendar, BarChart3 } from 'lucide-react';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';
import { useChat } from '../context/ChatContext';

interface Product {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  modalTitle: string;
  whatDoes: string;
  painPoints: string;
  copyLanding: string;
  contextualInfo?: string;
}

const products: Product[] = [
  {
    id: 'booking',
    icon: CalendarCheck,
    title: 'Recepción automática e inteligente',
    description: 'Reservá cuando quieras, sin llamar',
    modalTitle: 'Recepción automática e inteligente: Reservá cuando quieras, sin llamar',
    whatDoes:
      'Permite que el cliente reserve su turno online 24/7 (IG, WhatsApp, o llamada). Asigna horario disponible, notifica confirmación automática, y evita solapamientos.',
    painPoints:
      'Tener que responder llamados todo el día. Perder clientes porque no contestaste de noche. Superposiciones de turnos.',
    copyLanding:
      'Agendá turnos 24/7. Que tus clientas reserven cuando quieran, y que se organice automáticamente.',
    contextualInfo: 'Qué hace: Incluye reserva por llamada.',
  },
  {
    id: 'turnos',
    icon: Calendar,
    title: 'Turnos Bajo Control',
    description: 'Agenda con cero errores y cero pisadas',
    modalTitle: 'Turnos Bajo Control: Agenda con cero errores y cero pisadas',
    whatDoes:
      'Digitaliza la agenda: calendario visual, historial, quién trabaja y qué servicio. Evita reservas dobles, organizá a tu equipo sin dramas y mirá la planificación del día con claridad.',
    painPoints:
      'Citas pisadas, caos de horarios, confusión con quién atiende qué, citas duplicadas.',
    copyLanding:
      'No más turnos pisados. Tu agenda ordenada, clara y con la info de tu equipo.',
  },
  {
    id: 'recordatorios',
    icon: Bell,
    title: 'Recordatorios Automáticos',
    description: 'Que no te falte nadie',
    modalTitle: 'Recordatorios Automáticos: Que no te falte nadie',
    whatDoes:
      'Envía recordatorios automáticos (SMS / WhatsApp / mensaje) antes del turno + opción para confirmar o reprogramar. Si cancela, ofrece el turno a otro cliente que llamó para atenderse ese día.',
    painPoints:
      'No-shows, cancelaciones de último minuto, huecos vacíos que te hacen perder plata.',
    copyLanding:
      '¿Tu cliente se olvidó la cita? Un agente les habla para confirmar o reprogramar siempre. Reduce drásticamente el ausentismo.',
    contextualInfo:
      'Función Extra: Si encuentra espacios libres los ofrece a los que se contacten ese día o estén en espera.',
  },
  {
    id: 'historial',
    icon: FileText,
    title: 'Seguimiento personalizado',
    description: 'Conocelos, no los trates como el resto',
    modalTitle: 'Seguimiento personalizado, no los trates como el resto',
    whatDoes:
      'Guarda la ficha de cada cliente: tratamientos anteriores, alergias, gustos, productos usados. Estos datos se los puede preguntar por WhatsApp o los puede cargar tu equipo.',
    painPoints:
      'Atención impersonal, tener que preguntar todo de nuevo, perder fidelidad por no recordar detalles.',
    copyLanding:
      'Tratamientos con memoria: guardate la info de tus clientes, alergias, preferencias, que cada atención sea mejor que la anterior.',
    contextualInfo: 'Datos clave: Guarda alergias, preferencias y tratamientos previos.',
  },
  {
    id: 'fidelizacion',
    icon: RotateCcw,
    title: 'Post-Cita y Fidelización',
    description: 'Que vuelvan (y traigan amigas)',
    modalTitle: 'Post-Cita y Fidelización: Que vuelvan (y traigan amigas)',
    whatDoes:
      'Después del turno, envía mensajes de seguimiento: "¿Cómo te sentiste en la sesión?", "Recordatorio para tu próximo tratamiento", "Oferta por cumpleaños". Segmenta clientas, gestioná bonos y tarjetas regalo.',
    painPoints:
      'Olvidarse de hacer seguimiento. Poca recurrencia. Olvidarse de recordar las próximas sesiones del tratamiento',
    copyLanding:
      'No se termina en el consultorio: post-cita, ofertas personalizadas y recordatorios para volver.',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Micro-Analytics',
    description: 'Sabés lo que anda y lo que no',
    modalTitle: 'Micro-Analytics: Sabés lo que anda y lo que no',
    whatDoes:
      'Panel web con métricas clave: % de asistencia, treatments más pedidos, días/hora pico, clientes fieles, tasa de cancelación, ingresos por tratamiento. Te sugiere cuándo abrir promociones. Además de un chat que conoce tu negocio y le podés preguntar "Qué tratamiento me trae más problemas?", "Que producto es el que más se llevan después de las sesiones?".',
    painPoints:
      'Trabajar a ciegas, no saber qué funciona o cuándo impulsar, decidir a ojo.',
    copyLanding:
      'Tus números, ordenados y con sentido. Decidí con datos, no porque "me parece".',
  },
];

export default function Bienestar() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { openChat } = useChat();

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleModalAction = () => {
    setSelectedProduct(null);
    openChat();
  };

  return (
    <div className="min-h-screen bg-black-corp">
      {/* MOBILE LAYOUT */}
      <div className="md:hidden mobile-video-section">
        {/* Video Header 16:9 */}
        <div className="mobile-video-header">
          <video
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://xuc1mufbju1siyiq.public.blob.vercel-storage.com/Bienestar.mp4"
              type="video/mp4"
            />
          </video>
          <div className="video-overlay" />
          <div className="video-content">
            <h1 className="video-title">
              Agenda Llena, Cero Ausencias
            </h1>
          </div>
        </div>

        {/* Cards Grid con fondo de imagen */}
        <div className="relative py-4">
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/fondo-cards-mobile.jpg)' }}
          />
          {/* Overlay difuminado */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 via-primary-dark/75 to-primary/70 backdrop-blur-sm" />

          {/* Título de sección */}
          <h2 className="relative z-10 text-center text-white text-lg font-bold pt-4 pb-2 px-4">
            Lo nuevo en IA disponible para tu industria
          </h2>

          {/* Cards */}
          <div className="relative z-10 mobile-cards-grid">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className="mobile-card bg-white/15 backdrop-blur-xl border border-white/20 rounded-xl hover:bg-white/25 transition-all duration-300 text-left shadow-lg"
                >
                  <div className="card-icon p-2 bg-primary/30 backdrop-blur-sm rounded-lg w-fit">
                    <Icon className="w-5 h-5 text-white drop-shadow-md" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-white-accent transition-colors drop-shadow-md">
                    {product.title}
                  </h3>
                  <p className="text-white/90 text-xs leading-relaxed drop-shadow-sm">{product.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT - Sin cambios */}
      <div className="hidden md:block relative min-h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://xuc1mufbju1siyiq.public.blob.vercel-storage.com/Bienestar.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-primary-dark/70 to-primary-dark/80" />

        <div className="relative z-10 flex flex-col justify-between pt-24 min-h-screen">
          <div className="text-center pt-4">
            <h1 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg">
              Agenda Llena, Cero Ausencias
            </h1>
            <p className="text-sm md:text-base text-white/90 drop-shadow-md max-w-3xl mx-auto">
              Automatizá tu recepción.
            </p>
          </div>

          <div className="px-4 pb-8 flex-1 flex items-end">
            <div className="max-w-7xl mx-auto w-full">
              <h2 className="text-center text-white text-xl font-bold mb-6 drop-shadow-lg">
                Lo nuevo en IA disponible para tu industria
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {products.map((product) => {
                  const Icon = product.icon;
                  return (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      className="group flex-1 min-w-[200px] max-w-xs p-5 bg-white/20 backdrop-blur-xl border-2 border-white/30 rounded-xl hover:bg-white/30 hover:border-white/40 transition-all duration-300 text-left shadow-xl"
                    >
                      <div className="p-3 bg-primary/30 backdrop-blur-sm rounded-lg w-fit mb-3 group-hover:bg-primary/40 transition-colors">
                        <Icon className="w-8 h-8 text-white drop-shadow-md" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white-accent transition-colors drop-shadow-md">
                        {product.title}
                      </h3>
                      <p className="text-white/95 text-sm leading-relaxed drop-shadow-sm">{product.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductModal
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        onAction={handleModalAction}
        title={selectedProduct?.modalTitle || ''}
        whatDoes={selectedProduct?.whatDoes || ''}
        painPoints={selectedProduct?.painPoints || ''}
        copyLanding={selectedProduct?.copyLanding || ''}
        contextualInfo={selectedProduct?.contextualInfo}
      />

      <Footer />
    </div>
  );
}
