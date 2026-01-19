import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Store, Utensils, Heart, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import { useChat } from '../context/ChatContext';

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [showFooter, setShowFooter] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const { openChat } = useChat();

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

  // Scroll to top cuando se carga la página en mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      window.scrollTo(0, 0);
    }
  }, []);

  // Auto-mute cuando termina el video en mobile
  useEffect(() => {
    const video = mobileVideoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      video.muted = true;
      setIsMuted(true);
    };

    video.addEventListener('ended', handleVideoEnd);
    return () => video.removeEventListener('ended', handleVideoEnd);
  }, []);

  const handleUnmute = () => {
    const isMobile = window.innerWidth < 768; // md breakpoint
    
    if (!isMobile && videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
    if (isMobile && mobileVideoRef.current) {
      // Quitar loop para que pueda terminar
      mobileVideoRef.current.loop = false;
      mobileVideoRef.current.muted = false;
      mobileVideoRef.current.currentTime = 0;
      mobileVideoRef.current.play();
    }
    setIsMuted(false);
  };

  const handleMute = () => {
    const isMobile = window.innerWidth < 768; // md breakpoint
    
    if (!isMobile && videoRef.current) {
      videoRef.current.muted = true;
    }
    if (isMobile && mobileVideoRef.current) {
      mobileVideoRef.current.muted = true;
      mobileVideoRef.current.loop = true; // Restaurar loop
    }
    setIsMuted(true);
  };

  return (
    <div className="min-h-screen relative">
      {/* ============================================
          MOBILE LAYOUT
          ============================================ */}
      <div className="md:hidden">
        {/* Video Section - Pantalla completa */}
        <div className="relative h-screen pt-20">
          <div className="absolute inset-0 bg-black">
            <video
              ref={mobileVideoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://xuc1mufbju1siyiq.public.blob.vercel-storage.com/index.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Botón de sonido - esquina superior izquierda */}
          <button
            onClick={isMuted ? handleUnmute : handleMute}
            className="absolute z-20 top-24 left-4 p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg hover:bg-white/30 transition-all duration-300"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>

        </div>

        {/* Content Section - Botones y links - overlapping the video */}
        <div id="mobile-content" className="relative min-h-screen -mt-28 z-10 scroll-mt-28 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
          {/* Fondo con imagen y bordes redondeados arriba */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-t-3xl overflow-hidden"
            style={{ backgroundImage: 'url(/fondo-index.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 via-primary-dark/75 to-primary/70 backdrop-blur-sm rounded-t-3xl" />

          {/* Contenido */}
          <div className="relative z-10 px-4 pt-4 pb-8">
            {/* Handle/pill indicator */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-1.5 bg-white/40 rounded-full" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">
              Elegí tu industria
            </h1>

            <div className="space-y-2.5">
              <Link
                to="/comercios"
                className="group flex items-center justify-between p-3.5 bg-white/95 backdrop-blur-md border-2 border-white-accent hover:border-primary hover:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/15 rounded-lg group-hover:bg-primary/25 transition-colors">
                    <Store className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-base font-semibold text-black-corp">Comercios</span>
                </div>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                to="/gastronomia"
                className="group flex items-center justify-between p-3.5 bg-white/95 backdrop-blur-md border-2 border-white-accent hover:border-primary hover:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/15 rounded-lg group-hover:bg-primary/25 transition-colors">
                    <Utensils className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-base font-semibold text-black-corp">Gastronomía</span>
                </div>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                to="/bienestar"
                className="group flex items-center justify-between p-3.5 bg-white/95 backdrop-blur-md border-2 border-white-accent hover:border-primary hover:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/15 rounded-lg group-hover:bg-primary/25 transition-colors">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-base font-semibold text-black-corp">
                    Bienestar y Cuidado Personal
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="pt-4">
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 border-2 border-primary/40 shadow-xl">
                <h2 className="text-xl font-bold text-black-corp mb-2">
                  ¿Sos de otra industria?
                </h2>
                <p className="text-sm text-black-corp/90 mb-3">
                  ¿Buscás consultoría o integraciones con IA para tu empresa?
                </p>

                <button
                  onClick={openChat}
                  className="w-full px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mb-3"
                >
                  Chateá con nuestra Agente de Ventas
                </button>

                <p className="text-sm font-semibold text-primary mb-2.5 text-center">
                  Optimizá o automatizá tus flujos de trabajo con IA
                </p>
              </div>

              <div className="flex justify-center mt-3">
                <Link
                  to="/agents"
                  className="inline-flex items-center text-white hover:text-white/80 font-semibold text-lg transition-colors"
                >
                  Conocé a nuestros Agentes <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
          DESKTOP LAYOUT - Sin cambios
          ============================================ */}
      <div className="hidden md:block">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/fondo-index.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 via-primary-dark/75 to-primary/70 backdrop-blur-sm" />

        <div className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-8 px-4">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Elegí tu industria
              </h1>

              <div className="space-y-2.5">
                <Link
                  to="/comercios"
                  className="group flex items-center justify-between p-3.5 bg-white/95 backdrop-blur-md border-2 border-white-accent hover:border-primary hover:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/15 rounded-lg group-hover:bg-primary/25 transition-colors">
                      <Store className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-base font-semibold text-black-corp">Comercios</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-2 transition-transform" />
                </Link>

                <Link
                  to="/gastronomia"
                  className="group flex items-center justify-between p-3.5 bg-white/95 backdrop-blur-md border-2 border-white-accent hover:border-primary hover:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/15 rounded-lg group-hover:bg-primary/25 transition-colors">
                      <Utensils className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-base font-semibold text-black-corp">Gastronomía</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-2 transition-transform" />
                </Link>

                <Link
                  to="/bienestar"
                  className="group flex items-center justify-between p-3.5 bg-white/95 backdrop-blur-md border-2 border-white-accent hover:border-primary hover:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/15 rounded-lg group-hover:bg-primary/25 transition-colors">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-base font-semibold text-black-corp">
                      Bienestar y Cuidado Personal
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              <div className="pt-2">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 border-2 border-primary/40 shadow-xl">
                  <h2 className="text-xl font-bold text-black-corp mb-2">
                    ¿Sos de otra industria?
                  </h2>
                  <p className="text-sm text-black-corp/90 mb-3">
                    ¿Buscás consultoría o integraciones con IA para tu empresa?
                  </p>

                  <button
                    onClick={openChat}
                    className="w-full px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mb-3"
                  >
                    Chateá con nuestra Agente de Ventas y descubrí qué podemos hacer por vos
                  </button>

                  <p className="text-sm font-semibold text-primary mb-2.5 text-center">
                    Optimizá o automatizá tus flujos de trabajo con IA
                  </p>
                </div>

                <div className="flex justify-center mt-3">
                  <Link
                    to="/agents"
                    className="inline-flex items-center text-white hover:text-white/80 font-semibold text-lg transition-colors"
                  >
                    Conocé a nuestros Agentes <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center mt-8 lg:mt-0">
              <div className="relative aspect-[3/4] w-[75%] lg:w-[70%] bg-black rounded-2xl overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://xuc1mufbju1siyiq.public.blob.vercel-storage.com/index.mp4"
                    type="video/mp4"
                  />
                </video>

                <button
                  onClick={isMuted ? handleUnmute : handleMute}
                  className="absolute bottom-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-colors flex items-center space-x-2"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-5 h-5 text-black-corp" />
                      <span className="text-black-corp font-medium text-sm">Desmutear video</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-5 h-5 text-primary" />
                      <span className="text-primary font-medium text-sm">Mutear video</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer siempre presente pero oculto inicialmente */}
      <div className={`relative z-10 transition-opacity duration-500 ${showFooter ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Footer />
      </div>
    </div>
  );
}

