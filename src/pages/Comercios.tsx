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
    title: 'Respuestas 24/7',
    description: 'IA que responde por vos pero con tu forma de hablar.',
    modalTitle: 'Respuestas 24/7: IA que responde por vos pero con tu forma de hablar',
    whatDoes:
      'Responde automáticamente consultas típicas (precio, stock, horario, envío, combos, talles) con lenguaje local ("Sí, tenemos en talle L", "El envío sale hoy"). Si detecta intención de compra fuerte, deriva al humano en seguida para que cierre la venta.',
    painPoints:
      '80% de mensajes repetitivos. Clientes que se te van por tardar en responder. Consultas a las 23:30 = venta perdida.',
    copyLanding:
      '¿Cuánto sale? ¿Tenés stock? ¿Hacen envío? Esto y más respondido al instante. Cuando el cliente quiere hablar con vos, lo deriva rápidamente a tu equipo.',
    contextualInfo:
      'Resuelve 3 dolores en uno: 80% de mensajes repetitivos + Clientes que se van por tardar + Consultas fuera de horario.',
  },
  {
    id: 'order-assistant',
    icon: ClipboardList,
    title: 'Asistente de ordenes',
    description: 'Pedidos bajo control',
    modalTitle: 'Asistente de ordenes: Pedidos bajo control',
    whatDoes:
      'Captura pedidos desde WhatsApp/Instagram. Pregunta qué quiere, consulta stock, arma un resumen, genera un comprobante simple y hace seguimiento automático: "¿Pudiste hacer el pago?", "¿Coordinamos la entrega?".',
    painPoints:
      'Ventas perdidas por falta de seguimiento. Mensajes mezclados. Clientes que confirman y después nadie les escribe. Ahora si el cliente está seguro, compra directo y sin perder tiempo.',
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
      'Panel web simple con métricas clave (tiempo promedio de respuesta, consultas por producto, horarios pico, dónde se pierden clientes) + un chat tipo "analista de marketing" donde el dueño puede preguntar cosas cómo: ¿Cuáles son los productos que más vendo? ¿Donde estoy perdiendo clientes? ¿Qué es lo que me trae más quejas?',
    painPoints: 'No tener idea real de qué funciona y qué no. Tomar decisiones "a ojo".',
    copyLanding: 'Datos que te dicen qué hacer. Sin descifrar hojas, sin fórmulas.',
    contextualInfo:
      'Preguntas del Chat Analista: "¿En qué parte se me caen los clientes?", "¿Qué producto me piden pero no tengo stock?", "¿En qué horas me conviene reforzar atención?".',
  },
  {
    id: 'loyalty',
    icon: Heart,
    title: 'Seguimiento post-venta y envío de campañas',
    description: 'Que vuelvan. Y que recomienden.',
    modalTitle: 'Seguimiento post-venta y envío de campañas: Que vuelvan. Y que recomienden.',
    whatDoes:
      'Después de la venta, pide feedback real ("¿Cómo te quedó?"; "Que te pareció la calidad del producto?"). Genera alertas si un cliente quedó disconforme. Arma campañas 1 a 1 y detecta oportunidades de re-compra automáticas.',
    painPoints:
      'No hacer seguimiento. No colectar feedback real. No aprovechar la base de clientes. Perder clientes que "nunca más escribieron".',
    copyLanding:
      'Seguimos hablando con tus clientes por vos: feedback, ofertas, recordatorios y campañas segmentadas. Todo para que vuelva, recomienden y tengan una experiencia al cliente que nadie más les ofrece.',
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
              src="https://res.cloudinary.com/dl5qhxy7n/video/upload/v1769278373/Comercios_pptq1z.webm"
              type="video/webm"
            />
          </video>
          <div className="video-overlay" />
          <div className="video-content">
            <h1 className="video-title">
              IA Simple para Comercios
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
            src="https://res.cloudinary.com/dl5qhxy7n/video/upload/v1769277739/Comercios_k9yidv.webm"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-primary-dark/70 to-primary-dark/80" />

        <div className="relative z-10 flex flex-col justify-between pt-24 min-h-screen">
          <div className="text-center pt-4">
            <h1 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg">
              IA Simple para Comercios
            </h1>
            <p className="text-sm md:text-base text-white/90 drop-shadow-md max-w-3xl mx-auto">
              Si vendés mucho por chat, ahora sólo vas a responder lo que importa.
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
