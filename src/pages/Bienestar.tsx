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
      <div className="relative min-h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            type="video/mp4"
          />
        </video>

        <div className="relative z-10 pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Agenda Llena, Cero Ausencias
              </h1>
              <p className="text-xl text-white-soft max-w-3xl mx-auto">
                Automatizá tu recepción.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="group p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 text-left"
                  >
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-white-soft">{product.description}</p>
                  </button>
                );
              })}
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
