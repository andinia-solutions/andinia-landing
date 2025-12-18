import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface FloatingWidgetProps {
  onClick: () => void;
}

export default function FloatingWidget({ onClick }: FloatingWidgetProps) {
  const location = useLocation();
  const isAgentsPage = location.pathname === '/agents';
  
  return (
    <button
      onClick={onClick}
      className={`fixed right-8 z-[60] bg-gradient-to-r from-primary to-primary-dark text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none ${
        isAgentsPage ? 'bottom-[45vh]' : 'bottom-8'
      }`}
      style={{
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }}
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
}
