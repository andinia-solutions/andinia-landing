import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { MessageCircle, X } from 'lucide-react';
import { useChat } from '../context/ChatContext';

// Configure your backend API URL here
// This endpoint should return { client_secret: string }
const CHATKIT_API_URL = import.meta.env.VITE_CHATKIT_API_URL || '/api/chatkit/session';

export default function ChatKitWidget() {
  const { isOpen, openChat, closeChat } = useChat();

  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        // If we already have a valid secret, reuse it
        if (existing) {
          return existing;
        }

        // Fetch a new client secret from your backend
        const res = await fetch(CHATKIT_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error('Failed to get ChatKit session');
        }

        const { client_secret } = await res.json();
        return client_secret;
      },
    },
  });

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={openChat}
        className={`fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-3 group ${isOpen ? 'hidden' : ''}`}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-medium hidden sm:inline">
          Contanos y descubrí qué podemos hacer por vos
        </span>
        <span className="font-medium sm:hidden">Agendá tu reunión</span>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeChat}
          />

          {/* Chat Container */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-white px-6 py-4 flex items-center justify-between shrink-0">
              <div>
                <h3 className="font-semibold text-lg">Agente de Ventas AndinIA</h3>
                <p className="text-sm text-white/80">Online</p>
              </div>
              <button
                onClick={closeChat}
                className="p-2 hover:bg-primary-dark rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* ChatKit Component */}
            <div className="flex-1 overflow-hidden">
              <ChatKit
                control={control}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
