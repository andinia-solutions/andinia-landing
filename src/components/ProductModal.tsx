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
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-white-accent p-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-primary">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white-soft rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-black-corp" />
          </button>
        </div>

        <div className="p-8 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-black-corp mb-4">Qué hace</h3>
            <p className="text-black-corp/80 text-lg leading-relaxed">{whatDoes}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black-corp mb-4">Dolor que resuelve</h3>
            <p className="text-black-corp/80 text-lg leading-relaxed">{painPoints}</p>
          </div>

          <div className="bg-primary/10 rounded-xl p-6 border-2 border-primary/20">
            <p className="text-lg text-primary font-semibold">{copyLanding}</p>
          </div>

          {contextualInfo && (
            <div className="bg-white-soft rounded-xl p-6 border-2 border-white-accent">
              <h3 className="text-lg font-bold text-black-corp mb-3">Contexto adicional</h3>
              <p className="text-black-corp/80 text-base leading-relaxed">{contextualInfo}</p>
            </div>
          )}

          <button
            onClick={onAction}
            className="w-full py-4 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold text-lg rounded-xl transition-all duration-300"
          >
            Lo quiero
          </button>
        </div>
      </div>
    </div>
  );
}
