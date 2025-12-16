import { MessageCircle } from 'lucide-react';

interface FloatingWidgetProps {
  onClick: () => void;
}

export default function FloatingWidget({ onClick }: FloatingWidgetProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-3 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium hidden sm:inline">
        Contanos y descubrí qué podemos hacer por vos
      </span>
      <span className="font-medium sm:hidden">Agendá tu reunión</span>
    </button>
  );
}
