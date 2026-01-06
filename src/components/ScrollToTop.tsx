import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Solo en mobile (pantallas < 768px)
        if (window.innerWidth < 768) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
}
