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

      <div className="relative bg-white-soft rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
        <div className="bg-primary text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">Agente de Ventas AndinIA</h3>
            <p className="text-sm text-white-soft/80">Online</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary-dark rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-black-corp">
              ¡Hola! Soy el agente de ventas de AndinIA. ¿Cómo puedo ayudarte hoy?
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-black-corp text-sm">
              Podés contarme sobre tu negocio y juntos encontraremos la mejor solución de automatización con IA para vos.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-white-accent">
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 px-4 py-3 border border-white-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white p-3 rounded-lg transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
