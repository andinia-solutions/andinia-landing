import { useState } from 'react';
import { Phone, Calendar, ShoppingBag, Heart } from 'lucide-react';
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
}

const products: Product[] = [
  {
    id: 'voice-bot',
    icon: Phone,
    title: 'Agente Omnicanal',
    description: 'El teléfono que no te deja colgado',
    modalTitle: 'Agente Omnicanal: El teléfono que no te deja colgado',
    whatDoes:
      'Agente de voz IA que atiende el teléfono 24/7. Toma reservas, coordina pedidos, responde dudas sobre el menú (celíacos, precios, promos), disponibilidad y horarios. Además te filtra llamadas comerciales que molestan.',
    painPoints:
      'Llamadas perdidas en hora pico, staff dividiéndose entre atender y servir, pedidos mal tomados.',
    copyLanding: 'Querés alguien que sólo se encargue de atender el teléfono? Contratalo por menos del 5% de un sueldo.',
  },
  {
    id: 'pedido-omnicanal',
    icon: ShoppingBag,
    title: 'Pedido Omnicanal',
    description: 'Orden correcta, cocina feliz',
    modalTitle: 'Pedido Omnicanal: Orden correcta, cocina feliz',
    whatDoes:
      'Centraliza pedidos de WhatsApp, IG, Web y Teléfono. El agente responde automáticamente sobre platos, ingredientes y normaliza el pedido para cocina. Coordina delivery y calcula tiempos.',
    painPoints: 'Pedidos mal entendidos. Cocina recibiendo instrucciones confusas. Clientes que preguntan lo mismo mil veces.',
    copyLanding: 'Un solo flujo para todos los pedidos. Menos errores, menos devoluciones.',
  },
  {
    id: 'reservas',
    icon: Calendar,
    title: 'Gestión de turnos y reservas',
    description: 'Tu salón siempre lleno',
    modalTitle: 'Gestión de turnos y reservas: Tu salón ordenado y siempre lleno',
    whatDoes:
      'Sistema completo que une reservas (IG/WhatsApp/Web) con disponibilidad en tiempo real. Lista de espera que rellena huecos sola ante cancelación. Panel visual del salón. Opción de pedir seña.',
    painPoints:
      'Mesas vacías por no asistencias, reservas dobles, puerta colapsada y horas perdidas coordinando a mano.',
    copyLanding: 'Mirá el estado de tu salón en un panel web. Rellenamos mesas cuando alguien se baja de la reserva.',
  },
  {
    id: 'feedback',
    icon: Heart,
    title: 'Fidelización de comensales',
    description: 'Que vuelvan (y traigan un amigo)',
    modalTitle: 'Fidelización de comensales: Que vuelvan (y traigan un amigo)',
    whatDoes:
      'Pide feedback post-visita ("¿Cómo estuvo la comida?"; "Que te pareció la atención de nuestro equipo?"). Ofrece y envía campañas con descuentos/promos/beneficios por cumpleaños o para "Traé un amigo". Segmenta por frecuencia/ticket/gustos y envía campañas inteligentes.',
    painPoints:
      'Clientes que no vuelven. Base sin segmentar. Promos genéricas que no funcionan.',
    copyLanding: 'Seguimos la conversación después de la cuenta: Tus clientes se sienten acompañados y vos obtenés info muy valiosa.',
  },
];

export default function Gastronomia() {
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
              src="https://res.cloudinary.com/dl5qhxy7n/video/upload/v1769278373/Gastronomia_uzmnnw.webm"
              type="video/webm"
            />
          </video>
          <div className="video-overlay" />
          <div className="video-content">
            <h1 className="video-title">
              Llená Tus Mesas
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
            src="https://res.cloudinary.com/dl5qhxy7n/video/upload/v1769277739/Gastronomia_meefpd.webm"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-primary-dark/70 to-primary-dark/80" />

        <div className="relative z-10 flex flex-col justify-between pt-24 min-h-screen">
          <div className="text-center pt-4">
            <h1 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg">
              Llená Tus Mesas
            </h1>
            <p className="text-sm md:text-base text-white/90 drop-shadow-md max-w-3xl mx-auto">
              Y olvidate del teléfono que suena sin parar.
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
                      className="group flex-1 min-w-[220px] max-w-xs p-5 bg-white/20 backdrop-blur-xl border-2 border-white/30 rounded-xl hover:bg-white/30 hover:border-white/40 transition-all duration-300 text-left shadow-xl"
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
      />

      <Footer />
    </div>
  );
}
