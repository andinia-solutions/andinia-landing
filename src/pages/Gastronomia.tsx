import { useState } from 'react';
import { Phone, Calendar, ShoppingBag, Heart } from 'lucide-react';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';

interface GastronomiaProps {
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
}

const products: Product[] = [
  {
    id: 'voice-bot',
    icon: Phone,
    title: 'Voice-Bot Omnicanal',
    description: 'El teléfono que no te deja colgado',
    modalTitle: 'Voice-Bot Omnicanal: El teléfono que no te deja colgado',
    whatDoes:
      'Agente de voz IA que atiende 24/7. Toma reservas, coordina pedidos, responde dudas sobre el menú (celíacos, precios, promos), disponibilidad y horarios. Filtra llamadas comerciales.',
    painPoints:
      'Llamadas perdidas en hora pico, staff dividiéndose entre atender y servir, pedidos mal tomados.',
    copyLanding: 'Querés alguien que sólo se encargue de atender el teléfono? Contratalo por menos del 5% de un sueldo.',
  },
  {
    id: 'reservas',
    icon: Calendar,
    title: 'Turnero & Reservas',
    description: 'Tu salón siempre lleno',
    modalTitle: 'Turnero & Mapa de Mesas: Tu salón ordenado y siempre lleno',
    whatDoes:
      'Sistema completo que une reservas (IG/WhatsApp/Web) con disponibilidad en tiempo real. Lista de espera que rellena huecos sola ante cancelación. Panel visual del salón. Opción de pedir seña.',
    painPoints:
      'Mesas vacías por no asistencias, doble reservas, puerta colapsada y horas perdidas coordinando a mano.',
    copyLanding: 'Mirá el estado de tu salón en un panel. Rellenamos mesas cuando alguien se baja de la reserva.',
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
    id: 'feedback',
    icon: Heart,
    title: 'Feedback Agent',
    description: 'Que vuelvan (y traigan un amigo)',
    modalTitle: 'Feedback Agent: Que vuelvan (y traigan un amigo)',
    whatDoes:
      'Pide feedback post-visita. Ofrece descuento/promo/beneficio por cumpleaños o para "Traé un amigo". Segmenta por frecuencia/ticket/gustos y envía campañas inteligentes.',
    painPoints:
      'Clientes que no vuelven. Base sin segmentar. Promos genéricas que no funcionan.',
    copyLanding: 'Seguimos la conversación después de la cuenta: promos específicas que funcionan.',
  },
];

export default function Gastronomia({ onOpenChat }: GastronomiaProps) {
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
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
            type="video/mp4"
          />
        </video>

        <div className="relative z-10 flex-1 flex flex-col justify-between pt-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Llená Tus Mesas
            </h1>
            <p className="text-xl text-white-soft max-w-3xl mx-auto">
              Y olvidate del teléfono que suena sin parar.
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
                      className="group flex-1 min-w-[220px] max-w-xs p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 text-left"
                    >
                      <Icon className="w-8 h-8 text-primary mb-2" />
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-white-soft text-sm">{product.description}</p>
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

      <Footer onOpenChat={onOpenChat} />
    </div>
  );
}
