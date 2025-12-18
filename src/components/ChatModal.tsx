import { X, Send } from 'lucide-react';
import { useState } from 'react';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-6">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col border-2 border-primary/20">
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">Agente de Ventas AndinIA</h3>
            <p className="text-sm text-white/90">Online</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white-soft">
          <div className="bg-white p-4 rounded-lg shadow-md border border-primary/10">
            <p className="text-black-corp leading-relaxed">
              ¡Hola! Soy el agente de ventas de AndinIA. ¿Cómo puedo ayudarte hoy?
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md border border-primary/10">
            <p className="text-black-corp/90 text-sm leading-relaxed">
              Podés contarme sobre tu negocio y juntos encontraremos la mejor solución de automatización con IA para vos.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t-2 border-primary/20 bg-white rounded-b-2xl">
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 px-4 py-3 border-2 border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white p-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
