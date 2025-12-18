import { useState } from 'react';
import { Inbox, MessageSquare, ClipboardList, BarChart3, Heart } from 'lucide-react';
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
    id: 'inbox',
    icon: Inbox,
    title: 'Inbox Unificado',
    description: 'Todas tus conversaciones en un solo lugar',
    modalTitle: 'Inbox Unificado: Todas tus conversaciones en un solo lugar',
    whatDoes:
      'Junta WhatsApp, Instagram y Facebook/Messenger en una sola pantalla. Podés etiquetar, buscar clientes, ver historial, marcar "pendientes" y responder sin cambiar de app.',
    painPoints:
      'Perder chats, olvidarte de clientes "porque quedó en otra pestaña" o porque se mezcló con mensajes personales.',
    copyLanding: 'Un sólo lugar donde responder y organizar todos tus mensajes. Chau a estar atentos a cada red.',
    contextualInfo:
      'Contexto real: Tienda que trabaja sola y se satura los sábados. Jugueterías y ferreterías que reciben mensajes con fotos y pedidos raros.',
  },
  {
    id: 'auto-responder',
    icon: MessageSquare,
    title: 'Smart Auto-responder',
    description: 'IA que responde por vos pero con tu forma de hablar',
    modalTitle: 'Smart Auto-responder: IA que responde por vos pero con tu forma de hablar',
    whatDoes:
      'Responde automáticamente consultas típicas (precio, stock, horario, envío, combos, talles) con lenguaje local ("Sí, tenemos en talle L", "Te queda el envío hoy"). Si detecta intención de compra fuerte, pasa a humano al toque.',
    painPoints:
      '80% de mensajes repetidos. Clientes que se te van por tardar en responder. Consultas a las 23:30 = venta perdida.',
    copyLanding:
      '¿Cuánto sale? ¿Tenés stock? ¿Hacen envío? Esto y más respondido al instante. Cuando el cliente quiere hablar con vos, lo pasa directo a humano.',
    contextualInfo:
      'Tuviste que unir 3 dolores en uno: 80% de mensajes repetidos + Clientes que se van por tardar + Consultas fuera de horario.',
  },
  {
    id: 'order-assistant',
    icon: ClipboardList,
    title: 'Order Assistant',
    description: 'Pedidos bajo control',
    modalTitle: 'Order Assistant: Pedidos bajo control',
    whatDoes:
      'Captura pedidos desde WhatsApp/Instagram. Pregunta qué quiere, consulta stock, arma un resumen, genera un comprobante simple y hace seguimiento automático: "¿Pudiste hacer el pago?", "¿Coordinamos la entrega?".',
    painPoints:
      'Ventas perdidas por falta de seguimiento. Mensajes mezclados. Clientes que confirman y después nadie les escribe.',
    copyLanding:
      'Hacemos resumen del pedido, comprobante y seguimiento. Vos enfocáte en vender, no en perseguir chats.',
    contextualInfo:
      'Qué hace realmente: Incluye generar número de orden para retirar en tienda y enviar link de pago.',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Micro-Analytics',
    description: 'Los números que importan, sin abrir un Excel',
    modalTitle: 'Micro-Analytics: Los números que importan, sin abrir un Excel',
    whatDoes:
      'Panel web simple con métricas clave (tiempo promedio de respuesta, consultas por producto, horarios pico, dónde se pierden clientes) + un chat tipo "analista de marketing" donde el dueño puede preguntar.',
    painPoints: 'No tener idea real de qué funciona y qué no. Tomar decisiones "a ojo".',
    copyLanding: 'Datos que te dicen qué hacer. Sin descifrar hojas, sin fórmulas.',
    contextualInfo:
      'Preguntas del Chat Analista: "¿En qué parte se me caen los clientes?", "¿Qué producto me piden pero no tengo stock?", "¿En qué horas me conviene reforzar atención?".',
  },
  {
    id: 'loyalty',
    icon: Heart,
    title: 'Post-Sale & Loyalty Agent',
    description: 'Que vuelvan. Y que recomienden.',
    modalTitle: 'Post-Sale & Loyalty Agent: Que vuelvan. Y que recomienden.',
    whatDoes:
      'Después de la venta, pide feedback real ("¿Cómo te quedó?"). Genera alertas si un cliente quedó disconforme. Arma campañas 1 a 1 y detecta oportunidades de re-compra automáticas.',
    painPoints:
      'No hacer seguimiento. No colectar feedback real. No aprovechar la base de clientes. Perder clientes que "nunca más escribieron".',
    copyLanding:
      'Seguimos hablando con tus clientes por vos: feedback, ofertas, recordatorios y campañas segmentadas. Todo para que vuelvan… y recomienden.',
    contextualInfo:
      'Qué hace: Incluye armar fichas de clientes (Preferencias, Historial, Probabilidad de re-compra) automáticamente.',
  },
];

export default function Comercios() {
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="group p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 text-left h-full"
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
