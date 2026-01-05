import { X } from 'lucide-react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAction: () => void;
  title: string;
  whatDoes: string;
  painPoints: string;
  copyLanding: string;
  contextualInfo?: string;
}

export default function ProductModal({
  isOpen,
  onClose,
  onAction,
  title,
  whatDoes,
  painPoints,
  copyLanding,
  contextualInfo,
}: ProductModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative bg-gradient-to-br from-primary-dark to-primary/30 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-white/20">
        <div className="sticky top-0 bg-primary-dark/80 backdrop-blur-md border-b border-white/20 p-6 flex items-center justify-between z-10">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors group"
          >
            <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="p-8 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md">Qué hace</h3>
            <p className="text-white/95 text-lg leading-relaxed drop-shadow-sm">{whatDoes}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md">Dolor que resuelve</h3>
            <p className="text-white/95 text-lg leading-relaxed drop-shadow-sm">{painPoints}</p>
          </div>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20 shadow-lg backdrop-blur-md">
            <p className="text-lg text-white font-bold leading-relaxed">{copyLanding}</p>
          </div>

          {contextualInfo && (
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 shadow-md">
              <h3 className="text-lg font-bold text-white mb-3">Contexto adicional</h3>
              <p className="text-white/90 text-base leading-relaxed">{contextualInfo}</p>
            </div>
          )}

          <button
            onClick={onAction}
            className="w-full py-4 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Lo quiero
          </button>


        </div>
      </div>
    </div>
  );
}
