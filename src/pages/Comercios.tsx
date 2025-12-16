import { useState } from 'react';
import { Inbox, MessageSquare, ClipboardList, BarChart3, X } from 'lucide-react';
import Footer from '../components/Footer';

interface ComerciosProps {
  onOpenChat: () => void;
}

interface Product {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  fullDescription: string;
}

const products: Product[] = [
  {
    id: 'inbox',
    icon: Inbox,
    title: 'Inbox Unificado',
    description: 'Todas tus conversaciones en un solo lugar',
    fullDescription:
      'WhatsApp, Instagram y Messenger en una sola pantalla. Chau tener abiertas 5 páginas simultáneas. Gestioná todos tus canales de comunicación desde un único lugar.',
  },
  {
    id: 'auto-responder',
    icon: MessageSquare,
    title: 'Smart Auto-responder',
    description: 'IA que responde por vos',
    fullDescription:
      'Precios, stock y horarios respondidos al instante con tu tono. Si quieren comprar, pasa a un humano. Tu asistente virtual trabaja 24/7.',
  },
  {
    id: 'order-assistant',
    icon: ClipboardList,
    title: 'Order Assistant',
    description: 'Pedidos bajo control',
    fullDescription:
      'La IA arma el resumen, consulta stock y genera el comprobante. Vos solo despachás. Reducí errores y acelerá tu proceso de ventas.',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Micro-Analytics',
    description: 'Tus números sin Excel',
    fullDescription:
      'Detectá horarios pico, los productos más buscados y cuáles te dan problemas. Tomá decisiones basadas en datos reales.',
  },
];

export default function Comercios({ onOpenChat }: ComerciosProps) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const scrollToProduct = (id: string) => {
    setSelectedProduct(id);
    const element = document.getElementById(`product-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
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
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
        </video>

        <div className="relative z-10 pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                IA Simple para Comercios
              </h1>
              <p className="text-xl text-white-soft max-w-3xl mx-auto">
                Que venden por chat. Respondé sólo lo que importa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <button
                    key={product.id}
                    onClick={() => scrollToProduct(product.id)}
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

      <div className="bg-white-soft">
        {products.map((product) => {
          const Icon = product.icon;
          return (
            <div
              key={product.id}
              id={`product-${product.id}`}
              className={`py-20 px-4 ${
                selectedProduct === product.id ? 'bg-white-accent/30' : ''
              } transition-colors duration-300`}
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Icon className="w-16 h-16 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl font-bold text-black-corp mb-4">
                      {product.title}
                    </h2>
                    <p className="text-xl text-black-corp/80 mb-6">
                      {product.description}
                    </p>
                    <p className="text-lg text-black-corp/70 leading-relaxed">
                      {product.fullDescription}
                    </p>
                    <button
                      onClick={onOpenChat}
                      className="mt-8 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors duration-300"
                    >
                      Quiero saber más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer onOpenChat={onOpenChat} />
    </div>
  );
}
