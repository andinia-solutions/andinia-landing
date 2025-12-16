import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Store, Utensils, Heart, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

interface HomeProps {
  onOpenChat: () => void;
}

export default function Home({ onOpenChat }: HomeProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [showFooter, setShowFooter] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight * 0.3) {
        setShowFooter(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsMuted(false);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/fondo-index.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 via-primary-dark/75 to-primary/70 backdrop-blur-sm" />

      <div className="relative z-10 min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex justify-center lg:justify-start mb-6">
              <img
                src="/andinia-textlogo.png"
                alt="AndinIA"
                className="h-24 w-auto"
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Elegí tu industria
            </h1>

            <div className="space-y-4">
              <Link
                to="/comercios"
                className="group flex items-center justify-between p-6 bg-white/95 backdrop-blur-sm border-2 border-white-accent hover:border-primary hover:bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Store className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-2xl font-semibold text-black-corp">Comercios</span>
                </div>
                <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                to="/gastronomia"
                className="group flex items-center justify-between p-6 bg-white/95 backdrop-blur-sm border-2 border-white-accent hover:border-primary hover:bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Utensils className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-2xl font-semibold text-black-corp">Gastronomía</span>
                </div>
                <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                to="/bienestar"
                className="group flex items-center justify-between p-6 bg-white/95 backdrop-blur-sm border-2 border-white-accent hover:border-primary hover:bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-2xl font-semibold text-black-corp">
                    Bienestar y Cuidado Personal
                  </span>
                </div>
                <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="pt-8 space-y-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/40 shadow-xl">
                <h2 className="text-3xl font-bold text-black-corp mb-4">
                  ¿Sos de otra industria?
                </h2>
                <p className="text-xl text-black-corp/90 mb-3">
                  ¿Buscás consultoría o integraciones con IA para tu empresa?
                </p>
                <p className="text-2xl font-semibold text-primary mb-6">
                  Optimizá o automatizá tus flujos de trabajo con IA
                </p>

                <button
                  onClick={onOpenChat}
                  className="w-full px-8 py-5 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold text-xl rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
                >
                  Chateá con nuestra Agente de Ventas y descubrí qué podemos hacer por vos
                </button>

                <Link
                  to="/agents"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-semibold text-lg transition-colors"
                >
                  Conocé a nuestros Agentes <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative aspect-[3/4] w-[85%] bg-black rounded-3xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  type="video/mp4"
                />
              </video>

              <button
                onClick={isMuted ? handleUnmute : handleMute}
                className="absolute bottom-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-black-corp" />
                ) : (
                  <Volume2 className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showFooter && (
        <div className="relative z-10 animate-fade-in">
          <Footer onOpenChat={onOpenChat} />
        </div>
      )}
    </div>
  );
}
