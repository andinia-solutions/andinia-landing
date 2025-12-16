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

      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-8 px-4">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <div className="flex justify-center lg:justify-start">
              <div>
                <img
                  src="/andinia-textlogo copy.png"
                  alt="AndinIA"
                  className="h-20 w-auto mb-2"
                />
                <p className="text-white/80 font-light text-lg">
                  Llevamos la inteligencia artificial a tu empresa
                </p>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Elegí tu industria
            </h1>

            <div className="space-y-3">
              <Link
                to="/comercios"
                className="group flex items-center justify-between p-4 bg-white/95 backdrop-blur-sm border-2 border-white-accent hover:border-primary hover:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Store className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-black-corp">Comercios</span>
                </div>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                to="/gastronomia"
                className="group flex items-center justify-between p-4 bg-white/95 backdrop-blur-sm border-2 border-white-accent hover:border-primary hover:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Utensils className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-black-corp">Gastronomía</span>
                </div>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                to="/bienestar"
                className="group flex items-center justify-between p-4 bg-white/95 backdrop-blur-sm border-2 border-white-accent hover:border-primary hover:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-black-corp">
                    Bienestar y Cuidado Personal
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="pt-3 space-y-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 border-2 border-primary/40 shadow-xl">
                <h2 className="text-2xl font-bold text-black-corp mb-2">
                  ¿Sos de otra industria?
                </h2>
                <p className="text-sm text-black-corp/90 mb-2">
                  ¿Buscás consultoría o integraciones con IA para tu empresa?
                </p>
                <p className="text-sm font-semibold text-primary mb-4">
                  Optimizá o automatizá tus flujos de trabajo con IA
                </p>

                <button
                  onClick={onOpenChat}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mb-3"
                >
                  Chateá con nuestra Agente de Ventas y descubrí qué podemos hacer por vos
                </button>

                <Link
                  to="/agents"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-semibold text-sm transition-colors"
                >
                  Conocé a nuestros Agentes <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative aspect-[3/4] w-[80%] bg-black rounded-2xl overflow-hidden shadow-2xl">
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
