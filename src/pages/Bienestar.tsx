import { useState } from 'react';
import { CalendarCheck, Bell, FileText, RotateCcw, Calendar, BarChart3 } from 'lucide-react';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';

interface BienestarProps {
  onOpenChat: () => void;
}

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
    title: 'Booking Assistant',
    description: 'Reservá cuando quieras, sin llamar',
    modalTitle: 'Booking Assistant: Reservá cuando quieras, sin llamar',
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
    description: 'Agenda cero errores, cero pisadas',
    modalTitle: 'Turnos Bajo Control: Agenda cero errores, cero pisadas',
    whatDoes:
      'Digitaliza la agenda: calendario visual, historial, quién trabaja y qué servicio. Evita double-booking, organiza a tu equipo sin drama y permite ver todo el día con claridad.',
    painPoints:
      'Citas pisadas, caos de horarios, confusión con quién atiende qué, citas duplicadas.',
    copyLanding:
      'No más turnos pisados. Tu agenda ordenada, clara y con la info de tu equipo.',
  },
  {
    id: 'recordatorios',
    icon: Bell,
    title: 'Auto-Recordatorios',
    description: 'Que no te falte nadie',
    modalTitle: 'Auto-Recordatorios: Que no te falte nadie',
    whatDoes:
      'Envía recordatorios automáticos (SMS / WhatsApp / mensaje) antes del turno + opción para confirmar o reprogramar. Si cancela, ofrece el turno a otro cliente en espera.',
    painPoints:
      'No-shows, cancelaciones de último minuto, huecos vacíos que te hacen perder plata.',
    copyLanding:
      '¿Tu cliente se olvidó la cita? Un agente les habla para confirmar o reprogramar. Reduce drásticamente el ausentismo.',
    contextualInfo:
      'Función Extra: Si encuentra espacios libres los ofrece a los que se contacten ese día o estén en espera.',
  },
  {
    id: 'historial',
    icon: FileText,
    title: 'Cliente + Historial',
    description: 'Conocelos, no los trates en limpio',
    modalTitle: 'Cliente + Historial: Conocelos, no los trates en limpio',
    whatDoes:
      'Guarda ficha de cada cliente: tratamientos anteriores, alergias, gustos, productos usados. Estos datos se los puede preguntar por WhatsApp o los puede cargar tu equipo.',
    painPoints:
      'Atención impersonal, tener que preguntar todo de nuevo, perder fidelidad por no recordar detalles.',
    copyLanding:
      'Tratamientos con memoria: guardate la info de tus clientes, alergias, preferencias, que cada atención sea mejor que la anterior.',
    contextualInfo: 'Datos clave: Guarda alergias, preferencias y tratamientos previos.',
  },
  {
    id: 'fidelizacion',
    icon: RotateCcw,
    title: 'Post-Cita & Fidelización',
    description: 'Que vuelvan (y traigan amigas)',
    modalTitle: 'Post-Cita & Fidelización: Que vuelvan (y traigan amigas)',
    whatDoes:
      'Después del turno, envía mensajes de seguimiento: "¿Te gustó?", "Recordatorio para tu próximo tratamiento", "Oferta por cumpleaños". Segmenta clientas, gestiona bonos/tarjetas regalo.',
    painPoints:
      'Olvidarse de hacer seguimiento. Poca recurrencia. Bajos ingresos recurrentes.',
    copyLanding:
      'No se termina en la silla: post-cita, ofertas personalizadas y recordatorios para volver.',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Micro-Analytics',
    description: 'Sabés lo que anda y lo que no',
    modalTitle: 'Micro-Analytics: Sabés lo que anda y lo que no',
    whatDoes:
      'Panel web con métricas clave: % de asistencia, treatments más pedidos, días/hora pico, clientes fieles, tasa de cancelación, ingresos por tratamiento. Te sugiere cuándo abrir promociones.',
    painPoints:
      'Trabajar a ciegas, no saber qué funciona o cuándo impulsar, decidir a ojo.',
    copyLanding:
      'Tus números, ordenados y con sentido. Decidí con datos, no porque "me parece".',
  },
];

export default function Bienestar({ onOpenChat }: BienestarProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleModalAction = () => {
    setSelectedProduct(null);
    onOpenChat();
  };

  return (
    <div className="min-h-screen bg-black-corp">
      <div className="relative min-h-screen flex flex-col">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Overlay sutil solo para contraste de texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-primary-dark/70 to-primary-dark/80" />

        <div className="relative z-10 flex-1 flex flex-col justify-between pt-24">
<<<<<<< Updated upstream
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Agenda Llena, Cero Ausencias
            </h1>
            <p className="text-xl text-white-soft max-w-3xl mx-auto">
=======
          <div className="text-center pt-4">
            <h1 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg">
              Agenda Llena, Cero Ausencias
            </h1>
            <p className="text-sm md:text-base text-white/90 drop-shadow-md max-w-3xl mx-auto">
>>>>>>> Stashed changes
              Automatizá tu recepción.
            </p>
          </div>

          <div className="px-4 pb-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {products.map((product) => {
                  const Icon = product.icon;
                  return (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(product)}
<<<<<<< Updated upstream
                      className="group flex-1 min-w-[200px] max-w-xs p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 text-left"
                    >
                      <Icon className="w-8 h-8 text-primary mb-2" />
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-white-soft text-sm">{product.description}</p>
=======
                      className="group flex-1 min-w-[200px] max-w-xs p-5 bg-white/20 backdrop-blur-xl border-2 border-white/30 rounded-xl hover:bg-white/30 hover:border-white/40 transition-all duration-300 text-left shadow-xl"
                    >
                      <div className="p-3 bg-primary/30 backdrop-blur-sm rounded-lg w-fit mb-3 group-hover:bg-primary/40 transition-colors">
                        <Icon className="w-8 h-8 text-white drop-shadow-md" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white-accent transition-colors drop-shadow-md">
                        {product.title}
                      </h3>
                      <p className="text-white/95 text-sm leading-relaxed drop-shadow-sm">{product.description}</p>
>>>>>>> Stashed changes
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

      <Footer onOpenChat={onOpenChat} />
    </div>
  );
}
